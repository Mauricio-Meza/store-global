import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Checkout({ cart, clearCart }) {
    const navigate = useNavigate();
    const total = cart.reduce((acc, item) => acc + item.price, 0)

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        direccion: "",
        pago: "tarjeta"
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        if (!form.nombre || !form.email || !form.direccion) {
            alert("Por favor completa todos los campos correspondientes.")
            return;
        }
        clearCart();
        navigate("/confirmation")
    };

    return (
        <div className="min-h-screen bg-gray-100 items-center p-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                    <h2 className="text-2x1 font-bold text-gray-900">Datos de envio</h2>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="nombre y apellido"
                        value={form.nombre}
                        onChange={handleChange}
                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={form.email}
                        onChange={handleChange}
                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="direccion"
                        placeholder="direccion de envío"
                        value={form.direccion}
                        onChange={handleChange}
                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <h3 className="font-semibold text-gray-600 mt-2">Método de pago</h3>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="pago"
                                value="tarjeta"
                                checked={form.pago === "tarjeta"}
                                onChange="handleChange"
                            />
                            Tarjeta
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="pago"
                                value="efectivo"
                                checked={form.pago === "efectivo"}
                                onChange={handleChange}
                            />
                            Efectivo
                        </label>

                    </div>
                    <button
                        onClick={handleSubmit}
                        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"

                    >
                        Confirmar Compra
                    </button>

                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-gray-900">Resumen</h2>

                    <div className="space-y-3 overflow-y-auto max-h-80">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 border-b pb-3">
                                <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded"/>
                                <div className="flex 1">
                                    <p className="text-sm font-semibold">{item.title}</p>
                                    <p className="text-sm text-gray-500">${item.price}</p>
"
                                </div>

                                
                            </div>

                        ))}
                    </div>

                    <div className="border-t pt-4">
                        <p className="text-xl font-bold text-gray-900">total: ${total.toFixed(2)}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}


