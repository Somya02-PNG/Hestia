#!/usr/bin/env node
import { readFileSync } from 'fs'
import { resolve } from 'path'

const isProduction = process.argv.includes('--production') || process.env.NODE_ENV === 'production'

console.log(`[Content Validator] Running content validation (Production mode: ${isProduction})...`)

const errors = []
const warnings = []

function checkFile(relPath) {
  try {
    const fullPath = resolve(process.cwd(), relPath)
    return readFileSync(fullPath, 'utf-8')
  } catch {
    errors.push(`Could not read file: ${relPath}`)
    return ''
  }
}

// 1. Validate restaurant.ts
const restContent = checkFile('src/content/restaurant.ts')
if (!restContent.includes('Hestiia Restaurant')) {
  errors.push('restaurant.ts: Missing verified restaurant name "Hestiia Restaurant"')
}
if (!restContent.includes('+91 78808 40622') || !restContent.includes('+917880840622')) {
  errors.push('restaurant.ts: Missing verified phone number "+91 78808 40622"')
}
if (!restContent.includes('208013')) {
  errors.push('restaurant.ts: Missing verified postal code "208013"')
}

// Check for pending status
if (restContent.includes("status: 'pending'") || restContent.includes('status: "pending"')) {
  const msg = 'restaurant.ts contains pending items (e.g. operating hours awaiting client confirmation).'
  if (isProduction) {
    errors.push(`[PRODUCTION ERROR] ${msg}`)
  } else {
    warnings.push(`[DEV WARNING] ${msg}`)
  }
}

// 2. Validate reservations.ts
const resContent = checkFile('src/content/reservations.ts')
const allowedHosts = ['district.in', 'zomato.com', 'eazydiner.com']
for (const host of allowedHosts) {
  if (!resContent.includes(host)) {
    errors.push(`reservations.ts: Missing verified reservation host "${host}"`)
  }
}

// 3. Validate gallery.ts
const galContent = checkFile('src/content/gallery.ts')
if (!galContent.includes('alt:')) {
  errors.push('gallery.ts: Gallery items must have descriptive alt attributes.')
}

// Report
console.log('--- Content Validation Report ---')
if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} Pending item(s) detected:`)
  warnings.forEach(w => console.log(`   - ${w}`))
}

if (errors.length > 0) {
  console.error(`❌ ${errors.length} Error(s) found:`)
  errors.forEach(e => console.error(`   - ${e}`))
  process.exit(1)
} else {
  console.log('✅ Content validation passed successfully!')
  process.exit(0)
}
