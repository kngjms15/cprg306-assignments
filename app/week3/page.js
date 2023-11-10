import Link from "next/link";
import ItemList from "./item-list";

export default function Week3() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col py-8">
            <div className="w-full px-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <span className="inline-block text-sm bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                            Home
                        </span>
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-800 my-6 text-center pr-20 flex-1">Week 3: Shopping List</h1>
                </div>
                <ItemList />
            </div>
        </main>
    );
}
