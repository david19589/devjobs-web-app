import { useState } from "react";
import SearchSvg from "/src/assets/desktop/icon-search.svg";
import LocationSvg from "/src/assets/desktop/icon-location.svg";

function Filter(props: {
  isToggled: boolean;
  searchValue: string;
  onSearch: (value: string) => void;
  locationSearchValue: string;
  onLocationSearch: (value: string) => void;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [filterClicked, setFilterClicked] = useState(false);
  const [titleSearch, setTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  return (
    <>
      <div
        className={`${
          props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
        } rounded-lg my-[32px]`}
      >
        <div className="flex pl-[24px] pr-[16px] py-[16px]">
          <input
            className={`${
              props.isToggled && "text-[#FFF] bg-[#19202D]"
            } font-[400] text-[16px] leading-[19.84px] outline-none w-full mr-[12px]`}
            id="search"
            placeholder="Filter by title…"
            onChange={(e) => {
              setTitleSearch(e.target.value);
            }}
          />
          <div className="flex items-center relative right-[24px]">
            <div
              onClick={() => {
                setFilterClicked(!filterClicked);
              }}
              className="mr-[24px]"
            >
              {props.isToggled ? (
                <svg
                  className="w-[26px] cursor-pointer"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                    fill="#FFF"
                    fillRule="nonzero"
                  />
                </svg>
              ) : (
                <svg
                  className="w-[26px] cursor-pointer"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                    fill="#6E8098"
                    fillRule="nonzero"
                  />
                </svg>
              )}
            </div>
            <img
              className="bg-[#5964E0] p-[14px] rounded-md cursor-pointer"
              src={SearchSvg}
              alt="SearchSvg"
              onClick={() => {
                props.onSearch(titleSearch);
              }}
            />
          </div>
        </div>
      </div>
      {filterClicked ? (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0000007f] ">
          <div
            className={`${
              props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
            } rounded-md absolute top-[30%] left-[24px] right-[24px]`}
          >
            <div className="flex p-[24px]">
              <img className="mr-[16px]" src={LocationSvg} alt="LocationSvg" />
              <input
                className={`${
                  props.isToggled && "text-[#FFF] bg-[#19202D]"
                } font-[400] text-[16px] leading-[19.84px] outline-none w-full`}
                id="search2"
                placeholder="Filter by location…"
                onChange={(e) => {
                  setLocationSearch(e.target.value);
                }}
              />
            </div>
            <span className="flex w-full h-[1px] opacity-[20%] bg-[#6E8098]"></span>
            <div className="flex items-center p-[24px]">
              <div
                onClick={() => {
                  props.setIsChecked(!props.isChecked);
                }}
                className={`cursor-pointer w-[24px] h-[24px] rounded mr-[16px] ${
                  props.isChecked
                    ? "bg-[#5964E0] bg-no-repeat bg-center bg-[url(/src/assets/desktop/icon-check.svg)]"
                    : props.isToggled
                    ? "bg-[#FFF]"
                    : "bg-[#19202D] opacity-[10%]"
                }`}
              ></div>
              <h1
                className={`${
                  props.isToggled && "text-[#FFF]"
                } font-[700] text-[16px] leading-[19.84px]`}
              >
                Full Time Only
              </h1>
            </div>
            <div
              onClick={() => {
                setFilterClicked(!filterClicked);
                props.onLocationSearch(locationSearch);
              }}
              className="flex justify-center cursor-pointer bg-[#5964E0] rounded-lg mx-[24px] mb-[24px]"
            >
              <button className="px-[48.82px] py-[16px] font-[700] text-[16px] leading-[19.84px] text-[#FFF] outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Filter;
