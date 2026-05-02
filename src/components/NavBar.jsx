import categoryMap from "../data/categoryMap";
import { Search, User, ShoppingCart, X, Heart, Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar({ cartCount, openCart, activeCategory, onCategoryChange, searchQuery, onSearchChange, openProfile, openFavorites, favoritesCount }) {
  const categories = ["Todos", ...new Set(Object.values(categoryMap))];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">

        {/* Fila 1 - Logo, Buscador y Botones */}
        <div className="flex items-center gap-2">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img src="/mundial.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-lg font-bold tracking-tight hidden sm:block">Store Global</h1>
          </div>

          {/* Buscador - crece para ocupar espacio disponible */}
          <div className="relative flex-1 mx-2">
            <Search size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-8 pr-8 py-1.5 rounded-full text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {searchQuery && (
              <X
                size={16}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
                onClick={() => onSearchChange("")}
              />
            )}
          </div>

          {/* Botones - desktop */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <div onClick={openProfile} className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition">
              <User size={20} />
              <span className="text-sm">Perfil</span>
            </div>

            <div onClick={openFavorites} className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition relative">
              <Heart size={20} />
              <span className="text-sm">Favoritos</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </div>

            <div onClick={openCart} className="flex items-center gap-1 relative cursor-pointer hover:text-gray-300 transition">
              <ShoppingCart size={20} />
              <span className="text-sm">Carrito</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Botones - mobile (solo íconos) */}
          <div className="flex sm:hidden items-center gap-3 shrink-0">
            <div onClick={openProfile} className="relative cursor-pointer">
               <User size={22} />
            </div>
            <div onClick={openFavorites} className="relative cursor-pointer">
              <Heart size={22} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </div>
            <div onClick={openCart} className="relative cursor-pointer">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            
          </div>

        </div>

        {/* Fila 2 - Categorías (desktop) */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
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

      </div>

    </nav>
  );
}