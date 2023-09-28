import Link from "next/link";

export default function Contact({fname, lname, email, phone}) {
    return(
        <div>
            <h3>{fname} {lname}</h3>
            <p>
            <b>Email:</b> <Link href={email}>{email}</Link>
            <p>{phone}</p>
            </p>
        </div>
    )
}