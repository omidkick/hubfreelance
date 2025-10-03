import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  const renderRole = {
    ADMIN: "ادمین",
    OWNER: "کارفرما",
    FREELANCER: "فریلنسر",
  };
  return (
    <div className="flex items-center gap-x-4 md:gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7  rounded-full object-cover object-center"
        src="/images/user.jpg"
        alt="user-account"
      />
      <div className="flex flex-col justify-center">
        <span className="text-sm md:text-base">{user?.name}</span>
        <div className="text-xs text-primary-700 mx-7 mt-1  md:hidden">
          {renderRole[user.role] || "نقش ناشناخته"}
        </div>
      </div>
    </div>
  );
}

export default UserAvatar;
