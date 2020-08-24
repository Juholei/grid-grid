import React, { useState } from "react";
import Stream from "components/Stream";
import GridContainer from "components/GridContainer";

const euChannels = [
  "bilborl",
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
  "lawler"
];

const naChannels = [
  "alpine_esports",
  "karmaah",
  "eunited",
  "athena",
  "pioneersgg",
  "nrggg",
  "spoodah",
  "knights",
  "sad_junior",
  "roguegg",
  "johnnyboi_i",
  "soniqsevents",
  "teamenvy",
  "reddshope",
  "version1gg",
  "xsetgaming"
];


function App() {

  const  [ channels, setChannels ]  = useState(euChannels);
  return (
    <div className="App">
      <header>
        <h1>Grid Grid</h1>
        <button onClick={() => setChannels(euChannels)}>EU</button>
        <button onClick={() => setChannels(naChannels)}>NA</button>
      </header>
      <main>
        <GridContainer>
        {channels.map((channel) => (
          <Stream key={channel} channel={channel} parent="localhost" />
        ))}
        </GridContainer>
      </main>
    </div>
  );
}

export default App;
