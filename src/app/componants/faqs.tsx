import Image from "next/image";

export default function Faqs() {
  return (
    <div className="relative">
      <h1 className="text-orange-600 tracking-widest font-bold">FAQ</h1>
      <h1 className="max-w-80 font-bold text-4xl mb-6">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-wrap max-sm:gap-2">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={` ${
                index === 0 || index === 3 || index === 4
                  ? "bg-red-500/90 text-white"
                  : "text-black"
              } rounded-xl w-1/2 p-8 min-w-[244px] max-sm:m-auto`}
            >
              <h1 className="text-3xl font-extrabold mb-2">
                The Best Financial Accounting App Ever!
              </h1>
              <p
                className={`${
                  !(index === 0 || index === 3 || index === 4) &&
                  "text-gray-500"
                }`}
              >
                "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris."
              </p>
            </div>
          ))}
      </div>
      <Image
        src="/Star.png"
        className="absolute top-8 right-96"
        width={56}
        height={56}
        alt="star"
      />
    </div>
  );
}
