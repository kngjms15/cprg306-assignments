import Link from "next/link";
import StudentInfo from "./studentInfo.js";
import Item from "./week3/item.js";
import NewEvent from "./week4/new-item.js";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-4xl font-bold text-blue-800 my-8">
        <h1>CPRG 306: Web Development 2</h1>
      </div>

      <StudentInfo />

      <div className="grid grid-cols-4 gap-4 m-4">
        <Link
          href="week2"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 2
        </Link>
        <Link
          href="week3"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 3
        </Link>
        <Link
          href="week4"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 4
        </Link>
        <Link
          href="week5"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 5
        </Link>
        <Link
          href="week6"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 6
        </Link>
        <Link
          href="week7"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 7
        </Link>
        <Link
          href="week8"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 8
        </Link>
        <Link
          href="week10"
          className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg"
        >
          Week 10
        </Link>
      </div>
    </main>
  );
}
