"use client"

import { useUserAuth } from "./_utils/auth-context"

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    
    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
            <header>
                <h1 className="text-4xl font-bold text-blue-800 my-8">Login Page</h1>
            </header>

            <section className="max-w-sm mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
                {user ? (
                    <div className=" flex-col items-center">
                        <p>Welcome, {user.displayName}</p>
                      <div className=" flex gap-4">
                        <img src={user.photoURL} className="w-24 h-24 rounded-full my-4"/>

                        <button 
                            className="justify-center flex-1 my-auto py-4 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer rounded-lg"
                            onClick={handleSignOut}>
                            Sign Out
                        </button>
                      </div>
                    </div>
                ) : (
                    <button 
                        className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
                        onClick={handleSignIn}>
                        Sign In
                    </button>
                )}
            </section>
        </main>
    );
}
