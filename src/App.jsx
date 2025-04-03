import CVForm from "./components/form";
import { useState } from "react";
import section_data from "./data/section_data";

function App() {
  const neutralInformation = section_data.reduce((accumulator, section) => {
    const inputsName = section.data.map((dataField) => dataField.inputName);
    inputsName.forEach((inputName) => (accumulator[inputName] = ""));
    return accumulator;
  }, {});
  const [generalInformation, setGeneralInformation] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <CVForm
        generalInformation={generalInformation}
        setGeneralInformation={setGeneralInformation}
      />
    </>
  );
}

export default App;
