import Dashboard from '../components/Dashboard'
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../app/user/userSlice';

export default function Profile() {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(signout())
  }

  return (
    <Dashboard>
      <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10'>
        <div className='p-4'>
          <div className='font-semibold text-xl mb-2'>
            <div className='truncate'>{user.name}</div>
          </div>
          <div className='text-black mb-2'>
            <div className='truncate'>{user.email}</div>
          </div>
          <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
        </div>
      </div>
    </Dashboard>
  )
}