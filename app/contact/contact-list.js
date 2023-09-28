import Contact from './contact.js';

export default function ContactList() {
    const contact1 = {
        fname: "John",
        lname: "Smith",
        email: "johnsmith@mail.ca",
        phone: "403-555-5555"
    };

    const contact2 = {
        fname: "Jane",
        lname: "Doe",
        email: "janedoe@mail.ca",
        phone: "403-555-4855"
    };

    const contact3 = {
        fname: "Jeep",
        lname: "Blow",
        email: "jeepblow@mail.ca",
        phone: "403-123-4855"
    };

    const contact4 = {
        fname: "Blippy",
        lname: "Flippy",
        email: "blippyflippy@mail.ca",
        phone: "403-456-4855"
    };

    const contact5 = {
        fname: "Mikka",
        lname: "Dikka",
        email: "mikkadikka@mail.ca",
        phone: "40789-4855"
    };

    return (
        <div>
            <Contact fname={contact1.fname} lname={contact1.lname} email={contact1.email} phone={contact1.phone} />
            <Contact fname={contact2.fname} lname={contact2.lname} email={contact2.email} phone={contact2.phone} />
            <Contact fname={contact3.fname} lname={contact3.lname} email={contact3.email} phone={contact3.phone} />
            <Contact fname={contact4.fname} lname={contact4.lname} email={contact4.email} phone={contact4.phone} />
            <Contact fname={contact5.fname} lname={contact5.lname} email={contact5.email} phone={contact5.phone} />
        </div>
    );
}