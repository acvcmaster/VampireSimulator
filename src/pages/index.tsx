import TitleScreen from "@/pages/title_screen";
import { useState } from "react";
import InitialScreen from "@/pages/initial_screen";
import DialogueScreen from "@/pages/dialogue_screen";

type Screen = "INITIAL" | "TITLE" | "DIALOGUE";

type State = {
  screen: Screen;
  dialogue?: string;
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
      {state.screen === "TITLE" && (
        <TitleScreen
          onPlay={() =>
            setState({
              ...state,
              screen: "DIALOGUE",
              dialogue: "first-encounter-1",
            })
          }
        />
      )}
      {state.screen === "DIALOGUE" && !!state.dialogue && (
        <DialogueScreen
          dialogue={state.dialogue}
          onChange={(dialogue) => setState({ ...state, dialogue })}
        />
      )}
    </div>
  );
}
