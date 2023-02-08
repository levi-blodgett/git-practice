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
        <button
          type="button"
          className="clipboard"
          data-title="Copy to clipboard"
        >
          📋
        </button>
        <span className="copied-tooltip">Copied!</span>
      </p>
    </div>
  );
}

export default SubHeader;
