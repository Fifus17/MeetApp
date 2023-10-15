import { JSX, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";

const EditCalendarButton = (): JSX.Element => {
  const globalVariables = useContext(GlobalVariablesContext);
  const config = useContext(ConfigContext);
  return (
    <button
      class={`rounded-lg w-20 h-10 bg-${config!.currentColor()} text-text-light`}
      onClick={() =>
        globalVariables?.setSelectMode(!globalVariables!.selectMode())
      }
    >
      {globalVariables!.selectMode() ? "Save" : "Select"}
    </button>
  );
};

export default EditCalendarButton;