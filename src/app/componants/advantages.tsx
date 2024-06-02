import Image from "next/image";

export default function Advantages() {
  return (
    <div className="relative my-24">
      <Image
        src="/Star.png"
        className="absolute top-0 -right-28"
        width={52}
        height={44}
        alt="star"
      />
      <div className="flex">
        <div className="w-1/2 py-32 pe-8">
          <h1 className="text-orange-600 tracking-widest font-bold">
            ADVANTAGES
          </h1>
          <h1 className="font-extrabold text-5xl mb-4">Why Choose Uifry?</h1>
          <div className="flex gap-2 items-center py-4">
            <Image src="/bell.png" width={30} height={30} alt="bell" />
            <h1 className="font-bold text-2xl">Clever Notifications</h1>
          </div>
          <p className="text-gray-500 py-2">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute bottom-28 left-28 h-[150px] w-[200px] rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-2xl z-0"></div>
          <Image
            src="/rings.png"
            className="relative"
            width={900}
            height={900}
            alt="rings"
          />
          <Image
            src="/advantage-1.png"
            className="absolute top-10 left-36"
            width={350}
            height={550}
            alt="iphone"
          />
        </div>
      </div>
      <div className="flex my-8 relative">
        <Image
          src="/Star.png"
          className="absolute -top-4 right-1/2 rotate-45"
          width={44}
          height={44}
          alt="star"
        />
        <div className="w-1/2 relative">
          <div className="absolute bottom-44 left-28 h-[150px] w-[300px] rotate-45 rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-2xl z-0"></div>
          <Image
            src="/rings.png"
            className="relative ms-0"
            width={900}
            height={900}
            alt="rings"
          />
          <Image
            src="/advantage-2.png"
            className="absolute top-8 left-36 "
            width={350}
            height={550}
            alt="iphone"
          />
        </div>
        <div className="w-1/2 py-32 ps-8 px-4">
          <div className="flex gap-2 items-center py-4">
            <Image src="/custom.png" width={30} height={30} alt="icon" />
            <h1 className="font-bold text-2xl">Fully Customizable</h1>
          </div>
          <p className="text-gray-500 py-2">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
}
