import React from 'react'

const Profile = ({uid}) => {
    console.log(uid)
  return (
    <div className='flex font-prosans max-w-[1300px]  mx-auto justify-center items-center mt-5 w-full'>
        {uid}
    </div>
  )
}

export default Profile