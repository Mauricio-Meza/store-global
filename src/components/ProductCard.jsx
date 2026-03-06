

export default function ProductCard({ product, addToCart, onProductClick }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            onClick={() => onProductClick(product)}>


            <img
                src={product.thumbnail}
                alt={product.title}
                width="200"
                className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-lg font-semibold mt-2">
                {product.title}
            </h2>

            <p className="text-gray-600">
                ${product.price}
            </p>

            <button
                onClick={(e) => {e.stopPropagation(); addToCart(product)}}
                className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Agregar al carrito
            </button>
        </div>
    )
}
