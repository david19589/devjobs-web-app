import Logo from "/src/assets/desktop/logo.svg";
import HeaderBackground from "/src/assets/mobile/bg-pattern-header.svg";
import SunSvg from "/src/assets/desktop/icon-sun.svg";
import MoonSvg from "/src/assets/desktop/icon-moon.svg";
import Toggle from "../Toggle";

function Header(props: {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div
        className="flex justify-between items-center pt-[32px] pb-[72px] px-[24px] bg-cover"
        style={{ backgroundImage: `url(${HeaderBackground})` }}
      >
        <img src={Logo} alt="Logo" />
        <div className="flex items-center">
          <img src={SunSvg} alt="SunSvg" />
          <Toggle
            isToggled={props.isToggled}
            setIsToggled={props.setIsToggled}
          />
          <img src={MoonSvg} alt="MoonSvg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
