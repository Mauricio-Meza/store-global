import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import CartDrawer from "./components/CartDrawer"
import ProductDetail from "./components/ProductDetail"
import Register from "./components/Register"
import Login from "./components/Login"
import ProfileModal from "./components/ProfileModal"
import ProductCard from "./components/ProductCard"
import FavoriteModal from "./components/FavoriteModal"
import Checkout from "./components/Checkout"
import Confirmation from "./components/Confirmation"
import NotFound from "./components/NotFound"
import SkeletonCard from "./components/SkeletonCard"




export default function App() {
  const [isCartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [isProfileOpen, setProfileOpen] = useState(false)
  const [isFavoriteOpen, setFavoriteOpen] = useState(false)

  const navigate = useNavigate()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoadingAuth(false)
    })
    return () => unsubscribe()
  }, [])

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index))
  }

  const clearCart = () => setCart([])

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const toggleFavorite = (product) => {
    console.log("toggleFavorite llamado", product)
    if (!user) {
      navigate("/login")
      return
    }


    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id)
      const updated = exists ? prev.filter(p => p.id !== product.id) : [...prev, product]
      localStorage.setItem("favorites", JSON.stringify(updated))
      return updated
    })
  }

  const addToCart = (product) => {
    if (!user) {
      navigate("/login")
      return
    }
    setCart(prevCart => [...prevCart, product])
  };

  if (loadingAuth) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 animate-pulse">Cargando...</p>
    </div>
  )

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
      <Route path="/confirmation" element={<Confirmation />}/>
      <Route path="*" element={<NotFound />}/>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-200 ">
          <NavBar
            cartCount={cart.length}
            openCart={() => setCartOpen(true)}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            openProfile={() => user ? setProfileOpen(true) : navigate("/login")}
            user={user}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            openFavorites={() => setFavoriteOpen(true)}
            favoritesCount={favorites.length}

          />

          <main className="max-w-7xl mx-auto p-6 mt-20 ">
            <Products
              addToCart={addToCart}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              onProductClick={setSelectedProduct}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </main>

          <CartDrawer
            cart={cart}
            isOpen={isCartOpen}
            closeCart={() => setCartOpen(false)}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
          
          {isFavoriteOpen && (
            <FavoriteModal
               favorites={favorites}
               onClose={() => setFavoriteOpen(false)}
               addToCart={addToCart}
            />
          )}
          

          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            addToCart={addToCart}
          />
          {isProfileOpen && (
            <ProfileModal
              user={user}
              onClose={() => setProfileOpen(false)}
            />
          )}
        </div>

      } />
    </Routes>

  )
}