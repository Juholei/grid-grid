import React from "react";

import styles from "./Stream.module.css";

interface StreamProps {
  channel: string;
  parent: string;
}
const Stream: React.FC<StreamProps> = ({ channel, parent }) => {
  return (
    <div className={styles.stream}>
      <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        scrolling="no"
        title={channel}
      />
    </div>
  );
};

export default Stream;
