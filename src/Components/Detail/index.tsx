import { useParams } from "react-router-dom";
import Data from "../data.ts";

function Detail(props: { isToggled: boolean }) {
  const { id } = useParams();
  const jobId = id ? id : "";

  const JobObj = Data.find((job) => job.id.toString() === jobId);

  return (
    <>
      {JobObj && (
        <div className="flex flex-col items-center px-[24px]">
          <div
            className={`${
              props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
            } desktop:w-[730px] tablet:pr-[40px] tablet:mb-[32px] tablet:px-0 tablet:pb-0 tablet:w-[689px] tablet:flex-row tablet:justify-between flex flex-col items-center w-[338px] mb-[24px] mt-[-20px] rounded-lg px-[42px] pb-[24px]`}
          >
            <div className="tablet:flex tablet:items-center">
              <div
                className="tablet:rounded-lg tablet:mr-[40px] tablet:w-[140px] tablet:h-[140px] tablet:translate-y-0 w-[60px] h-[60px] translate-y-[-24px] flex justify-center items-center rounded-xl"
                style={{ backgroundColor: JobObj.logoBackground }}
              >
                <img
                  className="px-[5px] py-[19px]"
                  src={JobObj.logo}
                  alt={JobObj.company}
                />
              </div>
              <div className="tablet:mb-0 flex flex-col items-center mb-[24px]">
                <h2
                  className={`${
                    props.isToggled && "text-[#FFF]"
                  } font-[700] text-[20px] self-start leading-[24.8px] mb-[12px]`}
                >
                  {JobObj.company}
                </h2>
                <h2 className="font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                  {JobObj.company + ".com"}
                </h2>
              </div>
            </div>
            <button className="px-[30px] py-[16px] font-[700] text-[15px] leading-[19.84px] bg-opacity-[10%] bg-[#5964E0] text-[#5964E0] hover:bg-opacity-[25%] outline-none rounded">
              Company Site
            </button>
          </div>
          <div
            className={`${
              props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
            } desktop:w-[730px] tablet:w-[689px] flex flex-col items-center w-[338px] mb-[49px] rounded-lg px-[42px] py-[40px] `}
          >
            <div className="tablet:flex tablet:items-center tablet:justify-between tablet:mb-[40px] tablet:w-full">
              <div className="tablet:mb-0 mb-[50px]">
                <div className="flex items-center mb-[12px] h-[17px]">
                  <h2 className="font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                    {JobObj.postedAt}
                  </h2>
                  <span className="flex h-[4px] w-[4px] mx-[12px] bg-[#6E8098] rounded-full self-end"></span>
                  <h2 className="font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                    {JobObj.contract}
                  </h2>
                </div>
                <h1
                  className={`${
                    props.isToggled && "text-[#FFF]"
                  } w-full font-[700] text-[20px] leading-[24.8px] mb-[12px]`}
                >
                  {JobObj.position}
                </h1>
                <h1 className="font-[700] text-[14px] leading-[17.36px] text-[#5964E0]">
                  {JobObj.location}
                </h1>
              </div>
              <button className="tablet:max-w-[140px] tablet:mb-0 px-[30px] py-[16px] mb-[32px] w-full font-[700] text-[15px] leading-[19.84px] bg-[#5964E0] text-[#FFF] hover:bg-[#939BF4] outline-none rounded">
                Apply Now
              </button>
            </div>
            <div className="desktop:max-w-[680px] tablet:max-w-[590px] max-w-[254px]">
              <h2 className="font-[400] text-[16px] leading-[26px] text-[#6E8098] mb-[40px]">
                {JobObj.description}
              </h2>
              <div className="mb-[28px]">
                <h1
                  className={`${
                    props.isToggled && "text-[#FFF]"
                  } font-[700] text-[20px] leading-[24.8px] mb-[28px]`}
                >
                  Requirements
                </h1>
                <h2 className="font-[400] text-[16px] leading-[26px] text-[#6E8098] mb-[32px]">
                  {JobObj.requirements.content}
                </h2>
                <ul className="list-disc ml-[20px] text-[#6E8098]">
                  {JobObj.requirements.items.map((item, index) => (
                    <li className="mb-[8px]" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" mb-[40px]">
                <h1
                  className={`${
                    props.isToggled && "text-[#FFF]"
                  } font-[700] text-[20px] leading-[24.8px] mb-[28px]`}
                >
                  What You Will Do
                </h1>
                <h2 className="font-[400] text-[16px] leading-[26px] text-[#6E8098] mb-[32px]">
                  {JobObj.role.content}
                </h2>
                <ul className="list-decimal ml-[20px] text-[#6E8098]">
                  {JobObj.role.items.map((item, index) => (
                    <li className="mb-[8px]" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              props.isToggled ? "bg-[#19202D]" : "bg-[#FFF]"
            } desktop:justify-center tablet:justify-between tablet:items-center tablet:px-[40px] flex justify-center w-full absolute neddedWidth:bottom-0 bottom-[-106px] left-0`}
          >
            <div className="desktop:mr-[350px]">
              <h1
                className={`${
                  props.isToggled && "text-[#FFF]"
                } hidden tablet:flex w-full font-[700] text-[20px] leading-[24.8px] mb-[12px]`}
              >
                {JobObj.position}
              </h1>
              <h2 className="hidden tablet:flex font-[400] text-[16px] leading-[19.84px] text-[#6E8098]">
                So Digital Inc.
              </h2>
            </div>
            <button className="tablet:max-w-[140px] tablet:mx-0 mx-[10%] px-[30px] py-[16px] mb-[32px] w-full max-w-[327px] font-[700] text-[15px] leading-[19.84px] bg-[#5964E0] text-[#FFF] mt-[25px] hover:bg-[#939BF4] outline-none rounded">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
