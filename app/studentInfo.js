
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="max-w-sm mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <h2 className="text-xl font-medium text-black">James Bareng</h2>
      <p className="text-gray-500">CPRG 306 F</p>
      <Link href="https://github.com/kngjms15/cprg306-assignments">
        <span className="text-blue-400 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">
          Assignments - repo
        </span>
      </Link>
    </div>
  );
}


