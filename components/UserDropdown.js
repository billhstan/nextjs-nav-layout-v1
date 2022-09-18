import Image from 'next/future/image';
import {useUser} from './UserContext';
export default function UserDropdown() {
  const {
    state: {user},
  } = useUser()
    return (
        <>  
    <div className="dropdown dropdown-end  items-center ">
 
    <a 
               className="hover:text-blue-400 text-blue-500"
               href="#"
               >
<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 shrink-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                
                </a>   

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 bg-white-500 shadow-lg  shadow-black-500/50 bg-base-100 rounded-box w-60 border">
        {user?<li className="text-sm p-2">{user.email}</li>:''}
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </>

    )
  }
