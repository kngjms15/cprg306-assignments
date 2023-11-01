import Link from 'next/link';
import StudentInfo from './studentInfo.js';
import Item from './week3/item.js';
import NewEvent from './week4/new-item.js';



export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className="flex flex-col items-center justify-center m-8">
        <h1>CPRG 306: Web Development 2</h1>
      </div>



      <div className="flex justify-center">
        <StudentInfo />
      </div>
        <div className="flex flex-row gap-4 m-4 w-full items-center justify-center">
          <div>
            <Link href="week2" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 2</Link>
          </div>
          <div>
            <Link href="week3" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 3</Link>
          </div>
          <div>
            <Link href="week4" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 4</Link>
          </div>
          <div>
            <Link href="week5" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 5</Link>
          </div>
          <div>
            <Link href="week6" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 6</Link>
          </div>
          <div>
            <Link href="week7" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 7</Link>
          </div>
          <div>
            <Link href="week8" className="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 8</Link>
          </div>
          
        </div>
        
    </main>
  )
}
