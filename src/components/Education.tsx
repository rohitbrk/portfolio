const education = [
  {
    course: "Bachelor of Technology",
    batch: "(2017 - 2021)",
    // grade: "7.02 CGPA",
    location: "JNTUACEP",
  },
  {
    course: "Intermediate",
    batch: "(2015 - 2017)",
    grade: "983/ 1000",
    location: "Narayana Junior College - ",
  },
  {
    course: "SSC",
    batch: "(2014 - 2015)",
    grade: "10 CGPA",
    location: "Goutham High School - ",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">Education</h1>
      {education.map((item) => (
        <div className="w-full max-w-xl m-1 px-6 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${item.course} ${item.batch}`}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.location} {item.grade}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
