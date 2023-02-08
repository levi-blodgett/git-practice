import Panel from "./shared/Panel";

const togglePanels = (accordionClick: React.MouseEvent<HTMLButtonElement>) => {
  const accordion = accordionClick.currentTarget as HTMLButtonElement;
  const panel = accordion.nextElementSibling as HTMLDivElement;
  if (panel.style.maxHeight === panel.scrollHeight + "px") {
    panel.style.maxHeight = "0";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};

const onMouseLeave = (accordionClick: React.MouseEvent<HTMLButtonElement>) => {
  const accordion = accordionClick.currentTarget as HTMLButtonElement;
  const panel = accordion.nextElementSibling as HTMLDivElement;
  const description = panel.children[0] as HTMLHeadElement;
  if (panel.style.maxHeight === description.scrollHeight + "px") {
    panel.style.maxHeight = "0";
  }
};

const onMouseEnter = (accordionClick: React.MouseEvent<HTMLButtonElement>) => {
  const accordion = accordionClick.currentTarget as HTMLButtonElement;
  const panel = accordion.nextElementSibling as HTMLDivElement;
  const description = panel.children[0] as HTMLHeadElement;
  if (panel.style.maxHeight != panel.scrollHeight + "px") {
    panel.style.maxHeight = description.scrollHeight + "px";
  }
};

function Accordion() {
  return (
    <div className="accordion">
      <button
        className="accordionButton"
        onMouseLeave={(e) => onMouseLeave(e)}
        onMouseEnter={(e) => onMouseEnter(e)}
        onClick={(e) => togglePanels(e)}
      >
        <h3 className="accordionTitle">Initializing Git</h3>
      </button>
      <Panel></Panel>
    </div>
  );
}

export default Accordion;
