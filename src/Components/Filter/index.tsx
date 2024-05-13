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
        <div className="tablet:justify-center flex justify-between items-center pl-[24px] pr-[16px] py-[16px]">
          <div className="tablet:flex tablet:mr-[24px]">
            <svg
              className="hidden tablet:flex mr-[16px] self-center"
              width="30"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
            <input
              className={`${
                props.isToggled && "text-[#FFF] bg-[#19202D]"
              } font-[400] text-[16px] leading-[19.84px] outline-none w-full mr-[12px]`}
              id="search"
              placeholder="Filter by title…"
              onChange={(e) => {
                setTitleSearch(e.target.value);
                if (e.target.value === "") {
                  props.onSearch("");
                }
              }}
            />
            <span className="hidden tablet:flex w-[1px] bg-[#6E8098] opacity-[20%] my-[-16px]"></span>
          </div>
          <div className="hidden tablet:flex tablet:mr-[24px]">
            <img
              className="mr-[16px] self-center"
              src={LocationSvg}
              alt="LocationSvg"
            />
            <input
              className={`${
                props.isToggled && "text-[#FFF] bg-[#19202D]"
              } font-[400] text-[16px] leading-[19.84px] outline-none w-full mr-[12px]`}
              id="search2"
              placeholder="Filter by location…"
              onChange={(e) => {
                setLocationSearch(e.target.value);
                if (e.target.value === "") {
                  props.onLocationSearch("");
                }
              }}
            />
            <span className="hidden tablet:flex w-[1px] bg-[#6E8098] opacity-[20%] my-[-16px]"></span>
          </div>
          <div
            onClick={() => {
              props.setIsChecked(!props.isChecked);
            }}
            className="hidden tablet:flex items-center mr-[50px]"
          >
            <div className="flex items-center cursor-pointer">
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
                } font-[700] text-[12px] leading-[19.84px] w-max`}
              >
                Full Time Only
              </h1>
            </div>
          </div>
          <button
            onClick={() => {
              props.onSearch(titleSearch);
              props.onLocationSearch(locationSearch);
            }}
            className="hidden tablet:flex px-[30px] py-[16px] font-[700] text-[15px] leading-[19.84px] bg-[#5964E0] text-[#FFF] outline-none rounded"
          >
            Search
          </button>
          <div className="tablet:hidden flex items-center relative right-[24px]">
            <div
              onClick={() => {
                setFilterClicked(!filterClicked);
                props.onLocationSearch("");
                setLocationSearch("");
              }}
              className="mr-[24px] tablet:hidden"
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
                props.onLocationSearch(locationSearch);
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
                id="search3"
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
                className="flex items-center cursor-pointer"
              >
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
