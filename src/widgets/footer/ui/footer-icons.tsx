import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import type { FooterIcon } from "../model/constants";

const iconMap = {
  phone: BsFillTelephoneFill,
  location: IoLocationSharp,
  telegram: FaTelegramPlane,
  instagram: FaInstagram,
};

export function FooterIconView({ name }: { name: FooterIcon }) {
  const Icon = iconMap[name];
  return <Icon />;
}
