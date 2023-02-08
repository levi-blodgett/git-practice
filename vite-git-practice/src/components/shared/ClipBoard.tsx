const copyToClipboard = (clipboardClick: React.MouseEvent<HTMLButtonElement>) => {
  // Grab the button that was clicked
  const target = clipboardClick.currentTarget as HTMLButtonElement;

  // Grab the text element that will be copied
  const textToCopy = (target.parentElement?.previousSibling as HTMLElement).innerText;

  // Copy the text into clipboard
  navigator.clipboard.writeText(textToCopy);

  // Activate the tooltip after the clipboard button
  (target.nextElementSibling as HTMLSpanElement).style.display = "inline";
  setTimeout(() => {
    (target.nextElementSibling as HTMLSpanElement).style.display = "none";
  }, 1000);
};


function ClipBoard() {
  return (
    <div className="clipboard">
      <button
        type="button"
        className="clipboardButton"
        data-title="Copy to clipboard"
        onClick={(e) => copyToClipboard(e)}
      >
        📋
      </button>
      <span className="copied-tooltip">Copied!</span>
    </div>
  );
}

export default ClipBoard;
