import { HiBadgeCheck, HiCreditCard, HiDocumentText } from "react-icons/hi";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import SingleStat from "../../ui/SingleStat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <SingleStat
        color="primary"
        icon={<HiDocumentText className="w-10 h-10 md:w-16 md:h-16" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      <SingleStat
        color="green"
        icon={<HiBadgeCheck className="w-10 h-10 md:w-16 md:h-16" />}
        title="درخواستهای قبول شده"
        value={acceptedProposals.length}
      />
      <SingleStat
        color="rose"
        icon={<HiCreditCard className="w-10 h-10 md:w-16 md:h-16" />}
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
