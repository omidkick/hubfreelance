import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalCardMobile from "../projects/components/ProposalCardMobile";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div className="p-2 space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Table>
          <Table.Header>
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه پیشنهادی</th>
            <th>وضعیت درخواست</th>
            <th>عملیات</th>
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

      {/* Mobile Card View */}
      <div className="grid gap-4 md:hidden">
        {proposals.map((proposal, index) => (
          <ProposalCardMobile
            key={proposal._id}
            proposal={proposal}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ProposalsTable;
