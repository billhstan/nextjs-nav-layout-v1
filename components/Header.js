import React, {useState} from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import {useUser} from './UserContext';
import UserDropdown from './UserDropdown';






function Header() {
    const {
        state: {user},
      } = useUser()
    const [isActive, setIsActive] = useState(false);
    const handleMenuButtonClick=(event)=>{
        //By default, I usually throw in this command e.preventDefault();
        event.preventDefault();
      //Toggle isActive state on click
       setIsActive(current => !current);
    }
    const handleTestButtonClick=(event)=>{
        //By default, I usually throw in this command e.preventDefault();
        event.preventDefault();
      //Toggle isActive state on click
       setIsAuthenticated(current => !current);
    }   

  return (
    <header>
        <nav className="border w-screen  px-4 self-center mx-auto">
            <div className="flex flex-auto border">
            <div className="flex-none 1/5 p-2 border">
    01
  </div>
  <div className="flex-auto w-3/5 p-2 border">
    02
  </div>
  <div className="flex flex-auto w-1/5 p-2 border justify-end items-center">
    <div className="grid grid-cols-2 gap-1 m-2" style={{height:'80px',width:'170px'}}>
  <div className="col-span-2 w-5/5 mx-auto bg-transparent sticky top-0 left-0 right-0 text-left text-xs font-semibold py-1 my-0  px-2  text-blue-500 ">
    {user?user?.email:<span className="p-1"></span>} 
</div>
    <div className="col-span-2 border ">
    {user?
            <>

            <div className="border border-black flex justify-center items-center"  style={{height:'60px',width:'100%'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-6 h-6">
  <a href="#" className="hover:text-blue-400 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
  </a>
  
</svg>
             <UserDropdown/>
             </div></>:
             <div className="border border-black flex justify-center items-center"   style={{height:'60px',width:'100%'}}>
             <a
               className="hover:text-blue-400 text-blue-500 "
               href="#"
               >Log in</a>             
                       </div>
             }
     
      </div>    
      </div>
     
  </div>
            </div>
        </nav>
   </header>
)}

export default Header;