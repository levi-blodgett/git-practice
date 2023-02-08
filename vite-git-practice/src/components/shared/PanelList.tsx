function PanelList() {
  return (
    <div className="panelList">
      <ol>
        <li>
          <a
            target="_blank"
            href="https://git-scm.com/downloads"
            rel="noopener"
          >
            Download Git
          </a>
        </li>
        <li>Click next through all prompts</li>
        <li>Launch Git</li>
        <li>Add your email address to Git</li>
        <ul>
          <li>
            <code>
              git config{" "}
              <code data-title="Affects all repositories on your system">
                --global
              </code>{" "}
              user.email '<em>email_address@example.com</em>'
            </code>
            <button
              type="button"
              className="clipboard"
              data-title="Copy to clipboard"
            >
              📋
            </button>
            <span className="copied-tooltip">Copied!</span>
          </li>
        </ul>
        <li>Add your user name to Git</li>
        <ul>
          <li>
            <code>
              git config{" "}
              <code data-title="Affects all repositories on your system">
                --global
              </code>{" "}
              user.name '<em>your username</em>'
            </code>
            <button
              type="button"
              className="clipboard"
              data-title="Copy to clipboard"
            >
              📋
            </button>
            <span className="copied-tooltip">Copied!</span>
          </li>
        </ul>
      </ol>
    </div>
  );
}

export default PanelList;
