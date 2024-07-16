import { useState } from "react"
function Header(){

    const[open, setOpen]= useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }


     



    return <div className="bg-[#0F1641]  sm:px-28 py-8">
        <div className="sm:flex justify-between bg-white rounded-2xl  sm:rounded-full items-center  ">
            <div className="flex sm:px-7 sm:py-4  ">
               <i class=" fa-solid mt-3 text-4xl fa-gear"></i>
               <div>
               <h1 className="text-2xl">Toosi</h1>
               <h1 className="text-2xl">Community</h1>
               </div>
               </div>
               <ul style={{display:open==true?"block":""}} className="hidden font-bold sm:flex ml-3  text-[#FB5A01] text-2xl gap-11">
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>Contact Us</li>
               </ul>
               <button style={{display:open==true?"block":""}} className="bg-[#FB5A01] ml-2  sm:flex hidden w-[100px] h-[50px] rounded mr-4 sm:pt-3  sm:rounded-full sm:px-4">Join Here</button>
               <i style={{display:open==true?"block":""}} onClick={handleClose} class="fa-solid  absolute right-4 top-10  text-5xl hidden fa-x"></i>
               <i style={{display:open==true?"none":""}}  onClick={handleOpen} class="fa-solid sm:hidden flex absolute right-4 top-10  text-5xl fa-bars"></i>

        </div>



    </div>
}
export default Header