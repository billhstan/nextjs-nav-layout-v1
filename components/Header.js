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
            <div className="flex flex-auto border h-12">
            <div className="flex-none 1/5  border">
            <Image src="/header_logo.svg" alt="logo" layout="responsive" height="42" width="142"></Image>
  </div>
  <div className="flex-auto w-3/5 p-2 border">
    02
  </div>
  <div className="flex flex-auto p-2 border justify-end items-center"  style={{width:'310px'}}>


    {user?
            <>

            <div className="flex  justify-end items-center space-x-4"  style={{width:'100%'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"  height="10" strokeWidth="1.5" stroke="currentColor" 
    className="w-9 h-9 shrink-0">
  <a href="#" className="hover:text-blue-400 text-blue-500 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
  </a>
  
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-7 h-7 shrink-0"><a href="#" className="hover:text-blue-400 text-blue-500">
   
<path  strokeLinecap="round" strokeLinejoin="round" d="M 5.015625 0.140625 C 4.617188 0.324219 4.609375 0.375 4.609375 2.90625 L 4.609375 5.21875 L 4.816406 5.609375 C 5.414062 6.734375 6.753906 6.742188 7.328125 5.628906 C 7.5625 5.171875 7.546875 5.171875 7.761719 5.613281 C 8.328125 6.769531 9.824219 6.707031 10.359375 5.507812 C 10.535156 5.113281 10.535156 5.113281 10.648438 5.421875 C 11.140625 6.742188 12.871094 6.769531 13.335938 5.464844 C 13.460938 5.117188 13.476562 5.113281 13.589844 5.410156 C 14.066406 6.6875 15.613281 6.8125 16.222656 5.628906 C 16.457031 5.171875 16.4375 5.171875 16.671875 5.628906 C 17.234375 6.71875 18.570312 6.730469 19.167969 5.648438 L 19.359375 5.296875 L 19.378906 2.941406 L 19.398438 0.582031 L 19.207031 0.347656 L 19.019531 0.109375 L 12.085938 0.09375 C 8.273438 0.0859375 5.089844 0.109375 5.015625 0.140625 M 7.332031 6.324219 C 7.066406 6.636719 6.566406 6.851562 6.097656 6.859375 L 5.695312 6.867188 L 5.695312 14.453125 L 7.039062 14.453125 L 7.039062 8.484375 L 9.921875 8.484375 L 9.921875 14.453125 L 18.304688 14.453125 L 18.304688 6.867188 L 17.902344 6.863281 C 17.433594 6.855469 16.96875 6.648438 16.65625 6.308594 L 16.449219 6.085938 L 16.238281 6.308594 C 15.589844 7.015625 14.390625 7.042969 13.730469 6.363281 L 13.488281 6.113281 L 13.230469 6.363281 C 12.539062 7.027344 11.300781 7.007812 10.71875 6.324219 L 10.539062 6.117188 L 10.316406 6.335938 C 9.605469 7.039062 8.375 7.03125 7.773438 6.324219 C 7.671875 6.207031 7.574219 6.113281 7.550781 6.113281 C 7.53125 6.113281 7.429688 6.207031 7.332031 6.324219 M 0.109375 6.746094 C 0.0507812 6.828125 0.03125 8.394531 0.03125 13.835938 L 0.03125 20.816406 L 23.9375 20.855469 L 23.9375 13.816406 C 23.9375 7.746094 23.921875 6.765625 23.84375 6.691406 C 23.710938 6.566406 19.226562 6.613281 19.027344 6.742188 C 18.929688 6.804688 18.890625 6.898438 18.894531 7.046875 L 18.898438 7.261719 L 20.859375 7.261719 C 22.300781 7.261719 22.84375 7.285156 22.898438 7.347656 C 22.957031 7.414062 22.976562 8.957031 22.976562 13.855469 L 22.976562 20.277344 L 1.023438 20.277344 L 1.023438 13.855469 C 1.023438 8.957031 1.042969 7.414062 1.101562 7.347656 C 1.15625 7.285156 1.699219 7.261719 3.148438 7.261719 L 5.121094 7.261719 L 5.121094 7.050781 C 5.121094 6.625 5.007812 6.609375 2.460938 6.625 C 0.539062 6.636719 0.179688 6.65625 0.109375 6.746094 M 4.222656 15.640625 L 4.222656 16.46875 L 19.777344 16.46875 L 19.777344 14.8125 L 4.222656 14.8125 L 4.222656 15.640625 M 0.0429688 22.050781 C -0.0195312 22.121094 -0.0078125 23.074219 0.0625 23.402344 C 0.183594 23.996094 -1.023438 23.941406 12.007812 23.945312 L 23.597656 23.945312 L 23.765625 23.769531 C 23.929688 23.597656 23.9375 23.566406 23.9375 22.800781 L 23.9375 22.003906 L 14.230469 22.003906 L 14.089844 22.21875 L 13.949219 22.4375 L 10.058594 22.4375 L 9.898438 22.21875 L 9.734375 22.003906 L 4.910156 22.003906 C 2.257812 22.003906 0.0664062 22.027344 0.0429688 22.050781 "/>
</a></svg>

  
             <UserDropdown/>
             </div></>:
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
        </nav>
   </header>
)}

export default Header;