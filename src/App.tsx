import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [locationSearchValue, setLocationSearchValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`h-full ${isToggled ? "bg-[#121721]" : "bg-[#F4F6F8]"}`}>
      <Header
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        searchValue={searchValue}
        onSearch={setSearchValue}
        locationSearchValue={locationSearchValue}
        onLocationSearch={setLocationSearchValue}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </div>
  );
}

export default App;
