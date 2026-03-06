
export default function CartDrawer({ cart, isOpen, closeCart, removeFromCart, clearCart }) {

    const total = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <>
            {isOpen && (
                <div
                    onClick={closeCart}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                />
            )}

            <div className={`
         fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50
        transform transition-transform duration-300 flex flex-col
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        ` }>


                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-bold">Carrito</h2>
                    <button onClick={closeCart}>✖</button>
                </div>

                <div className="p-4 space-y-4 overflow-y-auto flex-1">
                    {cart.length === 0 && (
                        <p className="text-gray-500">
                            El Carrito está vacío.
                        </p>
                    )}

                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 border-b pb-4">
                            <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
                            <div className="flex-1">
                                <p className="font-semibold text-sm">{item.title}</p>
                                <p className="text-gray-600 text-sm">${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="text-red-400 hover:text-red-600 transition text-lg"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}


                </div>
                <div className="p-4 border-t">
                    <p className="font-bold">Total: ${total.toFixed(2)}</p>
                    <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Finalizar compra
                    </button>

                    <button
                        onClick={clearCart}
                        className="w-full mt-3 bg-red-500 text-white py-2 rounded transition"
                    >
                        Vaciar carrito
                    </button>

                </div>





            </div>
        </>

    )
}



