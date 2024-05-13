import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Detail from "./Detail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function JobRoutes(props: {
  isToggled: boolean;
  searchValue: string;
  locationSearchValue: string;
  isChecked: boolean;
  onSearch: (value: string) => void;
  onLocationSearch: (value: string) => void;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              isToggled={props.isToggled}
              searchValue={props.searchValue}
              locationSearchValue={props.locationSearchValue}
              isChecked={props.isChecked}
              onSearch={props.onSearch}
              onLocationSearch={props.onLocationSearch}
              setIsChecked={props.setIsChecked}
            />
          }
        />
        <Route
          path="/job/:id"
          element={<Detail isToggled={props.isToggled} />}
        ></Route>
      </Routes>
    </>
  );
}

export default JobRoutes;
