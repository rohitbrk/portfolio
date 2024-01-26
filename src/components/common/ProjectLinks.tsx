import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import LinkCard from "./LinkCard";

type ProjectLinksProps = { github: string; link: string };

const ProjectLinks = ({ github, link }: ProjectLinksProps) => {
  return (
    <div className="flex flex-row align-bottom space-x-4">
      <LinkCard href={github} size={30} Component={BsGithub} />
      <LinkCard href={link} size={30} Component={BsArrowUpRightSquare} />
    </div>
  );
};

export default ProjectLinks;
