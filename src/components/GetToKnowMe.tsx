import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const GetToKnowMe = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-center text-2xl font-bold mb-2">Get to know me!</h1>
      <div className="flex flex-row justify-center">
        <h2 className="text-l font-bold mb-2 flex flex-row">Interests</h2>
        &nbsp;-&nbsp;
        <p>Yoga, Trecking </p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 mb-1">
        <a href="https://github.com/rohitbrk" rel="noreferrer" target="_blank">
          <AiOutlineGithub
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="https://twitter.com/rohitbrk_"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/rohitbrk/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineLinkedin
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="mailto:rohithkumarbathula99@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <MdEmail
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
      </div>
    </div>
  );
};

export default GetToKnowMe;
