function Input(props) {
  if (props.state === 0) {
    return (
      <div className="input-container">
        <label htmlFor={props.inputName}>{props.label}: </label>
        <input
          type={props.type}
          name={props.inputName}
          id={props.inputName}
          placeholder={props.placeHolder}
          value={props.generalInformation[props.label]}
          onChange={(e) =>
            props.setGeneralInformation({
              ...props.generalInformation,
              [props.label]: e.currentTarget.value,
            })
          }
        ></input>
      </div>
    );
  } else {
    return (
      <div className="input-container">
        <div htmlFor={props.inputName}>{props.label}: </div>
        <div id={props.inputName}>{props.generalInformation[props.label]}</div>
      </div>
    );
  }
}

export default Input;
