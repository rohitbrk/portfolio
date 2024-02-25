import WorkExpCard from "./common/WorkExpCard";

const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "OpenText",
    period: "Oct 2022 - Present",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "1Pharmacy Network",
    period: "Dec 2021 - Sep 2022",
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
      {workExperience.map((item) => (
        <WorkExpCard
          id={item.id}
          role={item.role}
          company={item.company}
          period={item.period}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
