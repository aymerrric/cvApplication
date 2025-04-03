function Input(props) {
  if (props.state === 0) {
    return (
      <div className="input-container">
        <label htmlFor={props.inputName} className="input-first-part">
          {props.label}:{" "}
        </label>
        <input
          type={props.type}
          name={props.inputName}
          id={props.inputName}
          placeholder={props.placeHolder}
          value={props.generalInformation[props.inputName]}
          onChange={(e) => {
            props.setGeneralInformation({
              ...props.generalInformation,
              [props.inputName]: e.target.value,
            });
          }}
        ></input>
      </div>
    );
  } else {
    return (
      <div className="input-container">
        <div className="input-first-part" htmlFor={props.inputName}>
          {props.label}:{" "}
        </div>
        <div id={props.inputName}>
          {props.generalInformation[props.inputName]}
        </div>
      </div>
    );
  }
}

export default Input;
