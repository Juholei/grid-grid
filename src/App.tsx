import React from "react";
import Stream from "components/Stream";

const channels = [
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

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        {channels.map((channel) => (
          <Stream key={channel} channel={channel} parent="localhost" />
        ))}
      </main>
    </div>
  );
}

export default App;
