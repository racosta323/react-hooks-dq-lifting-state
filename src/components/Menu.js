import React from "react";
import { useState } from "react"

function Menu({ onChangeTheme }) {

const [checked, setChecked] = useState(true)

function handleChange(){
  setChecked(!checked)
  onChangeTheme()
}

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={checked}
          onChange={handleChange}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
