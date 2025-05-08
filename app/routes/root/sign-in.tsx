import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { useEffect } from "react";

export const SignIn = () => {
    const handleSignIn = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <main 
            className="flex items-center justify-center min-h-screen bg-cover bg-center transition-all duration-1000 relative"
        >
            {/* Background image with overlay */}
            <div 
                className="absolute inset-0 bg-black/20 z-0" 
                style={{
                    backgroundImage: "url(/assets/images/auth-img.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />
            
            {/* Content container */}
            <section className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center mx-4 animate-fade-in-up z-10 relative backdrop-blur-sm bg-white/90">
                <header className="mb-6">
                    <Link to="/" className="block hover:scale-105 transition-transform duration-300">
                        <img 
                            src="/assets/icons/logo.svg" 
                            className="w-12 mx-auto mb-4" 
                            alt="logo" 
                        />
                    </Link>
                    <h1 className="text-xl font-semibold text-gray-800">Tourvisto</h1>
                </header>
                <article className="mb-6">
                    <h2 className="text-lg font-medium text-gray-700">Start Your Travel Journey</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Sign in with Google to manage destinations, itineraries, and user activity with ease.
                    </p>
                </article>
                <ButtonComponent
                    iconCss="e-search-icon"
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full hover:scale-[1.02] active:scale-100"
                    onClick={handleSignIn}
                >
                    <img src="/assets/icons/google.svg" alt="google" className="w-5" />
                    <span className="font-medium">Sign in with Google</span>
                </ButtonComponent>
            </section>
        </main>
    );
};

export default SignIn;