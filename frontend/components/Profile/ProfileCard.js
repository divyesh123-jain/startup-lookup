import React from 'react'

const ProfileCard = ({data}) => {

    return (
        <div>
            <div className="w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                 
               
                    {/* Dropdown menu */}
                    <div
                        id="dropdown"
                        className="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: 0,
                            transform: "translate3d(476px, 83.2px, 0px)"
                        }}
                    >
                        
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="mb-3 w-24 h-24 rounded-full shadow-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU"
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {data.firstname + " " +data.lastname}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {data.typeOfInvester&& data.typeOfInvester}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a 
                            href="#"
                            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            See Profile
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileCard