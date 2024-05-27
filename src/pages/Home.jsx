import DashBoardCard from '../components/DashboardCard'
import Dashboard from '../components/Dashboard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Home() {
  const user = useSelector(state => state.user.currentUser)
  const student = useSelector(state => state.student.students)
  let matchingStudent = []
  if (user) {
    matchingStudent = student.filter(item => item && item.userId === user.email);
  }
  return (
    <>
      <div>
        <Dashboard >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DashBoardCard title="Total Students" value={matchingStudent.length} dynamicColor="bg-gradient-to-br from-blue-500 to-red-700" />
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

