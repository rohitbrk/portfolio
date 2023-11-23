import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const SocialLinks = ({ size }: { size: number }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 mb-1">
      <a href="https://github.com/rohitbrk" rel="noreferrer" target="_blank">
        <AiOutlineGithub
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={size}
        />
      </a>
      <a href="https://twitter.com/rohitbrk_" rel="noreferrer" target="_blank">
        <AiOutlineTwitter
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={size}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/rohitbrk/"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineLinkedin
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={size}
        />
      </a>
      <a
        href="mailto:rohithkumarbathula99@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <MdEmail
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={size}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
