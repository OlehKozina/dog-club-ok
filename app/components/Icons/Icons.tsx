import Image from "next/image";

const iconPaths = {
  breadCut: "/icons/bread1.svg",
  bread2: "/icons/bread2.svg",
  basket: "/icons/breadBasket.svg",
  loaf: "/icons/breadLoaf.svg",
  baguette: "/icons/baguette.svg",
  donut: "/icons/donut.svg",
  muffin: "/icons/muffin.svg",
};

type IconPosition =
  | "top-left"
  | "top-right"
  | "center"
  | "bottom-left"
  | "bottom-right";

interface IconsProps {
  icons?: { name: keyof typeof iconPaths; position: IconPosition }[];
}

export default function Icons({
  icons = [
    { name: "breadCut", position: "top-left" },
    { name: "donut", position: "top-right" },
    { name: "muffin", position: "bottom-left" },
    { name: "loaf", position: "bottom-right" },
  ],
}: IconsProps) {
  const positionClasses: Record<IconPosition, string> = {
    "top-left": "top-0 sm:top-1/2 left-0 sm:left-1/3",
    "top-right": "top-10 right-0 sm:right-1/3",
    center: "top-1/2 left-1/3",
    "bottom-left": "bottom-10 left-0 sm:left-10",
    "bottom-right": "bottom-10 right-0 sm:right-[15rem]",
  };

  return (
    <div className="absolute z-under inset-0 overflow-hidden pointer-events-none invert">
      {icons.map(({ name, position }, i) => (
        <Image
          key={i}
          src={iconPaths[name]}
          alt={name}
          width={80}
          height={80}
          className={`absolute opacity-20 w-24 ${positionClasses[position]}`}
        />
      ))}
    </div>
  );
}
