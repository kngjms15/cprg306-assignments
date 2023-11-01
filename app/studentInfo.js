import Link from "next/link";

export default function StudentInfo(){
    return (
        <main className="my-4 justify-center text-center">
            <p>Name: James Bareng</p>
            <p>Course section: CPRG 306 F</p>
                <Link href="https://github.com/kngjms15/cprg306-assignments">Assignments - repo</Link>
        </main>
    )
}