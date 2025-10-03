import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserCardMobile from "./mobile/UserCardMobile";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loader />;
  if (!users.length) return <Empty resourceName="کاربری" />;
  return (
    <div className="p-2 space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Table>
          <Table.Header>
            <th>#</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>شماره موبایل </th>
            <th>نقش </th>
            <th>وضعیت کاربر</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index} />
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid gap-4 md:hidden">
      {users.map((user, index) => (
        <UserCardMobile
          key={user._id}
          user={user}
          index={index}
        />
      ))}
    </div>
    </div>
  );
}

export default UsersTable;
