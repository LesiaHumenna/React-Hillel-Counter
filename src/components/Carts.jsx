import { useState } from "react";
import "./Carts.css";

// eslint-disable-next-line react/prop-types
function Carts({ emoji, choiseVoteClick }) {
  const [count, setCount] = useState(0);
  const [showEm, setShowEm] = useState(false);

  const increment = () => {
    setCount(count + 1);
    choiseVoteClick(emoji);
    setShowEm(!showEm);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      choiseVoteClick(emoji);
      setShowEm(!showEm);
    }
  };
  
  
  return (
    <>
      <div className="carts class-cart">
        <span className="class-emoji">{emoji}</span>
        <div className="class-count">
          <button className="btn btn-l" onClick={decrement}>
            <b>-</b>
          </button>
          <div className="count-style"> {count}</div>
          <button className="btn btn-r" onClick={increment}>
            <b>+</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carts;// eslint-disable-next-line react/prop-types


