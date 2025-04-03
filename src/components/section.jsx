import Button from "./button";
function SectionCV(props) {
  return (
    <div className={"section"}>
      <h1>{props.title}</h1>
      <div className="inputs-container">{props.children}</div>
      <div className="buttons-container">
        <Button text={"Toggle"} onClick={() => props.setState(0)} />
        <Button text={"Display"} onClick={() => props.setState(1)} />
      </div>
    </div>
  );
}

export default SectionCV;
