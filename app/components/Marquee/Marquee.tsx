import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faWheatAwn,
  faCookieBite,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const bakeryIcons = [faBreadSlice, faWheatAwn, faCookieBite, faSeedling];

function MarqueeWithText({ advantages }: { advantages?: string[] }) {
  if (!advantages) return null;

  return (
    <section className="py-4 bg-brand-default">
      <Marquee
        gradient={false}
        speed={50}
        className="rounded-3xl md:rounded-none"
      >
        {!!advantages?.length &&
          advantages.map((advantage, i) => (
            <div key={i} className="flex items-center mr-8">
              <span className="text-sm md:text-lg md:font-light md:text-brand-light font-bold">
                {advantage}
              </span>
              <FontAwesomeIcon
                icon={bakeryIcons[i % bakeryIcons.length]}
                className="ml-8 text-brand-light text-lg md:text-xl"
              />
            </div>
          ))}
      </Marquee>
    </section>
  );
}

export default MarqueeWithText;
