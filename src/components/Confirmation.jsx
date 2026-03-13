import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"

export default function Confirmation(){
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                <CheckCircle size={64} className="text-green-500"/>

                <h1 className="text-3xl font-bold text-gray-900">¡Compra realizada con éxito!</h1>

                <p className="text-gray-500">
                    Gracias por tu compra. En breve recibirás un email con los detalles de su pedido.
                </p>

                <button
                onClick={() => navigate("/")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                >
                Volver a la tienda
                </button>
            </div>
        </div>
    );
}



