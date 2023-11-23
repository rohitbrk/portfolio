import TechCard from "./common/TechCard";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C",
  "Java",
  "Python",
  "ReactJs",
  "NextJs",
  "Tailwind CSS",
  "NodeJs",
  "DSA",
  "Docker",
  "MongoDB",
  "SQL",
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
