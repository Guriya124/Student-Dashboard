// student detail component

import Dashboard from "../components/Dashboard"
import { useSelector } from "react-redux";
import StudentCard from "../components/StudentCard";
// import Button from '@mui/material/Button';

export default function StudentDeatil() {
    const student = useSelector((state) => state.student.students);
    return (
        <div>
            <Dashboard>
                <div>
                    <h1 className="text-3xl font-bold">Student Detail</h1>
                </div>
                <div className="flex flex-wrap gap-">
                   
                    <div className="flex flex-wrap gap-4 justify-center">
                        {student.map((student, index) => (
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
