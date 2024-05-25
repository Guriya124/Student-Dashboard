import DashBoardCard from '../components/DashboardCard'
import Dashboard from '../components/Dashboard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div>
        <Dashboard >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DashBoardCard title="Total Students" value={1} icon="/images/student.png" dynamicColor="bg-gradient-to-br from-blue-500 to-red-700" />
          </div>
          <div className='mt-9'>
            <Link to="/add-student">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Student</button>
            </Link>
          </div>

        </Dashboard>
      </div>

    </>
  )
}

