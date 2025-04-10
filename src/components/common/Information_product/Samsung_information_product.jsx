import { Button } from "antd";
import React, { useState } from "react";
import "./Samsung_information_product.css"

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
          <div className="Samsung-info-container">
            <div>
              <p>
                Bạn đang tìm kiếm một chiếc điện thoại thông minh với hiệu năng mạnh
                mẽ, thiết kế sang trọng và tính năng vượt trội? Hãy để dòng điện
                thoại Samsung Galaxy mang đến cho bạn trải nghiệm di động tuyệt vời
                nhất. Với những công nghệ tiên tiến và sự sáng tạo không ngừng,
                Samsung Galaxy sẽ là người bạn đồng hành hoàn hảo, đáp ứng mọi nhu
                cầu từ giải trí đến làm việc, từ chụp ảnh đến kết nối với thế giới.
              </p>
              <h3>1. Đôi nét về điện thoại Samsung</h3>
              <p>
                Samsung Electronics là một trong những công ty con hàng đầu của
                thương hiệu Samsung đình đám xứ Kim Chi. Công ty công nghệ này
                đã ghi dấu ấn trên thị trường qua việc sản xuất ra nhiều dòng
                điện thoại đa dạng có mức giá cạnh tranh, phù hợp với nhiều đối
                tượng sử dụng. Đặc biệt, chính sự kết hợp giữa công nghệ tiên
                tiến đi kèm chất lượng cao cấp đã giúp cho điện thoại Samsung
                trở thành lựa chọn hàng đầu của hầu hết người dùng hiện nay.
              </p>
              <p className="Samsung-info-container-p">
                “Imagine” chính là khẩu hiệu đình đám không thua kém bất kì đối
                thủ nào khác có cùng phân khúc trên thị trường hiện tại của <span className="highlight">điện thoại Samsung chính hãng</span>
                . Có thể nói để đến gần với người dùng
                hơn, Samsung đã không ngần ngại mang đến cho họ sự lựa chọn
                phong phú từ thiết kế sang trọng bên ngoài cho tới cấu hình chức
                năng của sản phẩm. Đi kèm với đó là sự đảm bảo vững chắc đầy uy
                tín, luôn sáng tạo đúng với thông điệp “hãy tưởng tượng những
                điều tốt đẹp mà chúng ta có thể làm”.
              </p>
              <img
                src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_1.png"
                alt="" className={`Samsung-info-container-img-chinh ${isExpanded ? "expanded" : ""}`}
              />
            </div>
            {isExpanded && (
              <>
                <h3>2. Những điểm đặc trưng nổi bật của điện thoại Samsung</h3>
                <p>
                  Những mẫu điện thoại Samsung Galaxy đều sở hữu cho mình những
                  điểm đặc trưng riêng biệt. Cùng khám phá các nét nổi bật của
                  chúng ngay dưới này nhé
                </p>
                <h3>2.1. Thiết kế</h3>
                <p>
                  Samsung luôn chú trọng vào thiết kế bên ngoài của sản phẩm.
                  Chính vì vậy, mỗi chiếc điện thoại mà hãng sản xuất đều mang một
                  diện mạo sang trọng và đẳng cấp. Đi kèm với chất liệu tiên tiến
                  có độ bền cao càng mang đến cảm giác an tâm cho người sử dụng.
                  Không những vậy, mỗi một phiên bản còn mang trong mình nhiều màu
                  sắc đa dạng phù hợp với mọi phong cách khác nhau của người dùng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_2.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>2.2. Màn hình</h3>
                <p>
                  Trong những năm trở lại đây, hãng cũng không quên chú trọng đến
                  không gian trải nghiệm của người dùng. Minh chứng rõ ràng là họ
                  đã sản xuất ra nhiều loại màn hình cao cấp khác nhau. Bên cạnh
                  đó, Samsung còn áp dụng công nghệ hiển thị tiên tiến giúp cho
                  mọi chi tiết, hình ảnh luôn sống động, sắc nét, rực rỡ trong
                  không gian siêu rộng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_3.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>2.3. Hiệu năng</h3>
                <p>
                  Chip Exynos, MediaTek, Snapdragon,… là những mẫu chip thường
                  xuyên được Samsung áp dụng gần đây cho các dòng điện thoại thông
                  minh của mình. Mỗi vi xử lý này mang đến hiệu suất cao từ việc
                  xử lý các tác vụ hàng ngày một cách nhẹ nhàng đến việc đáp ứng
                  nhu cầu chơi game đồ họa nặng. Đặc biệt là chúng có thể thực
                  hiện công việc đa nhiệm mà không gặp bất kỳ trở ngại nào.{" "}
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_4.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>2.4. Camera</h3>
                <p>
                  Điện thoại Samsung là điểm đến của sự sáng tạo không giới hạn
                  bởi chúng sở hữu đa dạng các loại camera khác nhau. Từ camera
                  góc rộng cho đến telephoto, macro đều được thiết kế để tối ưu
                  hoá khả năng chụp ảnh và quay video. Chưa hết, các cảm biến trên
                  này theo năm tháng sẽ có cải thiện lớn về độ phân giải đi kèm
                  với nhiều hiệu ứng ấn tượng để người dùng có thể ghi lại từng
                  khoảnh khắc một cách hoàn hảo nhất.
                </p>
                <h3>2.5. Thời lượng pin</h3>
                <p>
                  Thời lượng pin là một trong những yếu tố quan trọng nhất của
                  điện thoại Samsung. Với dung lượng pin lớn, người dùng có thể sử
                  dụng suốt cả ngày dài mà không lo hết pin. Ngoài ra, Samsung còn
                  tích hợp công nghệ sạc nhanh, giúp tiết kiệm thời gian và tăng
                  hiệu quả sử dụng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_5.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>2.6. Hệ điều hành</h3>
                <p>
                  Giống như iOS, Samsung cũng tạo ra hệ điều hành riêng của mình
                  dựa trên nền tảng Android mang tên One UI. Điều đáng chú ý là
                  One UI được cập nhật thường xuyên tương tự đại kình địch iOS với
                  lộ trình rõ ràng và những nâng cấp hữu ích mỗi lần cập nhật.
                </p>
                <p>
                  Chẳng hạn như với One UI 2.0, thanh điều hướng đã được tối giản
                  hóa chỉ còn một phím ảo thay cho ba hành động “back, home và
                  recent” như nhiều mẫu smartphone Android khác. Đây là một sự
                  nâng cấp nhằm cạnh tranh trực tiếp với kiểu một nút bấm của
                  Apple.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_6.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>3. Các dòng điện thoại Samsung hiện có trên thị trường</h3>
                <p>
                  Tiếp đến, hãy cùng tìm hiểu qua những điểm nổi bật của tất cả
                  các dòng điện thoại Samsung Galaxy của gã khổng lồ công nghệ Hàn
                  Quốc ngay dưới đây.
                </p>
                <h3>3.1. Samsung Galaxy S Series</h3>
                <p>
                  <span className="highlight">Dòng Samsung Galaxy S</span> xuất hiện lần đầu vào năm 2010 đã định
                  nghĩa lại khái niệm “siêu thông minh” với chữ “S” đại diện cho
                  “Super Smart”. Và trải qua hơn một thập kỷ phát triển không
                  ngừng, dòng sản phẩm này lại càng được phát triển vượt bậc với
                  những phiên bản tiên tiến nhất đi kèm hàng loạt tính năng đột
                  phá.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_7.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <p>
                  Điển hình là Samsung Galaxy S24 Series, thế hệ mới nhất ra mắt
                  vào đầu năm 2024, được trang bị hàng loạt các tính năng tân
                  tiến. Dòng sản phẩm này sở hữu khung viền cao cấp và kích thước
                  màn hình mở rộng. Bên cạnh đó, dung lượng pin cũng có sự nâng
                  cấp và hiệu năng cũng mạnh mẽ hơn với sự góp mặt của chip Exynos
                  2400 và Snapdragon 8 Gen 3 For Galaxy. Đặc biệt, thế hệ này còn
                  gây ấn tượng bằng việc tích hợp các tính năng AI vô cùng độc
                  đáo.
                </p>
                <h3>3.2. Samsung Galaxy Z Series</h3>
                <p>
                  <span className="highlight">Dòng Samsung Galaxy Z</span> là một minh chứng cho sự tiến bộ không
                  ngừng của Samsung trong lĩnh vực công nghệ di động. Với thiết kế
                  màn hình gập độc đáo, Galaxy Z không chỉ là một sản phẩm cao cấp
                  mà còn là biểu tượng của sự sang trọng và tinh tế, mang đến cho
                  người dùng trải nghiệm đẳng cấp và khác biệt.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_8.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <p>
                  Thế hệ Z Series mới đây nhất 2023 chính là Z Flip5 và Z Fold5.
                  Đây là hai mẫu gập có nhiều cải tiến xuất sắc hơn thế hệ trước.
                  Chẳng hạn như phần bản lề được tối ưu hơn mà khi gập không còn
                  kẽ hở, nếp gấp màn hình được làm mờ đi,… Chưa kể, sản phẩm có
                  một số nâng cấp về các cảm biến chụp ảnh và hiệu năng mạnh hơn
                  nhờ chip Snapdragon 8 Gen 2 For Galaxy. Theo đó, giá bán thiết
                  bị sẽ ổn định và thấp hơn chút so với flagship S Series.
                </p>
                <h3>3.3. Samsung Galaxy M Series</h3>
                <p>
                  <span className="highlight">Dòng Samsung Galaxy M</span> được biết đến với dung lượng pin “khủng”
                  đi kèm hệ thống cụm camera sau ấn tượng với một hiệu năng tương
                  đối ổn định. Đây là sản phẩm được nhiều người dùng quan tâm bởi
                  chúng có mức giá cực kỳ phải chăng phù hợp với mọi đối tượng
                  người dùng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_9.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <p>
                  M34 là chiếc điện thoại thuộc dòng M mới ra mắt gần đây của
                  Samsung. Dù xuất hiện vào năm 2023 nhưng sản phẩm vẫn gây sự chú
                  ý với người dùng qua nhiều điểm mới ấn tượng. Cụ thể, M34 có
                  ngoại hình trẻ trung năng động, hiệu năng ổn định với chip Exyos
                  1280 đi kèm thời lượng pin 6000mAh. Đặc biệt, mức giá chỉ để sở
                  hữu chúng cũng siêu hời mà bạn có thể mua ngay lập tức.
                </p>
                <h3>3.4. Samsung Galaxy A Series</h3>
                <p>
                  Dòng Samsung Galaxy A sở hữu thiết kế trẻ trung và phong cách
                  hiện đại nên hiện tại chúng đang là lựa chọn lý tưởng của nhiều
                  người dùng. Không những vậy, các thiết bị thuộc dòng này còn có
                  mức giá “mềm” khiến nó trở nên phổ biến và dễ dàng tiếp cận
                  khách hàng hơn so với dòng cao cấp. Đặc biệt, những chiếc điện
                  thoại thông minh này được trang bị đầy đủ các ống kính camera đi
                  kèm với hiệu năng ổn áp đáp ứng cho mọi nhu cầu sử dụng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_10.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <p>
                  A05, A05s, A15, A25, A35 và A55 là những mẫu điện thoại thuộc
                  phân khúc A Series đang làm mưa làm gió trong năm 2024. Samsung
                  không chỉ tập trung vào việc cải tiến hiệu năng mà còn chú trọng
                  đến thiết kế và màu sắc đem đến vẻ ngoài tươi mới cao cấp hơn
                  cho sản phẩm. Bên cạnh đó, camera và hiệu năng cũng được nâng
                  cấp đáng kể, cho phép người dùng tận hưởng và trải nghiệm máy
                  một cách trọn vẹn nhất.
                </p>
                <h3>4. Tại sao nên sử dụng điện thoại Samsung?</h3>
                <p>
                  Điện thoại Samsung Galaxy sử dụng các công nghệ màn hình tiên
                  tiến như Super AMOLED và Dynamic AMOLED, mang lại hình ảnh chân
                  thực và màu sắc sống động. Đặc biệt hơn nữa, màn hình Dynamic
                  AMOLED 2X hỗ trợ HDR10+ và tần số quét 120Hz, tạo ra trải nghiệm
                  xem phim và chơi game mượt mà cho người dùng.
                </p>
                <p>
                  Samsung luôn làm người dùng ấn tượng với hệ thống camera cao cấp
                  ở cả mặt trước và sau. Các sản phẩm mới liên tục cải tiến chất
                  lượng hình ảnh và độ phân giải. Tính năng độc đáo như AI,
                  Nightography và HDR giúp tạo ra những bức ảnh sắc nét và sống
                  động.
                </p>
                <p>
                  Hiệu năng mạnh mẽ của điện thoại Samsung đến từ các loại chip đa
                  dạng như: Exynos và Snapdragon. Bên cạnh đó dòng Samsung Galaxy
                  S24 Series năm 2024 tích hợp công nghệ AI tiên tiến, nâng cao
                  trải nghiệm người dùng. Chất liệu cao cấp như Aluminum, Titanium
                  và kính cường lực Gorilla Glass giúp đảm bảo độ bền cao cho sản
                  phẩm.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_11.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>
                  5. Ưu và nhược điểm của Samsung so với các dòng điện thoại khác
                </h3>
                <p>
                  Smartphone Samsung sở hữu thiết kế đa dạng và công nghệ tiên
                  tiến, mang lại hiệu năng mạnh mẽ và trải nghiệm người dùng mượt
                  mà. Tuy nhiên, khi đặt lên bàn cân với nhiều đối thủ khác trên
                  thị trường thì nó vẫn còn một vài hạn chế. Hãy cùng phân tích
                  chi tiết hơn các ưu và nhược điểm này.
                </p>
                <h3>5.1. So với Apple iPhone</h3>
                <p>
                  Samsung và Apple iPhone đều có những điểm mạnh riêng, tạo nên sự
                  lựa chọn đa dạng cho người tiêu dùng. Samsung vốn nổi tiếng với
                  màn hình AMOLED rực rỡ, mang lại trải nghiệm xem phim và chơi
                  game tuyệt vời nhờ màu sắc sống động và độ tương phản cao. Đặc
                  biệt, pin của điện thoại Samsung có dung lượng lớn, cho phép
                  người dùng sử dụng suốt ngày dài mà không lo hết.
                </p>
                <p>
                  Apple iPhone thì ngược lại. Dòng thiết bị có hệ sinh thái liền
                  mạch và hiệu năng ổn định. Các sản phẩm của Apple thường dễ sử
                  dụng và tích hợp tốt với các thiết bị khác như MacBook, iPad và
                  Apple Watch. Người dùng iPhone cũng có lợi thế từ việc cập nhật
                  phần mềm nhanh chóng, đảm bảo thiết bị luôn được bảo mật và có
                  những tính năng mới nhất.
                </p>
                <p>
                  Samsung mang lại tính năng đa dạng hơn với nhiều dòng sản phẩm
                  và các tùy chọn giá cả khác nhau. Trong khi đó, Apple iPhone
                  thường chiếm ưu thế về tính đơn giản và sự mượt mà trong sử
                  dụng. Cả 2 đều có những ưu điểm riêng, giúp người dùng chọn lựa
                  tùy theo nhu cầu và sở thích cá nhân.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_12.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>5.2. So với các thương hiệu Android khác (OPPO, Xiaomi)</h3>
                <p>
                  Samsung, OPPO và Xiaomi đều là những cái tên nổi bật trong thế
                  giới điện thoại Android. Mỗi hãng đều có những điểm mạnh riêng.
                  Samsung sở hữu sự bền bỉ và chất lượng thiết kế cao cấp cùng với
                  các tính năng hiện đại và thiết kế tinh tế. Những công nghệ tiên
                  tiến như màn hình AMOLED và khả năng chống nước giúp Samsung trở
                  nên nổi bật.
                </p>
                <p>
                  OPPO có khả năng sạc siêu nhanh và giá cả phải chăng, thu hút
                  nhiều người dùng trẻ tuổi. Xiaomi lại nổi tiếng với hiệu năng
                  mạnh mẽ và mức giá hợp lý, đem đến nhiều tính năng cao cấp trong
                  các dòng sản phẩm tầm trung.
                </p>
                <p>
                  Dù Samsung có giá thành cao hơn nhưng sự ổn định và chất lượng
                  tổng thể của sản phẩm khiến nó trở thành lựa chọn đáng tin cậy.
                  OPPO và Xiaomi thì mang lại những lựa chọn hấp dẫn cho người
                  dùng đang tìm kiếm sự cân bằng giữa tính năng và giá cả.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_13.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>
                  6. Lý do nên mua điện thoại Samsung mới chính hãng tại Di Động
                  Việt
                </h3>
                <p className="Samsung-info-container-p"><span className="highlight_bold">"Mua sản phẩm, chọn sản phẩm. Mua ở đâu, chọn Di Động Việt"</span></p>
                <p>
                  Dưới đây là tổng hợp những đặc quyền mà người dùng sẽ nhận được
                  khi mua điện thoại Samsung Galaxy tại Di Động Việt.
                </p>
                <h3>6.1. Khách hàng nhận được gì khi lựa chọn Di Động Việt</h3>
                <p>
                  Di Động Việt tự hào là đối tác toàn diện của Samsung Việt Nam
                  với đặc quyền chuyên phân phối các SẢN PHẨM VƯỢT TRỘI CHÍNH HÃNG
                  CHÍNH THỐNG 100% từ thương hiệu. Mọi thiết đều trải qua quy
                  trình kiểm định nghiêm ngặt để đảm bảo không lẫn lộn với hàng
                  chính hãng xách tay hay hàng giả, hàng kém chất lượng trôi nổi
                  trên thị trường. Quý khách hàng có thể hoàn toàn yên tâm bởi mọi
                  sản phẩm tại Di Động Việt đều được nhập khẩu trực tiếp từ nhà
                  sản xuất, đầy đủ giấy tờ, chứng từ.
                </p>
                <p>
                  Chưa hết, Di Động việt còn đem tới cho khách hàng những QUYỀN
                  LỢI VƯỢT TRỘI khi mua sản phẩm điện thoại Samsung mới. Có thể kể
                  ra bao gồm: bảo hành 1 đổi 1, bảo hành rơi vỡ, bảo hành pin, trả
                  góp 0% lãi suất, dùng thử 7 ngày miễn phí,… Đây là những ưu đãi
                  thiết thực giúp quý khách an tâm hơn khi tiếp cận và sử dụng các
                  sản phẩm công nghệ cao mà hệ thống cung cấp. Toàn bộ những quyền
                  lợi đều hướng tới mục tiêu đem lại sự hài lòng và tiện ích lâu
                  dài cho mọi khách hàng.
                </p>
                <p>
                  Di Động Việt tự hào cam kết không chỉ đem lại những sản phẩm
                  vượt trội và quyền lợi vượt trội mà còn đảm bảo mọi khách hàng
                  đều có TRẢI NGHIỆM VƯỢT TRỘI từ lúc tham khảo sản phẩm đến sau
                  khi mua sắm. Đội ngũ Di Động Việt luôn hiện diện để phục vụ bạn
                  ở mọi nơi kể cả kênh online hay offline. Ngoài ra, Di Động Việt
                  sẽ là người đồng hành cùng bạn trong mọi giai đoạn: trước, trong
                  và sau khi mua hàng một cách đầy đủ nhất.
                </p>
                <p>
                  Chưa dừng lại ở đó, Di Động Việt còn sở hữu hệ thống 11 cửa hàng
                  trải nghiệm cao cấp Samsung Flagship Store. Tại đây, quý khách
                  hàng sẽ được trải nghiệm không gian PREMIUM cao cấp chuẩn Hàn
                  Quốc với đa dạng các dòng sản phẩm mới nhất. Đồng thời bạn còn
                  được đội ngũ nhân viên chuyên nghiệp, bài bản tư vấn, hỗ trợ để
                  chọn ra điện thoại chính hãng phù hợp nhất với nhu cầu.
                </p>
                <h3>6.2. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h3>
                <p>
                  Và nếu như quý khách hàng có bất kỳ thắc mắc hay câu hỏi nào cần
                  được giải đáp, hãy liên hệ với chúng tôi qua các kênh sau:
                </p>
                <ul className="Samsung-info-container-ulli">
                  <li>
                    <strong>Hotline:</strong> 1800.6018 (Liên hệ Kỹ thuật hoặc Mua
                    ngay).
                  </li>
                  <li>
                    <strong>Hotline:</strong> 1800.6729 (Liên hệ Bảo hành).
                  </li>
                  <li>
                    <strong>Hotline:</strong> 1800.6306 (Góp ý).
                  </li>
                  <li>
                    <strong>Fanpage:</strong>{" "}
                    <a
                      href="https://www.facebook.com/didongviet/"
                      target="_blank"
                      rel="noopener noreferrer">
                      https://www.facebook.com/didongviet/
                    </a>
                  </li>
                  <li>
                    <strong>TikTok:</strong>{" "}
                    <a
                      href="https://www.tiktok.com/@didongviet_official"
                      target="_blank"
                      rel="noopener noreferrer">
                      https://www.tiktok.com/@didongviet_official
                    </a>
                  </li>
                </ul>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_14.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <h3>
                  7. Những đánh giá và nhận xét của khách hàng khi mua điện thoại
                  Samsung chính hãng tại Di Động Việt
                </h3>
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_15.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_16.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_17.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <img
                  src="src/assets/images/Info_description_product/Samsung_Info_description/Samsung_18.png"
                  alt=""
                  className="Samsung-info-container-img"
                />
                <p className="Samsung-info-container-p">
                  Anh Thiện tại Quận 10 - TP.HCM tỏ ra rất hài lòng khi sở hữu
                  chiếc smartphone Samsung mới mua từ Di Động Việt. Anh đã dành
                  thời gian để nghiên cứu và so sánh giá cả tại nhiều cửa hàng
                  khác nhau và nhận thấy rằng Di Động Việt có mức giá "RẺ HƠN CÁC
                  LOẠI RẺ" lên đến hàng trăm ngàn đồng. Ngoài ra, anh Thiện còn
                  nhấn mạnh: "Nơi nào rẻ hơn thì mình mua thôi!".
                </p>
                <p className="Samsung-info-container-p">
                  Chị Thảo ở Quận 3 -TP.HCM cũng đồng tình với quan điểm này. Chị
                  cho rằng trong thời kỳ kinh tế khó khăn thì chị ưu tiên việc tối
                  ưu hóa ngân sách cá nhân. Trong số những chuỗi bán lẻ điện thoại
                  quy mô lớn , chị đã lựa chọn Di Động Việt để đặt niềm tin để
                  giảm bớt được phần nào gánh nặng tài chính. Chị cho biết: "Tôi
                  mua chiếc điện thoại Samsung Galaxy Z Flip4 tại Di Động Việt với
                  giá 14,59 triệu đồng, so giá với nơi khác thì tôi đã tiết kiệm
                  được hơn 2 triệu đồng. Đây là một số tiền khá lớn đối với tôi và
                  tôi có thể mua được nhiều thứ khác với số tiền này”.
                </p>
                <p className="Samsung-info-container-p">
                  Bên cạnh đó, bạn Minh Phương - sinh viên đang học tại Đại học
                  Hutech cũng chia sẻ nếu đặt yếu tố tiết kiệm chi phí lên hàng
                  đầu khi mua điện thoại và đồ công nghệ thì Di Động Việt là sự
                  lựa chọn số 1. Bạn cho biết: “Có thể tiết kiệm được thêm bao
                  nhiêu thì hay bấy nhiêu, vì mình còn là sinh viên, chưa làm ra
                  nhiều tiền và phải dựa vào trợ cấp của gia đình”.
                </p>
              </>
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

export default Samsung_information_product;
