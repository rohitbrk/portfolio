import TechCard from "./common/TechCard";

const skills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "C",
  "Java",
  "Python",
  "NodeJs",
  "DSA",
  "MongoDB",
  "SQL",
  "Docker",
];
const MySkills = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">My Skills</h1>
      <div className="flex flex-wrap flex-row justify-center md:px-24 md:justify-center">
        {skills.map((item) => (
          <TechCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
