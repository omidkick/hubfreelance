import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 p-2 md:p-0 md:text-lg mb-6 md:mb-8">
        لیست کابران
      </h1>
      <UsersTable />
    </div>
  );
}

export default Users;
