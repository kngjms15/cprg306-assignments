"use client"

import { useUserAuth } from "./_utils/auth-context"
import Week8 from "app/week8/shopping-list/page.js";

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

            <section>
                {user ? (
                    <div className=" flex-col items-center">
                        <div>
                            <p>Welcome, {user.displayName}</p>
                            <img src={user.photoURL} className="w-24 h-24 rounded-full my-4"/>
                            <button 
                                className="justify-center flex-1 my-auto py-4 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer rounded-lg"
                                onClick={handleSignOut}>
                                Sign Out
                            </button>
                        </div>
                        <Week8 />
                        

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
