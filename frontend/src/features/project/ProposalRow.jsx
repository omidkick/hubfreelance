import { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

// status ==> 0 , 1 , 2

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status, user, description, duration, price } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(description, 50)}</p>
      </td>
      <td>{duration} روز</td>
      <td>{toPersianNumbers(price)}</td>
      <td>
        {/* we use array indexing to give the specific style for a proposal according to  its status{0,1,2} */}
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت در خواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>

  );
}

export default ProposalRow;
