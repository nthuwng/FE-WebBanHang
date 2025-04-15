import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiOppo } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import "./CategoryIcons.css";

const CategoryIcons = (props) => {
  const { category, setCategory } = props;

  return (
    <>
      <div className="icon-container-categoryIcons">
        <div
          className={`icon-box-categoryIcons ${
            category === "Apple" ? "selected" : ""
          }`}>
          <FaApple
            color="black"
            size={40}
            onClick={() => setCategory("Apple")}
          />
        </div>
        <div
          className={`icon-box-categoryIcons ${
            category === "Samsung" ? "selected" : ""
          }`}>
          <SiSamsung
            color="blue"
            size={70}
            onClick={() => setCategory("Samsung")}
          />
        </div>
        <div
          className={`icon-box-categoryIcons ${
            category === "Oppo" ? "selected" : ""
          }`}>
          <SiOppo color="green" size={60} onClick={() => setCategory("Oppo")} />
        </div>
        <div
          className={`icon-box-categoryIcons ${
            category === "Xiaomi" ? "selected" : ""
          }`}>
          <SiXiaomi
            color="orange"
            size={40}
            onClick={() => setCategory("Xiaomi")}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryIcons;
