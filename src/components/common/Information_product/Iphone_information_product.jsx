import { useState } from "react";

const Iphone_information_product = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {category === "Apple" && (
        <>
          <div>
            <h3>iPhone 13 Pro</h3>
            <p>
              iPhone 13 Pro mang lại trải nghiệm chụp ảnh, quay video vượt trội
              với hệ thống camera mạnh mẽ, màn hình Super Retina XDR và hiệu
              suất mạnh mẽ với chip A15 Bionic.
            </p>
            {isExpanded && (
              <p>
                Với thiết kế mỏng nhẹ và khả năng chống nước, iPhone 13 Pro là
                sự kết hợp hoàn hảo của công nghệ và thời trang, mang lại cho
                người dùng những trải nghiệm đỉnh cao trong mọi tác vụ.
              </p>
            )}
            <button onClick={toggleExpanded}>
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Iphone_information_product;
