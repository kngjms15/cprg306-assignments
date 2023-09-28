import Link from 'next/link';
import StudentInfo from './studentInfo.js';
import Item from './week3/item.js';
import EventList from './week3/event-list.js';
import Weather from './week3/weather.js';
import Contact from './contact/contact.js';


export default function Home() {
  return (
    <main className='flex flex-col'>
      
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      
      <StudentInfo />
      
      <Link  href="week2">Week 2</Link>

      <Link href="week3">Week 3</Link>

      <Link href="contact">Contact</Link>

      <EventList />
      
      <Weather />
    </main>
  )
}
