import PageHero from '../components/PageHero'
import MenuPreview from '../components/MenuPreview'

export default function Menu() {
  return (
    <>
      <PageHero
        title="Complete Pure Vegetarian"
        accentWord="Menu"
        intro="193 authentic culinary selections arranged across 21 disciplines, prepared daily with pure vegetarian ingredients."
        currentPage="Menu"
      />
      <div style={{ paddingBottom: '48px' }}>
        <MenuPreview />
      </div>
    </>
  )
}
