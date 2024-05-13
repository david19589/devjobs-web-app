import { useState } from "react";
import Data from "../data.ts";
import { Link } from "react-router-dom";
import Filter from "../Filter/index.tsx";

function Home(props: {
  isToggled: boolean;
  searchValue: string;
  locationSearchValue: string;
  isChecked: boolean;
  onSearch: (value: string) => void;
  onLocationSearch: (value: string) => void;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [visibleJobs, setVisibleJobs] = useState(6);

  const filteredJobs = Data.filter((job) => {
    const matchedSearch = job.company
      .toLowerCase()
      .includes(props.searchValue.toLowerCase());
    const matchedLocation = job.location
      .toLowerCase()
      .includes(props.locationSearchValue.toLowerCase());
    if (props.isChecked && job.contract.toLowerCase().includes("full time")) {
      return matchedSearch && matchedLocation;
    } else if (!props.isChecked && job.contract.toLowerCase().includes("")) {
      return matchedSearch && matchedLocation;
    }
  });

  return (
    <>
      <div className="mx-[24px] mb-[100px] mt-[-70px] z-10 relative">
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
      <div className="flex flex-wrap justify-center gap-[60px] max-w-[1440px] mr-auto ml-auto relative">
        {filteredJobs.slice(0, visibleJobs).map((item, index) => {
          return (
            <Link key={index} to={`/job/${item.id}`}>
              <div
                className={`${
                  props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
                } flex cursor-pointer hover:shadow-md hover:shadow-gray-400 hover:scale-105 w-[336px] h-[272px] rounded-lg pr-[55px] pl-[32px] pb-[32px] group`}
              >
                <div>
                  <div
                    className="w-[60px] h-[60px] translate-y-[-24px] flex justify-center items-center rounded-xl"
                    style={{ backgroundColor: item.logoBackground }}
                  >
                    <img
                      className="px-[5px] py-[19px]"
                      src={item.logo}
                      alt={item.company}
                    />
                  </div>
                  <div className="flex items-center mb-[16px] h-[17px]">
                    <h2 className="font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                      {item.postedAt}
                    </h2>
                    <span className="flex h-[4px] w-[4px] mx-[12px] bg-[#6E8098] rounded-full self-end"></span>
                    <h2 className="font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                      {item.contract}
                    </h2>
                  </div>
                  <h1
                    className={`${
                      props.isToggled && "text-[#FFF]"
                    } w-full font-[700] text-[20px] leading-[24.8px] mb-[17px] group group-hover:text-[#6E8098]`}
                  >
                    {item.position}
                  </h1>
                  <h2 className="font-[400] text-[16px] leading-[19.84px] mb-[44px] text-[#6E8098]">
                    {item.company}
                  </h2>
                  <h1 className="font-[700] text-[14px] leading-[17.36px] text-[#5964E0]">
                    {item.location}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
        {visibleJobs < filteredJobs.length && (
          <button
            onClick={() => {
              setVisibleJobs(visibleJobs + 3);
            }}
            className="px-[30px] py-[16px] mx-[30%] font-[700] text-[15px] leading-[19.84px] bg-[#5964E0] text-[#FFF] outline-none rounded mb-[61px]"
          >
            Load More
          </button>
        )}
        <span className="mx-[100%]"></span>
      </div>
    </>
  );
}
export default Home;
