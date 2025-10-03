import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-4 mb-8">
      {/* Back Button */}
      <button
        onClick={moveBack}
        className="p-2 rounded-full shadow-lg shadow-primary-300 bg-primary-900 hover:bg-primary-800 transition duration-300 w-max"
      >
        <HiArrowRight className="w-4 h-4 md:w-6 md:h-6 text-secondary-0" />
      </button>

      {/* Title */}
      <h1 className="font-extrabold text-secondary-700 text-base sm:text-xl leading-relaxed sm:leading-normal">
        <span>لیست درخواست‌های پروژه </span>
        <span className="text-primary-800 border-b-2 border-primary-300 mr-1 font-black">
          {project.title}
        </span>
      </h1>
    </div>
  );
}

export default ProjectHeader;
