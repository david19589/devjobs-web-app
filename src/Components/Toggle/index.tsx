function Toggle(props: {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleToggle = () => {
    props.setIsToggled(!props.isToggled);
  };

  return (
    <div className="h-[24px]">
      <label className="inline-flex items-center mx-[16px] cursor-pointer">
        <input
          onClick={handleToggle}
          type="checkbox"
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#FFF] color-[#5964E0] rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-0.5 after:start-[2px] after:bg-[#5964E0] after:rounded-full after:h-[20px] after:w-[20px] after:transition-all"></div>
      </label>
    </div>
  );
}
export default Toggle;
