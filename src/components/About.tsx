import WorkExperience from "./WorkExperience";
import Education from "./Education";
import MySkills from "./MySkills";
import GetToKnowMe from "./GetToKnowMe";

const About = () => {
  return (
    <section id="about">
      <div className="my-6 pb-6 md:pt-8">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="items-stretch justify-center align-top md:p-24 md:text-center">
          <MySkills />
          <WorkExperience />
          <Education />
          <GetToKnowMe />
        </div>
      </div>
    </section>
  );
};

export default About;
