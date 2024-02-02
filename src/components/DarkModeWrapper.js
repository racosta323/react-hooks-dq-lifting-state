import React from "react";

function DarkModeWrapper(darkMode) {
  
  return (
    <div id="wrapper" className={darkMode.darkMode ? "dark-mode" : ""}>
      {darkMode.children}
    </div>
  );
}

export default DarkModeWrapper;
