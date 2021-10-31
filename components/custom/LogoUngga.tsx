import Image from "next/image";
/**
 * `Logo` you can assign dimensions to it, and if it is colored or white.
 * @param {color} color background or image default white, or purple if is color id true.
 * @param {size} size sizes on percent.
 * @returns {JSX.IntrinsicElements['img']} Image of Logo.
 */

type LogoProps = {
  color?: undefined | boolean;
  size?: undefined | number;
};

const LogoUngga = ({ color, size }: LogoProps) => (
  <Image
    alt={`Logo Ungga${color && " - color"}`}
    src={`/img/Ungga${color && "_"}.svg`}
    width={size ? size : 100}
    height={size ? size : 100}
    quality={100}
  />
);

export default LogoUngga;
