import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex gap-14 items-start mb-20">
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-center">
            <div>
              <Image src="/logo.png" width={25} height={30} alt="logo" />
            </div>
            <div className="font-extrabold text-3xl">
              uifry<span className="text-[5px] align-super">TM</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/message.png" width={20} height={10} alt="icon" />
            <h1 className="font-bold">Help@Frybix.com</h1>
          </div>
          <div className="flex gap-2 items-center font-bold">
            <Image src="/call.png" width={20} height={10} alt="icon" />
            <h1>+1234 456 678 89</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 font-bold">
          <h1 className="text-3xl font-bold">Links</h1>
          <h1>Home</h1>
          <h1>About Us</h1>
          <h1>Bookings</h1>
          <h1>Blog</h1>
        </div>
        <div className="flex flex-col gap-4 font-bold">
          <h1 className="text-3xl font-bold">Legal</h1>
          <h1>Terms Of Use</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookie Policy</h1>
        </div>
        <div className="flex flex-col gap-4 font-bold">
          <h1 className="text-3xl font-bold">Products</h1>
          <h1>Take A Tour</h1>
          <h1>Live Chat</h1>
          <h1>Reviews</h1>
        </div>
        <div className="flex flex-col gap-4 font-bold">
          <h1 className="text-3xl font-bold">Newsletter</h1>
          <h1>Stay Up To Date</h1>
          <div className="flex gap-6 my-4">
            <input
              type="email"
              className="w-28 outline-none p-2 text-center"
              placeholder="Your email"
            />
            <button className="text-center bg-black text-white p-4 rounded px-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <h1 className="text-center py-8 pb-16 font-bold">
          Copyright 2022 Uifry.Com All Rights Reserved
        </h1>
      </div>
    </>
  );
}
