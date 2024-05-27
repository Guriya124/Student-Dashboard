




export default function DashBoardCard({ title, value, dynamicColor }) {
    // bg - gradient - to - br ${ fromColorClass } ${ toColorClass }
    // const [fromColorClass, toColorClass] = colorClasses[color];
    return (
        <>
            <div className={`w-80 flex flex-col ${dynamicColor} shadow-gray-600 shadow-2xl rounded-lg overflow-hidden relative`}>
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <div className="text-3xl font-semibold text-gray-900 font-[montserrat]">{title}</div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className="mt-2 text-white text-3xl font-semibold pr-4 font-[montserrat]">{value}</div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

