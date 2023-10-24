import Link from 'next/link';
import StudentInfo from './studentInfo.js';
import Item from './week3/item.js';
import NewEvent from './week4/new-item.js';



export default function Home() {
  return (
    <main className='flex flex-col'>
      <div class="flex flex-col items-center justify-center m-8">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>

      <div class="flex justify-center">
        <StudentInfo />
      </div>
        <div class="flex flex-row gap-4 m-4 w-full items-center justify-center">
          <div>
            <Link href="week2" class="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 2</Link>
          </div>
          <div>
            <Link href="week3" class="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 3</Link>
          </div>
          <div>
            <Link href="week4" class="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 4</Link>
          </div>
          <div>
            <Link href="week5" class="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 5</Link>
          </div>
          <div>
            <Link href="week6" class="flex-1 text-center bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">Week 6</Link>
          </div>
        </div>
        
    </main>
  )
}
