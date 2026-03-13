
import categoryMap from "../data/categoryMap";
import { Search, User, ShoppingCart, X, Heart } from "lucide-react";

export default function NavBar({ cartCount, openCart, activeCategory, onCategoryChange, searchQuery, onSearchChange, openProfile, openFavorites, favoritesCount }) {
  const categories = ["Todos", ...new Set(Object.values(categoryMap))]

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-2 fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">

        {/* Fila 1 - Logo y Buscador */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/mundial.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold tracking-tight">Store Global</h1>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 shrink-0">
            <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar Productos..."
              className="pl-9 pr-8 py-1.5 rounded-full text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white w-80"
            />
            {searchQuery && (
              <X
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
                onClick={() => onSearchChange("")}
              />
            )}
          </div>
        </div>

        {/* Fila 2 - Categorías y Botones */}
        <div className="flex justify-between items-center">

          {/* Categorías */}
          <div className="flex-1 flex gap-1 overflow-x-auto justify-center pl-32">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition
                  ${activeCategory === cat ? "bg-white text-gray-800" : "text-gray-200 hover:bg-gray-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Botones */}
          <div className="flex items-center gap-4 shrink-0">
            <div onClick={openProfile} className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition">
              <User size={22} />
              <span className="text-sm">Perfil</span>
            </div>

            <div onClick={openFavorites} className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition relative">
              <Heart size={22} />
              <span className="text-sm">Favoritos</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </div>

            <div onClick={openCart} className="flex items-center gap-1 relative cursor-pointer hover:text-gray-300 transition">
              <ShoppingCart size={22} />
              <span className="text-sm">Carrito</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}