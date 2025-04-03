import CVForm from "./components/form";
import { useState } from "react";
import section_data from "./data/section_data";
import DisplayCV from "./components/diplay_cv";

function App() {
  const neutralInformation = section_data.reduce((accumulator, section) => {
    const inputsName = section.data.map((dataField) => dataField.inputName);
    inputsName.forEach((inputName) => (accumulator[inputName] = ""));
    return accumulator;
  }, {});

  const [generalInformation, setGeneralInformation] =
    useState(neutralInformation);

  return (
    <>
      <CVForm
        generalInformation={generalInformation}
        setGeneralInformation={setGeneralInformation}
      />
      <DisplayCV {...generalInformation} />
    </>
  );
}

export default App;
