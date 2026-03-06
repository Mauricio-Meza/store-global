import categoryMap from "../data/categoryMap";
import { Search } from "lucide-react";
export default function NavBar({ cartCount, openCart, activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
  const categories = ["Todos", ...new Set(Object.values(categoryMap))]

  return (
    <nav className="w-full bg-gray-900 text-white p-6 fixed top-0 left-0 shadow-md z-50">

      <div className="flex justify-between items-center  shrink-0 max-w-7xl mx-auto">

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/mundial.png" alt="logo" className="w-8 h-8 " />
          <h1 className="text-xl font-bold tracking-tight ">Store Global</h1>
        </div>

        <div className="flex gap-1 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition
                ${activeCategory === cat
                  ? "bg-white text-gray-800"
                  : "text-gray-200 hover:bg-gray-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative shrink-0">

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar Productos..."
            className="pl-3 pr-8 py-1.5 rounded-full text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white w-48 shrink-0"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => onSearchChange("")}
          />
        </div>

        <div
          onClick={openCart}
          className="relative cursor-pointer">
          <span className="text-xl font-semibold">🛒Carrito</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

      </div>

    </nav>
  );
}