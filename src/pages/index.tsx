import TitleScreen from "@/pages/title_screen";
import { useState } from "react";
import InitialScreen from "./initial_screen";

type Screen = "INITIAL" | "TITLE";

type State = {
  screen: Screen;
};

const INITIAL_STATE: State = {
  screen: "INITIAL",
};

export default function Index() {
  const [state, setState] = useState<State>(INITIAL_STATE);

  return (
    <div className="w-screen h-screen">
      {state.screen === "INITIAL" && (
        <InitialScreen
          onClick={() => setState({ ...state, screen: "TITLE" })}
        />
      )}
      {state.screen === "TITLE" && <TitleScreen />}
    </div>
  );
}
