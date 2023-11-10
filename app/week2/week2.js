import Link from "next/link";
import StudentInfo from "../studentInfo";

export default function Week2() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <div className="w-full mx-auto px-4">
            <div className="flex justify-between items-center">
                    <Link href="/">
                        <span className="inline-block text-sm bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                            Home
                        </span>
                    </Link>
                </div>
                <header className="text-center mb-12">
                    
                    <h1 className="text-4xl font-bold text-blue-800 mb-6">Week 2</h1>
                    <Link href="/week3">
                        <span className="text-md text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer underline">
                            My Shopping List
                        </span>
                    </Link>
                </header>
                <StudentInfo />
            </div>
        </main>
    )
}

