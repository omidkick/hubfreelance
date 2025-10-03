import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 p-2 md:p-0 md:text-lg mb-6 md:mb-8">
         لیست درخواست ها
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
