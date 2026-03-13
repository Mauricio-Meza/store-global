import { X, LogOut, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function ProfileModal({ user, onClose }) {
    if (!user) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();


    }

    const handleLogoOut = async () => {
        await signOut(auth);
        onClose();
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
                >
                    <X
                        size={18}
                        className="text-gray-600"
                    />
                </button>

                <div className="flex flex-col gap-4 p-6">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={40} className="text-gray-400" />
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Perfil</h2>
                        <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                    </div>

                    <button
                        onClick={handleLogoOut}
                        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition"
                    >
                        <LogOut size={18} />
                        Cerrar Sesión

                    </button>

                </div>


            </div>

        </div>
    )
}



