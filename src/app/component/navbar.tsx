"use client";
import Image from 'next/image';



const Navbar = () => {

  return (
    <>
      <div className="grid grid-flow-col place-content-around text-white w-screen top-0 left-0 fixed bg-[#0b0d13] h-16 bg-cover">
        <div className=" absolute inset-0  z-0">
            <Image
                src="/background.png"
                alt="background image"
                fill
            />
        </div>
        <div className="grid z-50 "><p className="text-2xl font-black">Pufu</p></div>
        <button className="rounded-full bg-green-600 hover:bg-slate-200 w-40 z-50">Connect</button>
      </div>
    </>
  );
};

export default Navbar;
