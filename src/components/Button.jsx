import "./Button.css";

// eslint-disable-next-line react/prop-types
function Button({handleClick}) {

  return (
    <>
      <div className="component-btn">
        <button onClick={handleClick} className="btn-show"><b>Show Results</b></button>
      </div>
      
    </>
  );
}

export default Button;
