import ClipBoard from "./shared/ClipBoard";

function SubHeader() {
  return (
    <div className="subHeader">
      <p className="key" id="key1">
        <em>Light green text means replace with your own information.</em>
      </p>
      <p className="key" id="key2">
        <code>
          Hover over <code data-title="Like so">me</code> for more information,
          click the button to copy this to clipboard!
        </code>
        <ClipBoard></ClipBoard>
      </p>
    </div>
  );
}

export default SubHeader;
