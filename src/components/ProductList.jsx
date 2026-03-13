
import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart, onProductClick, favorites, toggleFavorite }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
                onProductClick={onProductClick}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                 />
            ))}
        </div>

    )
}