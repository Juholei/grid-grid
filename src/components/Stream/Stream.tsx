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
        className={styles.iframe}
        src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true&autoplay=false`}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        title={channel}
        height="1080"
        width="1920"
      />
    </div>
  );
};

export default Stream;
