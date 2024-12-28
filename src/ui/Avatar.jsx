import Image from "next/image";

function Avatar({ src, width = 24, height = 24, alt }) {
  return (
    <div>
      <Image
        src={src || "/images/avatar.png"}
        width={width}
        height={height}
        className="rounded-full ring-1 ring-secondary-300 ml-2"
        alt={src || alt}
      />
    </div>
  );
}

export default Avatar;
