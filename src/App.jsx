import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const filteredItems = items.filter((item) => item.category === category)
    setMenuItems(filteredItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  )
}

export default App
