import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="relative w-1/2 py-12">
        <div className="relative z-10">
          <h1 className="font-extrabold text-5xl">
            Make The Best Financial Decisions
          </h1>
        </div>
        <div className="absolute top-2 right-24 h-[150px] w-[200px] rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-xl z-0"></div>
        <p className="relative z-10 py-6 text-gray-500">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="relative z-10 flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2 text-white bg-black rounded group">
            <div>Get Started</div>
            <Image src="/arrow.png" className="group-hover:translate-x-3 duration-500" width={20} height={10} alt="arrow" />
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded group">
            <Image src="/play.png" className="group-hover:-rotate-180 duration-500" width={20} height={20} alt="arrow" />
            <div>Watch Video</div>
          </button>
        </div>
        <div className="relative">
          <Image
            src="/home-left.png"
            className="pt-4"
            width={600}
            height={500}
            alt="ribbon"
          />
          <Image
            src="/Star.png"
            className="absolute top-16 left-32 rotate-45"
            width={30}
            height={10}
            alt="star"
          />
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute left-52 bottom-32 h-[150px] w-[200px] rounded-[40%] bg-gradient-to-l from-yellow-400 to-red-600 blur-xl z-0"></div>
        <Image
          src="/rings.png"
          className="absolute -top-8 left-28"
          width={800}
          height={900}
          alt="rings"
        />
        <Image
          src="/iphone-3.png"
          className="absolute top-20 -right-52"
          width={600}
          height={760}
          alt="iphone-3"
        />
        <Image
          src="/iphone-2.png"
          className="absolute top-7 -right-28"
          width={600}
          height={760}
          alt="iphone-2"
        />
        <Image
          src="/iphone-3.png"
          className="absolute -top-10 -right-4"
          width={600}
          height={760}
          alt="iphone-1"
        />
        <Image
          src="/Star.png"
          className="absolute bottom-44 left-40 rotate-6"
          width={30}
          height={30}
          alt="star"
        />
      </div>
      <Image
        src="/Star.png"
        className="absolute top-24 left-36 rotate-45"
        width={30}
        height={30}
        alt="star"
      />
      <Image
        src="/Star.png"
        className="absolute top-12 right-36"
        width={44}
        height={44}
        alt="star"
      />
    </div>
  );
}
