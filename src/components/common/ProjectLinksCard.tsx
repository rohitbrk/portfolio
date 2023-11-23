import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

type ProjectLinksCardProps = { github: string; link: string };

const ProjectLinksCard = ({ github, link }: ProjectLinksCardProps) => {
  return (
    <div className="flex flex-row align-bottom space-x-4">
      <Link href={github} target="_blank">
        <BsGithub
          size={30}
          className="hover:-translate-y-1 transition-transform cursor-pointer"
        />
      </Link>
      <Link href={link} target="_blank">
        <BsArrowUpRightSquare
          size={30}
          className="hover:-translate-y-1 transition-transform cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default ProjectLinksCard;
