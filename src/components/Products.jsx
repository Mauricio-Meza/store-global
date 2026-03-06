import { useState, useEffect } from "react";
import categoryMap from "../data/categoryMap";
import ProductList from "./ProductList";

export default function Products({ addToCart, activeCategory, searchQuery, onProductClick }) {
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
    <div className="flex justify-center items-center h-64">
      <p className="text-gray-500 text-lg animate-pulse">Cargando productos...</p>
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
    />
  )

  
}
