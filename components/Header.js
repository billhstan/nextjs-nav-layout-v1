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
        <nav className="border max-w-7xl  px-4 self-center mx-auto h-24" >
            <div className="flex flex-auto border h-10">
            <div className="flex-none 1/5  border">
            <Image src="/header-tiny.png" alt="logo"  width="24" height="24" className="h-9 w-9"></Image>
  </div>
  <div className="flex-auto w-3/5 p-2 border">
    Section for placing more dropdown menus
  </div>
  <div className="flex flex-auto p-2 border justify-end items-center w-[200px]"  >


    {user?
            <>

          
<Link href="#" ><a className="p-1 m-1 border-2 rounded hover:border-gray-400 border-gray-600 shrink-0"><Image src="/inbox.svg" alt="inbox" width="20" height="20" /></a></Link>
<Link href="#" ><a className="p-1 m-1 border-2 rounded hover:border-gray-400 border-gray-600 shrink-0"><Image src="/store.svg" alt="store" width="20" height="20" /></a></Link>
<Link href="#" ><a className="p-1 m-1 border-2 rounded hover:border-gray-400 border-gray-600 shrink-0"><Image src="/chat.svg" alt="chat" width="20" height="20" /></a></Link>

  
             <UserDropdown/>
             </>:
     <>
             <a
               className="hover:text-blue-400 text-blue-500 btn btn-outline btn-success mx-2 btn-sm"
               href="#"
               >Register</a>                <a
               className="hover:text-blue-400 text-blue-500 btn btn-outline btn-info mx-2 btn-sm"
               href="#"
               >Log in</a>             
       </>
             }
     


     
  </div>
            </div>







            <div className="flex flex-auto border h-10">
            <div className="flex-none 2/5  border">
            <Image src="/header-long.png" alt="logo-long"  width="120" height="24" className="h-9 w-40"></Image>
  </div>
  <div className="flex-auto w-3/5 p-2 border">
    Section for placing search input elements
  </div>
  <div className="flex flex-auto p-1 border justify-end items-center w-[150px]"  >
  <a
               className="btn  btn-primary mx-2 btn-sm text-white hover:text-yellow"
               href="#"
               >Sell</a>     
     


     
  </div>
            </div>





        </nav>
   </header>
)}

export default Header;