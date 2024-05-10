import Logo from "/src/assets/desktop/logo.svg";
import HeaderBackground from "/src/assets/mobile/bg-pattern-header.svg";
import HeaderBackgroundTablet from "/src/assets/desktop/bg-pattern-header.svg";
import SunSvg from "/src/assets/desktop/icon-sun.svg";
import MoonSvg from "/src/assets/desktop/icon-moon.svg";
import Toggle from "../Toggle";
import Filter from "../Filter";

function Header(props: {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  onSearch: (value: string) => void;
  locationSearchValue: string;
  onLocationSearch: (value: string) => void;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div className="absolute w-full">
        <img
          className="w-full h-[136px] tablet:hidden"
          src={HeaderBackground}
          alt="HeaderBackground"
        />
        <img
          className="w-full h-[160px] hidden tablet:flex"
          src={HeaderBackgroundTablet}
          alt="HeaderBackgroundTablet"
        />
      </div>
      <div className="relative z-10 pt-[32px] pb-[72px] px-[24px]">
        <div className="flex justify-between items-center">
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
        <Filter
          isToggled={props.isToggled}
          searchValue={props.searchValue}
          onSearch={props.onSearch}
          locationSearchValue={props.locationSearchValue}
          onLocationSearch={props.onLocationSearch}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
        />
      </div>
    </div>
  );
}

export default Header;
