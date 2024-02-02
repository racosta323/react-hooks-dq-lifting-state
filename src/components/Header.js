import Menu from "./Menu";

function Header({ darkMode, onChangeTheme }) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu onChangeTheme={onChangeTheme}/>
      </div>
    </div>
  );
}

export default Header;
