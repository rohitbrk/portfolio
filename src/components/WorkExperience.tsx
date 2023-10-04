const workExperience = [
  {
    role: "Software Engineer",
    company: "OpenText",
    points: ["Worked with ReactJs and Docker"],
    period: "Oct 2022 - Present",
  },
  {
    role: "Fullstack Developer",
    company: "1Pharmacy Network",
    points: [
      "Worked with ReactJs",
      "At Backend, AWS API gateway and Serverless Functions using Python",
    ],
    period: "Dec 2021 - Jun 2022",
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-4">
      <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
      {workExperience.map((item) => (
        <div className="m-1 w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${item.role} at ${item.company}`}
          </h5>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.period}
          </h3>
          <ul className="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.points.map((nestedItem) => (
              <li key={nestedItem}>{nestedItem}</li>
            ))}
          </ul>
          <a
            href="#projects"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            projects
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
