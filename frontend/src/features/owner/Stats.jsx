import {
  HiClipboardCheck,
  HiCollection,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import SingleStat from "../../ui/SingleStat";

function Stats({ projects, proposals = [] }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = proposals.filter((p) => p.status === 2).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <SingleStat
        color="primary"
        icon={<HiOutlineViewGrid className="w-10 h-10 md:w-16 md:h-16" />}
        title="پروژه‌ها"
        value={numOfProjects}
      />
      <SingleStat
        color="green"
        icon={<HiClipboardCheck className="w-10 h-10 md:w-16 md:h-16" />}
        title="پروژه‌های واگذار شده"
        value={numOfAcceptedProjects}
      />
      <SingleStat
        color="purple"
        icon={<HiCollection className="w-10 h-10 md:w-16 md:h-16" />}
        title="درخواست‌ها"
        value={toPersianNumbers(numOfProposals)}
      />
    </div>
  );
}

export default Stats;
