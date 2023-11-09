"use client"

import { addNewItem, getItemList } from "./_services/shopping_list_service";
import { useUserAuth } from "./_utils/auth-context"


export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    if(user){
      const items = getItemList(user.uid);
      console.log(items);
    }

    let newItem =  {
        name: 'Onions',
        category: 'Produce',
        quantity: 1,


    };

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
                        <p>Welcome, {user.displayName}</p>
                        <p>Your user ID is: {user.uid}</p>
                        
                        <img src={user.photoURL} className="w-40 h-40 rounded-full"/>

                    <button 
                        className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
                        onClick={handleSignOut}>
                        Sign Out
                    </button>

                    <button 
                        className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
                        onClick={() => addNewItem(user.uid, newItem)}>
                        Add Item
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