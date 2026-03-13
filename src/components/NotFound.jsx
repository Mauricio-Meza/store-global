import { useNavigate } from "react-router-dom";


export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
            <div className="bg-white rounded-2xl shadown-md p-10 max-w-md w-full flex flex-col items-center gap-6 text-center">
                <h1 className="text-6xl font-bold text-gray-600 text-center">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 text-center">Página no encontrada.</h2>
                <p className="text-gray-600 text-center">La página que buscás no existe o fue movida.</p>
                <button
                    onClick={() => navigate("/")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl "
                >
                    Volver a tienda
                </button>
            </div>
        </div>
    )
}


