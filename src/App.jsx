/* eslint-disable no-unused-vars */
import "./App.css";
import Carts from "./components/Carts";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState } from "react";
import ShowMaxEm from "./components/ShowMaxEm";

function App() {
  const [emojiCounts, setEmojiCounts] = useState({
    "😉": 0,
    "😎": 0,
    "😇": 0,
    "🤪": 0,
  });
  const choiseVoteClick = (emoji) => {
    setEmojiCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };
  const showMaxEmCount = () => {
    let maxEmoji = 0;
    let maxCount = -1;
    for (const emoji in emojiCounts) {
      if (emojiCounts[emoji] > maxCount) {
        maxCount = emojiCounts[emoji];
        maxEmoji = emoji;
      }
    }
    return maxEmoji;
  };

  const [winner, setWinner] = useState("");

  const handleBtnClick = () => {
    setWinner(showMaxEmCount());
  };

  return (
    <>
      <Header />
      {Object.keys(emojiCounts).map((emoji) => (
        <Carts
          key={emoji}
          emoji={emoji}
          count={emojiCounts[emoji]}
          choiseVoteClick={choiseVoteClick}
        />
      ))}
      <Button handleClick={handleBtnClick} />
      {winner && <ShowMaxEm emoji={winner} />}
    </>
  );
}

export default App;
