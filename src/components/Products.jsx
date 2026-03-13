import { useState, useEffect } from "react";
import categoryMap from "../data/categoryMap";
import ProductList from "./ProductList";
import SkeletonCard from "./SkeletonCard";

export default function Products({ addToCart, activeCategory, searchQuery, onProductClick, favorites, toggleFavorite }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=194");
        const data = await res.json();
        setProducts(data.products ?? []);
      } catch (err) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 

  const filteredProducts = products
    .filter(product => activeCategory === "Todos" || categoryMap[product.category] === activeCategory)
    .filter(product => product.title?.toLowerCase().includes(searchQuery.toLowerCase()))

  if (loading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
      
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-500">{error}</p>
    </div>
  );

  return (
    <ProductList
      products={filteredProducts}
      addToCart={addToCart}
      onProductClick={onProductClick}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )

  
}
