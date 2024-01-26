// @ts-nocheck
import Button from "./Button";

const WorkExpCard = ({ id, role, company, period }) => {
  return (
    <div
      key={id}
      className="m-1 w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`${role} at ${company}`}
      </h5>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {period}
      </h3>
      <Button name="projects" href="#projects" textSize="sm" />
    </div>
  );
};

export default WorkExpCard;
