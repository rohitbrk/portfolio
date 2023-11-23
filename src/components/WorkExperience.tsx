import Button from "./common/Button";

const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "OpenText",
    period: "Oct 2022 - Present",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "1Pharmacy Network",
    period: "Dec 2021 - Jul 2022",
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
      {workExperience.map((item) => (
        <div
          key={item.id}
          className="m-1 w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${item.role} at ${item.company}`}
          </h5>
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.period}
          </h3>
          <Button name="projects" href="#projects" textSize="sm" />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
