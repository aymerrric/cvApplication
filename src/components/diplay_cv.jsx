export default function (props) {
  return (
    <div className="cv-display">
      <div className="general-information-display">
        <div className="name-display display-field">Name: {props.name}</div>
        <div className="phone-display display-field">Phone: {props.phone}</div>
        <div className="name-display display-field">Email: {props.email}</div>
      </div>
    </div>
  );
}
