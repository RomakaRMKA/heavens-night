import menuItems from '../data/menu.json'
import './MenuPage.css'
import MenuItemCard from './MenuItemCard'

function MenuPage() {
  return (
    <section className="content-panel" id="menu">
      {menuItems.map((item) => (
        <MenuItemCard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </section>
  )
}

export default MenuPage
