import { Button } from "antd";
import { useState } from "react";

const Oppo_information_product = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {category === "Oppo" && (
        <>
          <div>
            <h3>oppo 13 Pro</h3>
            <p>
              oppo 13 Pro mang lại trải nghiệm chụp ảnh, quay video vượt trội
              với hệ thống camera mạnh mẽ, màn hình Super Retina XDR và hiệu
              suất mạnh mẽ với chip A15 Bionic.
            </p>
            {isExpanded && (
              <p>
                Với thiết kế mỏng nhẹ và khả năng chống nước, oppo 13 Pro là sự
                kết hợp hoàn hảo của công nghệ và thời trang, mang lại cho người
                dùng những trải nghiệm đỉnh cao trong mọi tác vụ.
              </p>
            )}
            <Button onClick={toggleExpanded}>
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </>
      )}
    </>
  );
};
export default Oppo_information_product;
