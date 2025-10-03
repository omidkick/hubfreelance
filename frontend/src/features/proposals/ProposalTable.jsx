import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import MobileProposalCard from "./MobileProposalCard";
import useProposals from "./useProposals";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty resourceName="پروپوزال" />;

  // console.log(proposals);
  //createdAt , user, _id ==> projects.filter(p=>p._id === _id) ==> .title

  return (
    <div className="p-2">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <Table.Header>
            <th>#</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </Table.Header>
          <Table.Body>
            {proposals.map((proposal, index) => (
              <ProposalRow
                key={proposal._id}
                proposal={proposal}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Mobile Card Layout */}
      <div className="space-y-8 md:hidden">
        {proposals.map((proposal, index) => (
          <MobileProposalCard
            key={proposal._id}
            proposal={proposal}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ProposalTable;
