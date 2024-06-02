import Image from "next/image";

export default function Features() {
  return (
    <div className="flex relative capitalize">
      <div className="w-1/2 relative">
        <div className="absolute top-16 left-4 h-[150px] w-[200px] rounded-[40%] bg-gradient-to-t from-red-400 to-yellow-600 blur-xl z-0"></div>
        <Image
          src="/rings.png"
          className="absolute -top-6 -left-20"
          width={800}
          height={900}
          alt="rings"
        />
        <Image
          src="/front-1.png"
          className="absolute top-4 left-12"
          width={350}
          height={550}
          alt="iphone"
        />

        <Image
          src="/Star.png"
          className="absolute top-20 -left-20 rotate-45"
          width={44}
          height={44}
          alt="star"
        />
      </div>
      <div className="w-1/2 pt-16">
        <h5 className="text-orange-600 mb-2 tracking-widest font-bold">FEATURES</h5>
        <h1 className="font-extrabold text-4xl">Uifry Premium</h1>
        <div className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/feature-icon-1.png"
              width={20}
              height={20}
              alt="icon-1"
            />
            <h5 className="font-bold">Budgeting Intervals</h5>
          </div>
          <p className="text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="pb-8">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/feature-icon-2.png"
              width={20}
              height={20}
              alt="icon-1"
            />
            <h5 className="font-bold">Budgeting Intervals</h5>
          </div>
          <p className="text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/feature-icon-3.png"
              width={20}
              height={20}
              alt="icon-1"
            />
            <h5 className="font-bold">Budgeting Intervals</h5>
          </div>
          <p className="text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="absolute top-44 -right-44 h-[150px] w-[200px] rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-2xl z-0"></div>
      </div>
    </div>
  );
}
