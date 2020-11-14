import React, { useState } from "react";
import Stream from "components/Stream";
import GridContainer from "components/GridContainer";
import NavBar from "components/NavBar";

import logo from "./logo.jpg";
import RadioButton from "components/RadioButton";

const euChannels = [
  "yumi_cheeseman",
  "dignitas",
  "endpointtv",
  "guildesports",
  "rocketbenelux",
  "johnnyboi_i",
  "vitality",
  "solary",
  "bdsesport",
  "teamliquid",
  "teamsingularitytv",
  "rams_rl",
  "bluey",
  "giants",
  "ronaky",
  "lawler",
];

const naChannels = [
  "alpine_esports",
  "BoSF_eSports",
  "CLTPhoenixGG",
  "TeamD2E",
  "eunited",
  "Athena",
  "ghostgamingna",
  "pioneersgg_",
  "nrggg",
  "knights",
  "RogueGG",
  "johnnyboi_i",
  "soniqsevents",
  "teamenvy",
  "ReddShope",
  "version1gg",
];

function App() {
  const [channels, setChannels] = useState(euChannels);

  return (
    <div className="App">
      <header>
        <NavBar title="Grid Grid" logo={logo}>
          <fieldset>
            <RadioButton
              name="region"
              value="eu"
              label="EU"
              onClick={() => setChannels(euChannels)}
              defaultChecked
            />
            <RadioButton
              name="region"
              value="na"
              label="NA"
              onClick={() => setChannels(naChannels)}
            />
          </fieldset>
        </NavBar>
      </header>
      <main>
        <GridContainer>
          {channels.map((channel) => (
            <Stream
              key={channel}
              channel={channel}
              parent={process.env.REACT_APP_STREAM_PARENT || ""}
            />
          ))}
        </GridContainer>
      </main>
    </div>
  );
}

export default App;
