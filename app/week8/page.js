"use client"

import { useUserAuth } from "./_utils/auth-context"


export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


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


        <main>
            <header>
                <h1>Login Page</h1>
            </header>

            <section>
                {user ? (
                    <div>
                        <p>Welcoe, {user.displayName}</p>
                        <img src={user.photoURL} className="w-40 h-40 rounded-full"/>

                    <button 
                        className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
                        onClick={handleSignOut}>
                        Sign Out
                    </button>

                    </div>
                ) : (
                    <button 
                    className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
                    onClick={handleSignIn}>
                        Sign In
                    </button>
                )}
            </section>
        </main>
    );
}