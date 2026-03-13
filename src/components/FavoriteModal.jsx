import { X, Heart } from "lucide-react";

export default function FavoriteModal({ favorites, onClose, addToCart }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto relative">

                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        <Heart
                            size={20}
                            className="text-red-500 fill-red-500"
                        />
                        Mis Favoritos
                    </h2>
                    <button onClick={onClose} className="bg-gray-100 hover:gray-200 rounded-full p-2 transition">
                        <X
                            size={18}
                            className="text-gray-600"
                        />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    {favorites.length === 0 ? (
                        <p className="text-gray-600 text-center py-8">No hay productos favoritos.</p>
                    ) : (
                        favorites.map(product => (
                            <div key={product.id} className="flex items-center gap-3 border-b pb-4">
                                <img src={product.thumbnail} alt={product.title} className="w-16 h-16 object-cover rounded" />
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">{product.title}</p>
                                    <p className="font-semibold text-sm">{product.price}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-lg transition"
                                >
                                    Agregar al carrito
                                </button>

                            </div>
                        ))
                    )}
                </div>


            </div>
        </div>
    )

}


