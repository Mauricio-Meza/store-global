import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch {
            setError("Error al registrarse, intenta nuevamente.");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadown-md w-full max-w-md">

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Crear cuenta</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleRegister}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Registrarse
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                    ¿Ya tenés cuenta?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Iniciá sesión
                    </Link>
                </p>

            </div>

        </div>
    )
}



