import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import LinkCard from "./LinkCard";

const links = [
  { href: "https://github.com/rohitbrk", Component: AiOutlineGithub },
  { href: "https://twitter.com/rohitbrk_", Component: AiOutlineTwitter },
  {
    href: "https://www.linkedin.com/in/rohitbrk/",
    Component: AiOutlineLinkedin,
  },
  { href: "mailto:rohithkumarbathula99@gmail.com", Component: MdEmail },
];

const SocialLinks = ({ size }: { size: number }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 mb-1">
      {links.map((item) => (
        <LinkCard href={item.href} size={size} Component={item.Component} />
      ))}
    </div>
  );
};

export default SocialLinks;
