import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
  rose: "bg-rose-100 text-rose-700",
  red: "bg-red-100 text-red-700",
  indigo: "bg-indigo-100 text-indigo-700",
  teal: "bg-teal-100 text-teal-700",
  orange: "bg-orange-100 text-orange-700",
  pink: "bg-pink-100 text-pink-700",
  cyan: "bg-cyan-100 text-cyan-700",
  lime: "bg-lime-100 text-lime-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-100 text-emerald-700",
  sky: "bg-sky-100 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  fuchsia: "bg-fuchsia-100 text-fuchsia-700",
};

function SingleStat({ icon, value, title, color }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[6.4rem_1fr] grid-rows-2 bg-secondary-0 p-4 rounded-xl gap-x-4 shadow-sm">
      <div
        className={`row-span-2 flex items-center justify-center aspect-square rounded-full ${
          colors[color] || colors.primary
        }`}
      >
        {icon}
      </div>
      <h5 className="text-sm md:text-lg font-medium text-secondary-500 self-center">
        {title}
      </h5>
      <p className="text-2xl md:text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}

export default SingleStat;
