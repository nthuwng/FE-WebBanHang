import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiOppo } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";

const CategoryIcons = (props) => {
  const { setCategory } = props;

  return (
    <>
      <div className="icon-container">
        <div className="icon-box">
          <FaApple
            color="black"
            size={40}
            onClick={() => setCategory("apple")}
          />
        </div>
        <div className="icon-box">
          <SiSamsung
            color="blue"
            size={70}
            onClick={() => setCategory("samsung")}
          />
        </div>
        <div className="icon-box">
          <SiOppo color="green" size={60} onClick={() => setCategory("oppo")} />
        </div>
        <div className="icon-box">
          <SiXiaomi
            color="orange"
            size={40}
            onClick={() => setCategory("xiaomi")}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryIcons;
