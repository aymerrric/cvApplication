import sectionData from "../data/section_data";

function SectionSelector(props) {
  return (
    <aside>
      {sectionData.map((section, index) => {
        if (index !== sectionData.length - 1) {
          return (
            <div key={section.id}>
              <button
                onClick={() => props.setCurrentSectionId(section.id)}
                className="button-section-selector"
              >
                <h2 className="section-selector">{section.title}</h2>
              </button>
              <hr />
            </div>
          );
        } else {
          return (
            <div key={section.id}>
              <button
                onClick={() => props.setCurrentSectionId(section.id)}
                className="button-section-selector"
              >
                <h2 className="section-selector">{section.title}</h2>
              </button>
            </div>
          );
        }
      })}
    </aside>
  );
}

export default SectionSelector;
