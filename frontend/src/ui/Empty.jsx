import { HiOutlineInbox } from "react-icons/hi";

function Empty({ resourceName = "موردی" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl text-center">
      <HiOutlineInbox className="w-12 h-12 text-secondary-400" />
      <p className="text-secondary-600 font-medium text-lg">
        هیچ{" "}
        <span className="text-primary-600 font-bold underline underline-offset-8">
          {resourceName}
        </span>{" "}
        یافت نشد.
      </p>
      <p className="text-secondary-500 text-sm">
        لطفاً مورد جدیدی اضافه کنید یا فیلترها را تغییر دهید.
      </p>
    </div>
  );
}

export default Empty;
