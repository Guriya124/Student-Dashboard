import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { addStudent } from '../app/student/studentSlice'
import { Select, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


export default function AddStudentForm() {
    const user = useSelector(state => state.user.currentUser)
    const userId = user.email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [landmark, setLandmark] = useState('');
    const [course, setCourse] = useState('');
    const [startDate, setStartDate] = useState('');
    const [completedDate, setCompletedDate] = useState('');
    const [semester, setSemester] = useState('');

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'landmark':
                setLandmark(value);
                break;
            case 'course':
                setCourse(value);
                break;
            case 'startDate':
                setStartDate(value);
                break;
            case 'completedDate':
                setCompletedDate(value);
                break;
            case 'semester':
                setSemester(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const id = uuidv4();
            const newStudent = {
                id,
                userId,
                name,
                email,
                phone,
                address,
                city,
                landmark,
                course,
                startDate,
                completedDate,
                semester,
            };

            dispatch(addStudent(newStudent));
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setCity("")
            setLandmark("")
            setCourse("")
            setStartDate("")
            setCompletedDate("")
            setSemester("")
            console.log(newStudent);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Paper elevation={2} sx={{ padding: 3 }}>
            <div className="text-black ">
                <h1 className="my-2 text-3xl font-bold mb-10 text-center">Add Student</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className="flex flex-wrap gap-4  justify-center">
                    <div className="w-[450px]">
                        <label>Name</label>
                        <TextField id="name" name="name" value={name} onChange={handleInputChange} label="Name" variant="outlined" fullWidth required />
                    </div>
                    <div className="w-[450px] ">
                        <label>Email</label>
                        <TextField id="email" name="email" value={email} onChange={handleInputChange} label="Email" variant="outlined" fullWidth required />
                    </div>
                    <div className=" w-[450px]">
                        <label>Phone</label>
                        <TextField id="phone" name="phone" value={phone} onChange={handleInputChange} type="number" label="Phone Number" variant="outlined" fullWidth required />
                    </div>
                    <div className=" w-[450px]">
                        <label>Address</label>
                        <TextField id="address" name="address" value={address} onChange={handleInputChange} label="Address" variant="outlined" fullWidth required />
                    </div>
                    <div className="w-[450px] ">
                        <label>City</label>
                        <TextField id="city" name="city" value={city} onChange={handleInputChange} label="City" variant="outlined" fullWidth />
                    </div>
                    <div className="w-[450px]">
                        <label>Landmark</label>
                        <TextField id="landmark" name="landmark" value={landmark} onChange={handleInputChange} label="Landmark" variant="outlined" fullWidth />
                    </div>
                    <div className="w-[450px] ">
                        <label>Course</label>
                        <TextField id="course" name="course" value={course} onChange={handleInputChange} label="Course" variant="outlined" fullWidth />
                    </div>
                    <div className="w-[450px]">
                        <label>Start Date</label>
                        <TextField id="startDate" name="startDate" value={startDate} onChange={handleInputChange} type="date" variant="outlined" fullWidth />
                    </div>
                    <div className="w-[450px]">
                        <label>Complete Date</label>
                        <TextField id="completedDate" name="completedDate" value={completedDate} onChange={handleInputChange} type="date" variant="outlined" fullWidth />
                    </div>
                    <div className="w-[450px]">
                        <label htmlFor="semester" className="text-black">Semester</label>
                        <Select
                            id="semester"
                            name="semester"
                            label="Semester"
                            value={semester}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                        >

                            <MenuItem value={1}>1 </MenuItem>
                            <MenuItem value={2}>2 </MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <Button type="submit" variant="outlined" className="relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-[montserrat]">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fd1d1d_0%,#833ab4_50%,#fd1d1d_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center px-6 font-medium text-slate-200 transition-all backdrop-blur-3xl"
                            style={{
                                backgroundImage: 'linear-gradient(110deg, #e63946,40%,#1e2631,55%,#000103)',
                                backgroundSize: '200% 100%',
                                transition: 'background-position 0.5s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundPosition = '-100% 0'}
                            onMouseLeave={(e) => e.target.style.backgroundPosition = '100% 0'}
                        >
                            Add Student
                        </span>
                    </Button>
                </div>
            </form>
        </Paper>
    );
}
