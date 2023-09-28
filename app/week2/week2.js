import Link from "next/link";
import StudentInfo from "../studentInfo";
import Week3 from "../week3/page";

export default function Week2() {
    return (
        <main>
            <header>
                <h1>Week 2</h1>
                <Link href="week3">My Shopping List</Link>
            </header>
            <StudentInfo />
        </main>
    )
}
