import { useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import JobRoutes from "./Components/JobRoutes";
function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [locationSearchValue, setLocationSearchValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={` min-h-[100vh] min-w-fit tablet:w-full ${
          isToggled ? "bg-[#121721]" : "bg-[#F4F6F8]"
        }`}
      >
        <Header
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
        <JobRoutes
          isToggled={isToggled}
          searchValue={searchValue}
          locationSearchValue={locationSearchValue}
          isChecked={isChecked}
          onSearch={setSearchValue}
          onLocationSearch={setLocationSearchValue}
          setIsChecked={setIsChecked}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
