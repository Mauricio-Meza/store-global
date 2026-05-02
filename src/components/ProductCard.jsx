import { Heart } from "lucide-react"

export default function ProductCard({ product, addToCart, onProductClick, favorites, toggleFavorite }) {
    const isFavorite = favorites?.some(p => p.id === product.id)

    return (
        <div className="bg-white  rounded-lg shadow-md p-4 hover:shadow-lg relative transition flex flex-col"
            onClick={() => onProductClick(product)}>

            <button
                onClick={(e) => { e.stopPropagation(); toggleFavorite(product) }}
                className="absolute top-6 right-6 z-10"
            >

                <Heart
                    size={24}
                    className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-300 hover:text-red-400 transition"}
                />
            </button>
            <img
                src={product.thumbnail}
                alt={product.title}
                width="200"
                className="w-full h-48 object-cover rounded"
            />
            <div className="flex flex-col flex-1 mt-2">
                <h2 className="text-base font-semibold line-clamp-2 leading-snug">
                    {product.title}
                </h2>

                <p className="text-gray-600">
                    ${product.price}
                </p>

                <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product) }}
                    className="w-full mt-auto pt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
