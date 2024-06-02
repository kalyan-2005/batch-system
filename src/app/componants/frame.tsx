import Image from "next/image";

export default function Frame() {
  return (
    <div className="relative">
      <div className="my-32">
        <Image
          src="/Frame.png"
          className="relative z-10"
          width={1000}
          height={500}
          alt="frame"
        />
      </div>
      <div className="absolute -left-16 -top-12 h-[200px] w-[250px] rounded-[40%] bg-gradient-to-t from-yellow-400 to-red-600 blur-2xl z-0"></div>
      <Image
        src="/Star.png"
        className="absolute -top-20 -right-28"
        width={52}
        height={44}
        alt="star"
      />
      <Image
        src="/Star.png"
        className="absolute top-28 -left-28 rotate-45"
        width={44}
        height={44}
        alt="star"
      />
    </div>
  );
}
