import NavBar from "./components/NavBar"
import Products from "./components/Products"
import CartDrawer from "./components/CartDrawer"
import ProductDetail from "./components/ProductDetail"
import { useState } from "react"


export default function App() {
  const [isCartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  
  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index))
  }

  const clearCart = () => setCart([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <NavBar 
      cartCount={cart.length}
      openCart = {() => setCartOpen(true)}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      
      />

      <main className="max-w-7xl mx-auto p-6 mt-20">
        <Products 
        addToCart={addToCart} 
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onProductClick={setSelectedProduct}
        />
      </main>
      
      <CartDrawer
      cart={cart}
      isOpen={isCartOpen}
      closeCart={() => setCartOpen(false)}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      />

      <ProductDetail
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
      addToCart={addToCart}
      />
    </div>
  )
}