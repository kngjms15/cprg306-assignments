export default function EventCard({ name, date, location}) {
    return (
        <div className="event-card">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{location}</p>
        </div>
    );
    }