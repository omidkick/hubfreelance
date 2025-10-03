import { Switch } from "@headlessui/react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        {/* <Switch.Label>{label}</Switch.Label> */}
        <Switch.Label className="w-[25px] text-right">
          <span className={enabled ? "block" : "hidden"}>باز</span>
          <span className={!enabled ? "block" : "hidden"}>بسته</span>
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-700" : "bg-secondary-200"
          } relative inline-flex h-5 w-10 md:h-6 md:w-11 items-center rounded-full transition-colors focus:outline-none `}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
