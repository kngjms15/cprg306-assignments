"use client"

import {useUserAuth} from "../_utils/auth-context";


export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return(
        <main>
            <header>
                <h1>Protected Page</h1>
                <section>
                    {user ? (

                        <div>
                            <p>You are successfully Logged In!</p>
                        </div>
                    ):(
                        <div>
                            <p>Please log in to view this page!</p>
                        </div>
                        
                    )}
                </section>

            </header>

        </main>


    )
}