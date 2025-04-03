import SectionCV from "./section";
import Input from "./input";
import sectionData from "../data/section_data";
import { useState } from "react";
import SectionSelector from "./section_selector";

function CVForm(props) {
  // all the data will be stored in the parent, the two main components which must talk are form and cv
  const [state, setState] = useState(0);
  const [currentSectionId, setCurrentSectionId] = useState(0);

  const currentSection = sectionData.filter(
    (section) => section.id === currentSectionId
  )[0];

  return (
    <div className="form-container">
      <SectionSelector
        currentSectionId={currentSectionId}
        setCurrentSectionId={setCurrentSectionId}
      />
      <SectionCV {...props} title={currentSection.title} setState={setState}>
        {currentSection.data.map((information) => (
          <Input
            key={information.label}
            {...information}
            {...props}
            state={state}
          />
        ))}
      </SectionCV>
    </div>
  );
}

export default CVForm;
