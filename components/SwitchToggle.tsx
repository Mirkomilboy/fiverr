import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchToggle = ({}) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center gap-2.5">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group h-5 w-9 inline-flex items-center rounded-full bg-gray-200 transition data-[checked]:bg-green-600 px-1">
        <span className="size-3.5 rounded-full bg-white transition group-data-[checked]:translate-x-full" />
      </Switch>
      <p className="text-brand-black-300 font-medium">Pro services</p>
    </div>
  );
};

export default SwitchToggle;
