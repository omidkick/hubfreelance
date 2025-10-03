import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

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
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>
        {user.role === "ADMIN"
          ? "ادمین"
          : user.role === "OWNER"
          ? "کارفرما"
          : "فریلنسر"}
      </td>
      <td>
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
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
