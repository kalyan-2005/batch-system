import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <Image
        src="/Star.png"
        className="absolute -top-20 right-4"
        width={52}
        height={44}
        alt="star"
      />
      <div className="my-20">
        <h1 className="text-center font-bold tracking-widest">TESTIMONIAL</h1>
        <h1 className="text-center font-extrabold text-5xl w-2/5 max-sm:w-full m-auto">
          What Our Users Say About Us?
        </h1>
        <div className="flex flex-wrap">
          <div className="w-1/2 relative max-sm:hidden">
            <div className="absolute top-40 right-24 h-[200px] w-[250px] rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-2xl z-0"></div>
            <Image
              src="/rings.png"
              className="relative"
              width={900}
              height={900}
              alt="rings"
            />
            <Image
              src="/about-21.png"
              className="absolute top-36 left-40"
              width={300}
              height={300}
              alt="profile"
            />
            <Image
              src="/about-22.png"
              className="absolute top-12 left-8"
              width={300}
              height={300}
              alt="profile"
            />
            <Image
              src="/about-23.png"
              className="absolute -bottom-8 left-8"
              width={300}
              height={300}
              alt="profile"
            />
            <Image
              src="/about-24.png"
              className="absolute -right-24 -bottom-8"
              width={300}
              height={300}
              alt="profile"
            />
            <Image
              src="/about-25.png"
              className="absolute top-12 -right-24"
              width={300}
              height={300}
              alt="profile"
            />
          </div>
          <div className="w-1/2 min-w-[300px] px-8 relative pt-16 flex flex-col gap-6">
            <h1 className="font-bold text-3xl">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="text-gray-500/90 text-lg font-semibold capitalize">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam."
            </p>
            <div className="flex gap-2 items-center">
              <Image src="/about-1.png" width={40} height={40} alt="profile" />
              <Image
                src="/about-2.png"
                className="p-1 grayscale-[70%]"
                width={40}
                height={40}
                alt="profile"
              />
              <Image
                src="/about-3.png"
                className="p-1 grayscale-[70%]"
                width={40}
                height={40}
                alt="profile"
              />
              <Image
                src="/about-4.png"
                className="p-1 grayscale-[70%]"
                width={40}
                height={40}
                alt="profile"
              />
              <Image
                src="/about-5.png"
                className="p-1 grayscale-[70%]"
                width={40}
                height={40}
                alt="profile"
              />
            </div>
            <h1 className="font-bold">Nicks Jonas</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
