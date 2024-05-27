// student detail component
import { useState } from 'react';
import Dashboard from "../components/Dashboard"
import { useSelector } from "react-redux";
import StudentCard from "../components/StudentCard";
// import Button from '@mui/material/Button';

export default function StudentDeatil() {
    const student = useSelector((state) => state.student.students);
    const user = useSelector(state => state.user.currentUser)
    let matchingStudent = []
    if (user) {
        matchingStudent = student.filter(item => item && item.userId === user.email);
    }
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [searchPhone, setSearchPhone] = useState('');
    const [searchCity, setSearchCity] = useState('');
    const [searchCourse, setSearchCourse] = useState('');
    const [searchSemester, setSearchSemester] = useState('');

    const filteredStudents = matchingStudent.filter(student => {
        return (
            student.name.toLowerCase().includes(searchName.toLowerCase()) &&
            student.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
            student.phone.toLowerCase().includes(searchPhone.toLowerCase()) &&
            student.city.toLowerCase().includes(searchCity.toLowerCase()) &&
            student.course.toLowerCase().includes(searchCourse.toLowerCase()) &&
            student.semester.toString().includes(searchSemester)
        );
    });


    return (
        <div>
            <Dashboard>
                {/* Filter  */}
                <div>
                    <h1 className="text-3xl font-bold mb-10 underline">Student Detail</h1>
                    <div className="flex justify-between mb-4">
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Search by email"
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Search by phone"
                            value={searchPhone}
                            onChange={(e) => setSearchPhone(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Search by city"
                            value={searchCity}
                            onChange={(e) => setSearchCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Search by course"
                            value={searchCourse}
                            onChange={(e) => setSearchCourse(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Search by semester"
                            value={searchSemester}
                            onChange={(e) => setSearchSemester(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-">

                    <div className="flex flex-wrap gap-4 justify-center">
                        {filteredStudents.map((student, index) => (
                            <StudentCard
                                key={index}
                                name={student.name}
                                email={student.email}
                                phone={student.phone}
                                address={student.address}
                                city={student.city}
                                course={student.course}
                                startDate={student.startDate}
                                completedDate={student.completedDate}
                                semester={student.semester}
                            />
                        ))}
                    </div>
                </div>
            </Dashboard>

        </div>
    )
}
