import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={`${isToggled ? "bg-[#121721]" : "bg-[#F4F6F8]"} h-full`}>
      <Header isToggled={isToggled} setIsToggled={setIsToggled} />
    </div>
  );
}

export default App;
