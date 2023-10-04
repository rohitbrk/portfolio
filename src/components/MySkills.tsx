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
    <div className="text-center mb-4">
      <h1 className="text-2xl font-bold mb-2">My Skills</h1>
      <div className="flex flex-wrap flex-row justify-center md:px-24 md:justify-center">
        {skills.map((item) => {
          return (
            <p
              key={item}
              className="px-4 py-2 mr-2 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
