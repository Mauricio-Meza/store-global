import { Star, Tag, Package, ShoppingCart, X } from "lucide-react";

export default function ProductDetail({ product, onClose, addToCart }) {

    if (!product) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const discount = product.discountPercentage ? Math.round(product.price / (1 - product.discountPercentage / 100)) : null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">

                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                <div className="flex flex-col md:flex-row">

                    {/* Imagen */}
                    <div className="md:w-1/2 bg-gray-50 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex items-center justify-center p-8">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full max-h-72 object-contain"
                        />
                    </div>

                    {/* Info */}
                    <div className="md:w-1/2 p-6 flex flex-col gap-4">

                        {/* Categoría */}
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-widest flex items-center gap-1">
                            <Tag size={12} />
                            {product.category}
                        </span>

                        {/* Nombre */}
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                            {product.title}
                        </h2>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">{product.rating} / 5</span>
                        </div>

                        {/* Precio */}
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                            {discount && (
                                <>
                                    <span className="text-lg text-gray-400 line-through">${discount}</span>
                                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                        -{Math.round(product.discountPercentage)}%
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Descripción */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        {/* Stock */}
                        <div className="flex items-center gap-2 text-sm">
                            <Package size={16} className={product.stock > 10 ? "text-green-500" : "text-orange-500"} />
                            <span className={product.stock > 10 ? "text-green-600" : "text-orange-500"}>
                                {product.stock > 10 ? `${product.stock} en stock` : `¡Solo quedan ${product.stock}!`}
                            </span>
                        </div>

                        {/* Botón agregar */}
                        <button
                            onClick={() => { addToCart(product); onClose(); }}
                            className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                        >
                            <ShoppingCart size={18} />
                            Agregar al carrito
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );


}



