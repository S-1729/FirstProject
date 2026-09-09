import React, { useEffect, useState } from "react";

const ContextMenu = () => {
  const [content, setContent] = useState("");

  function handleContextMenu() {
    document.oncontextmenu = function () {
      alert("Right click is not allowed");
      return false;
    };
  }

  useEffect(() => {
    handleContextMenu();
  }, []);

  function handlePaste(e) {
    e.preventDefault();
    alert("Paste is not allowed");
  }

  function handleCopy(e) {
    e.preventDefault();
    alert("Copy is not allowed");
  }

  function handleUppercase() {
    setContent(content.toUpperCase());
  }

  return (
    <div
      className="container-fluid p-3"
      onContextMenu={handleContextMenu}
      onPaste={handlePaste}
      onCopy={handleCopy}
    >
      <dl>
        <dt>Username</dt>
        <dd>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleUppercase}
          />
        </dd>
      </dl>
    </div>
  );
};

export default ContextMenu;
