export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-100px',
        left: '16px',
        zIndex: 9999,
        padding: '12px 20px',
        backgroundColor: 'var(--color-brass)',
        color: '#1F1A16',
        fontFamily: 'var(--font-sans)',
        fontSize: '13px',
        fontWeight: 600,
        borderRadius: 'var(--radius-sm)',
        textDecoration: 'none',
        transition: 'top 0.2s ease',
      }}
      onFocus={e => (e.currentTarget.style.top = '16px')}
      onBlur={e => (e.currentTarget.style.top = '-100px')}
    >
      Skip to main content
    </a>
  )
}
