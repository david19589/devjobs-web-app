import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={`${isToggled ? "bg-[#121721]" : "bg-[#FFF]"} h-full`}>
      <Header isToggled={isToggled} setIsToggled={setIsToggled} />
    </div>
  );
}

export default App;
