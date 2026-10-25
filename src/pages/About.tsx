import { Link } from 'react-router-dom'
import { Leaf, UtensilsCrossed, Users, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import BrandIntro from '../components/BrandIntro'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import diningExpImg from '../assets/images/dining_experience.jpg'

export default function About() {
  useDocumentMeta(
    'Our Story & Culinary Heritage',
    'Discover Hestiia Restaurant in Shyam Nagar, Kanpur. Pure vegetarian dining celebrating traditional North Indian curries, Indo-Chinese flavours, and authentic hospitality.'
  )

  return (
    <>
      <PageHero
        title="Our Culinary"
        accentWord="Heritage"
        intro="A pure vegetarian culinary sanctuary in Shyam Nagar, Kanpur, devoted to rich heritage flavours and family warmth."
        currentPage="Our Story"
      />

      {/* 1. Core Brand Story with GSAP Visual Reveal */}
      <BrandIntro />

      {/* 2. Values & Philosophy Row */}
      <section
        style={{
          padding: '64px 0',
          backgroundColor: '#16110E',
          borderTop: '1px solid rgba(184, 154, 100, 0.15)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              The Pillars of Hestiia
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: 0,
              }}
            >
              Our Guiding <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Values</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Value 1: Pure Vegetarian */}
            <div
              style={{
                padding: '32px 28px',
                borderRadius: '12px',
                backgroundColor: 'rgba(38, 31, 26, 0.7)',
                border: '1px solid rgba(184, 154, 100, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(52, 168, 83, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(52, 168, 83, 0.25)',
                }}
              >
                <Leaf size={22} color="#4ADE80" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--color-text-inverse)',
                  margin: 0,
                }}
              >
                Certified Pure Vegetarian
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.75)', margin: 0 }}>
                A strictly vegetarian kitchen without egg or meat cross-contamination. We source cold-pressed oils, fresh local paneer, and farm vegetables prepared fresh for every order.
              </p>
            </div>

            {/* Value 2: Wide Menu */}
            <div
              style={{
                padding: '32px 28px',
                borderRadius: '12px',
                backgroundColor: 'rgba(38, 31, 26, 0.7)',
                border: '1px solid rgba(184, 154, 100, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(184, 154, 100, 0.3)',
                }}
              >
                <UtensilsCrossed size={22} color="var(--color-brass)" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--color-text-inverse)',
                  margin: 0,
                }}
              >
                193 Handcrafted Dishes
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.75)', margin: 0 }}>
                From rich slow-simmered shahi gravies and clay-oven naan to fiery Indo-Chinese noodles and comforting evening chaat — an expansive menu curated to satisfy all family cravings.
              </p>
            </div>

            {/* Value 3: Family Friendly */}
            <div
              style={{
                padding: '32px 28px',
                borderRadius: '12px',
                backgroundColor: 'rgba(38, 31, 26, 0.7)',
                border: '1px solid rgba(184, 154, 100, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(184, 154, 100, 0.3)',
                }}
              >
                <Users size={22} color="var(--color-brass)" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--color-text-inverse)',
                  margin: 0,
                }}
              >
                Warm Family Ambiance
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.75)', margin: 0 }}>
                Generous multi-generational table seating, attentive table service, and soothing acoustic interiors designed so guests of all ages dine in serene comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Editorial Narrative & Gallery Feature */}
      <section style={{ padding: '72px 0', backgroundColor: '#1A1410' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Visual Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(184, 154, 100, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              <img
                src={diningExpImg}
                alt="Evening dining ambiance at Hestiia Restaurant Kanpur"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '340px',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(26, 20, 16, 0.85) 100%)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-brass-light)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Evening Dining Hall · Shyam Nagar
              </span>
            </div>

            {/* Narrative text */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brass)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Devoted Hospitality
              </span>

              {/* Note: "since 2022" appears only if confirmed; left in comment TODO */}
              {/* TODO: confirm founding year (e.g. 2022) with client before displaying in live hero */}
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(30px, 3.5vw, 44px)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: 'var(--color-text-inverse)',
                  marginBottom: '20px',
                }}
              >
                A Dining Table Crafted with <br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Heart & Hospitality</em>
              </h2>

              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.8)', marginBottom: '16px' }}>
                At Hestiia, every recipe honors the warmth of Indian culinary tradition. Our gravies simmer slowly with freshly toasted spices, our cottage cheese is delivered daily from artisanal dairies, and our tandoors fire fresh breads as soon as your order is received.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.7)', marginBottom: '32px' }}>
                Whether you visit for a celebratory family dinner, an impromptu lunch, or a peaceful evening bite, we welcome you with open arms and thoughtful care.
              </p>

              <Link
                to="/menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(184, 154, 100, 0.25)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <span>Explore the Menu</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Band */}
      <PageClosingCta
        title="Experience Our Table in"
        accentWord="Person"
        subtitle="Reserve your table today or drop by for an unforgettable dining experience in Shyam Nagar, Kanpur."
      />
    </>
  )
}
