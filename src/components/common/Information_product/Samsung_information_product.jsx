import React, { useState } from "react";

const Samsung_information_product = (props) => {
  const { category } = props;
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái để kiểm tra xem có xem thêm không

  const toggleExpanded = (event) => {
    event.preventDefault(); // Ngừng hành vi mặc định (tránh reload trang)
    setIsExpanded(!isExpanded); // Chuyển trạng thái giữa xem thêm và thu gọn
  };

  return (
    <>
      {category === "Samsung" && (
        <>
          <div>văn bản Samsung</div>
          <div>văn bản Samsung</div>
          <div>văn bản Samsung</div>

          {isExpanded && (
            <>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
              <div>văn bản Samsung</div>
            </>
          )}

          <button onClick={toggleExpanded}>
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </button>
        </>
      )}
    </>
  );
};

export default Samsung_information_product;
