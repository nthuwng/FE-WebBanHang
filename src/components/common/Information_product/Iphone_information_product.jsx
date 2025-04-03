import { Button } from "antd";
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
          <div className="iphone-info-container">
            <p>
              Điện thoại iPhone là một dòng điện thoại cao cấp chạy hệ điều hành
              iOS với chip Bionic. Thiết kế tinh tế và sang trọng với màn hình
              tai thỏ và viên thuốc Dynamic Island độc đáo của sản phẩm đã chiếm
              trọn sự chú ý của người dùng. Hơn nữa, máy còn có hiệu năng ấn
              tượng và dung lượng bộ nhớ đa dạng từ 64GB, 128GB, 256GB đến 1TB.
            </p>
            {isExpanded && (
              <>
                <h3>1. Giới thiệu về điện thoại iPhone</h3>
                <p>
                  Điện thoại iPhone của Apple ra mắt lần đầu vào năm 2007. Dòng
                  sả phẩm đã thay đổi hoàn toàn cách chúng ta sử dụng điện thoại
                  di động lúc bấy giờ cho tới nay. Công ty có sở chính tại
                  Cupertino, California. Ở hiện tại, Apple không chỉ là một
                  thương hiệu mà còn là biểu tượng của sự đổi mới và chất lượng
                  qua bao năm tháng.
                </p>
                <p>
                  Điểm mạnh của dòng điện thoại nằm ở thiết kế tinh tế, hệ điều
                  hành iOS mượt mà và hệ sinh thái ứng dụng phong phú. Ngoài ra,
                  chất lượng camera, tính bảo mật cao và hiệu năng vượt trội là
                  điểm sáng. Chúng đã biến dòng smartphone này trở thành lựa
                  chọn hàng đầu của người tiêu dùng toàn cầu.
                </p>
                <p>
                  Apple không ngừng đổi mới để đáp ứng nhu cầu ngày càng cao của
                  người dùng bởi họ có tầm nhìn về lâu dài rất tốt. Từ công nghệ
                  thực tế ảo tăng cường đến phát triển mạng 5G, điện thoại
                  iPhone chính hãng sẽ tiếp tục dẫn đầu xu hướng công nghệ.
                  Ngoài ra, dòng điện thoại cũng định hình tương lai của toàn
                  ngành di động trong cả tương lai gần và xa.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_1.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>
                  2. Những điểm đặc trưng nổi bật của điện thoại Apple iPhone
                </h3>
                <p>
                  Điện thoại iPhone là sản phẩm độc quyền của thương hiệu Apple
                  với những đặc điểm riêng mà gần như bạn không thể tìm thấy ở
                  bất kỳ dòng smartphone nào khác. Để biết những đặc điểm đó là
                  gì, bạn có thể theo dõi trong phần chi tiết ở dưới đây.
                </p>
                <h3>2.1. Thiết kế</h3>
                <p>
                  Không thể phủ nhận rằng các thiết kế của dòng thiết bị luôn
                  toát lên vẻ đẳng cấp, nổi bật và mang dấu ấn biểu tượng riêng
                  biệt. Ngay từ các phiên bản đầu tiên như 3G, 3GS đến những mẫu
                  mới nhất như điện thoại iPhone, 15, 16,… Apple đã ứng dụng
                  thiết kế kim loại nguyên khối một cách tinh tế và sang trọng.
                </p>
                <p>
                  Hơn thế nữa, bảng màu của Apple cũng rất ấn tượng và hiện đại
                  với các gam màu pastel như xanh lá, xanh dương, hồng phấn,
                  vàng tơ,... Mỗi phiên bản đều có những màu sắc riêng biệt,
                  luôn khiến người dùng háo hức chờ đợi qua từng năm.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_2.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>2.2. Màn hình</h3>
                <p>
                  Nhờ sở hữu màn hình Retina chất lượng, điện thoại vượt trội
                  hơn hẳn so với các loại màn hình IPS, AMOLED hay OLED thông
                  thường. Điều này giúp mang lại hình ảnh sắc nét, độ tương phản
                  cao để người dùng có được trải nghiệm hình ảnh sống động và
                  chi tiết hơn.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_3.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>2.3. Hiệu năng</h3>
                <p>
                  Apple luôn đứng đầu về hiệu năng trong phân khúc điện thoại
                  cao cấp. Chip của họ không chỉ xử lý hình ảnh xuất sắc mà còn
                  tối ưu đồ hoạ cực kỳ chất lượng. Do đó, điện thoại iPhone
                  không chỉ đáp ứng nhu cầu giải trí như lướt web, xem video mà
                  còn hỗ trợ công việc chuyên nghiệp như quay phim.
                </p>
                <p>
                  Hiện tại, chip A18 Pro là thế hệ chip mới nhất của dòng sản
                  phẩm. Đây là con chip 3nm xịn sò, hỗ trợ CPU nhanh hơn tới
                  10%, GPU chuyên nghiệp nhanh hơn tới 20% đời trước, mở ra
                  nhiều trải nghiệm hoàn toàn mới. Từ chơi game, ứng dụng AR đến
                  đồ hoạ, chip này đều mang lại hiệu suất mượt mà và sống động
                  hơn.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_4.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>2.4. Camera</h3>
                <p>
                  Apple liên tục cải tiến camera qua từng phiên bản. Ban đầu,
                  hãng chỉ nâng cao thuật toán xử lý để đảm bảo hình ảnh chân
                  thực. Tuy nhiên, gần đây, Apple đã đầu tư mạnh vào phần cứng,
                  nhằm thỏa mãn cả nhu cầu quay/chụp chuyên nghiệp. Dù so với
                  các mẫu flagship khác, thông số camera chưa nổi bật nhưng chất
                  lượng tổng thể của các dòng điện thoại Apple thực sự rất đáng
                  khen ngợi.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_5.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>2.5. Thời lượng pin</h3>
                <p>
                  Pin là một điểm nhấn mà Apple không chạy theo xu hướng chung.
                  Thay vì trang bị pin lớn hơn như nhiều thương hiệu khác, Apple
                  tập trung vào tối ưu hóa khả năng tiêu thụ điện năng cho các
                  dòng sản phẩm của mình.
                </p>
                <p>
                  Nhờ đó, dù chỉ sử dụng pin khoảng 4000 mAh, điện thoại iPhone
                  vẫn có thời lượng sử dụng tốt, không hề kém cạnh so với những
                  sản phẩm có pin dung lượng lên đến 5000 mAh.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_6.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>2.6. Hệ điều hành</h3>
                <p>
                  Dòng thiết bị sử dụng hệ điều hành iOS độc quyền được tối ưu
                  hóa hoàn hảo cho phần cứng, mang lại hiệu suất và trải nghiệm
                  người dùng mượt mà. Phần mềm này không chỉ bảo mật mà còn ổn
                  định nên đây là những yếu tố then chốt giúp giữ chân người
                  dùng suốt nhiều năm qua.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_7.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3. Tất cả các dòng điện thoại iPhone mới nhất</h3>
                <p>
                  Bên dưới là tổng hợp các dòng điện thoại mà Apple đã cho trình
                  làng trên thị trường cùng với những đặc điểm nổi bật nhất. Nếu
                  bạn là iFan chân chính thì chắc chắn không nên bỏ qua phần
                  này.
                </p>
                <h4>3.1. iPhone 16 series</h4>
                <p>
                  Ngày 9 tháng 9 năm 2024, dòng iPhone 16 chính thức được ra mắt
                  tại sự kiện "It's Glowtime". Vào ngày 27/9, các model của dòng
                  thiết bị đã chính thức được mở bán tại thị trường Việt Nam.
                  Các đặc điểm nổi bật:
                </p>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}>
                  <li>
                    <strong>Apple Intelligence:</strong> Được xây dựng để mang
                    đến những trải nghiệm cá nhân, riêng tư và mạnh mẽ.
                  </li>
                  <li>
                    <strong>Chip A18:</strong> Mang lại sự đột phá lớn về hiệu
                    suất và hiệu quả.
                  </li>
                  <li>
                    <strong>Màu sắc tươi sáng mới:</strong> Có các màu mới là
                    Xanh lưu ly, Xanh mòng két và Titan Sa mạc.
                  </li>
                </ul>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_8.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.2. iPhone 15 series</h3>
                <p>
                  Năm 2023 đánh dấu sự ra đời của dòng iPhone 15, siêu phẩm
                  Flagship của nhà Apple. Với thiết kế có nhiều thay đổi đồng
                  nhất, sang trọng, cùng với chất lượng màn hình tiên tiến và
                  nâng cấp vượt trội về mặt hiệu năng.{" "}
                </p>
                <h3>3.3. iPhone 14 series</h3>
                <p>
                  Vào lúc 0h ngày 8/9/2022 Bộ tứ điện thoại iPhone 14, 14 Plus,
                  14 Pro, 14 Pro Max đã được thông báo tại sự kiện Apple live
                  tream. iPhone 14 series đã thực sự tạo nên cơn sốt cho các
                  iFan vào thời điểm đó.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_9.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>
                  iPhone 14 series "mới ra lò" với những nâng cấp hấp dẫn:
                </h3>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}>
                  <li>
                    <strong>Trang bị màn hình viên thuốc hoàn toàn mới:</strong>{" "}
                    Mang đến trải nghiệm tuyệt vời.
                  </li>
                  <li>
                    <strong>Chip Apple A16 Bionic:</strong> iPhone 14 Pro, 14
                    Pro Max đạt hiệu năng mạnh mẽ và đỉnh cao.
                  </li>
                  <li>
                    <strong>Hệ thống camera nâng cấp vượt trội:</strong> Cảm
                    biến 48MP sắc nét.
                  </li>
                  <li>
                    <strong>Sự đa dạng màu sắc:</strong> Các phiên bản màu mới
                    mẻ và độc đáo.
                  </li>
                  <li>
                    <strong>Màn hình luôn sáng (Always-on-Display):</strong> Tạo
                    điểm nhấn độc đáo cho iPhone Pro, Pro Max.
                  </li>
                </ul>
                <h3>3.4. iPhone 13 series</h3>
                <p>
                  iPhone 13 series hiện taị vẫn là dòng sản phẩm được săn lùng
                  nhiều nhất, không thua kém iPhone 14 series là bao. Không chỉ
                  phiên bản iPhone 13 Pro Max cao cấp mà các phiên bản thấp hơn
                  như iPhone 13 Pro, iPhone 13 hoặc kể cả điện thoại iPhone 13
                  Mini cũng nhận được nhiều sự quan tâm.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_10.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Mang trong mình con chip Apple A15 Bionic có hiệu năng khủng,
                  các thiết bị có tốc độ xử lý cực cao. Vì thế, chúng giúp bạn
                  có những trải nghiệm tuyệt vời không chỉ là với những ứng dụng
                  giải trí mà kể cả các tựa game đồ họa nặng cũng có thể chạy
                  một cách mượt mà. Ngoài ra, các thiết bị cũng được nâng cấp từ
                  chất lượng hiển thị cho đến camera và nhiều tính năng khác so
                  với thế hệ trước đó.
                </p>
                <h3>3.5. iPhone 12 series</h3>
                <p>
                  Hiện nay nhiều khách hàng vẫn tìm đến chiếc điện thoại iPhone
                  12 Series gồm: iPhone 12, 12 mini, 12 Pro và 12 Pro Max. Sở
                  hữu con chip Apple A14 Bionic khá mạnh mẽ, các thiết bị đáp
                  ứng được hầu hết nhu cầu cần thiết.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_11.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Bên cạnh đó, máy còn có thiết kế khá đẹp mắt khi kể từ thế hệ
                  điện thoại iPhone 12. Apple đã mang phong cách thiết kế các
                  cạnh viền vuông vức quay trở lại. Điều này giúp tạo nên sự
                  sang trọng trong từng đường nét.
                </p>
                <h3>3.6. iPhone 11 series</h3>
                <p>
                  Ra mắt vào năm 2019, đến nay chiếc điện thoại iPhone 11 vẫn
                  còn được nhắc đến nhiều và được tìm mua tại các cửa hiệu di
                  động. Dòng điện thoại iPhone 11 bao gồm 3 phiên bản iPhone 11,
                  iPhone 11 Pro và iPhone 11 Pro Max với độ cao cấp tăng dần
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_12.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Bên trong điện thoại iPhone 11 là “quả tim” Apple A13 Bionic
                  với hiệu năng khá mạnh, vẫn còn đáp ứng tốt người dùng. Máy
                  vẫn có thể chạy các ứng dụng một các mượt mà nhất. Bên cạnh
                  đó, từ thế hệ iPhone 11 Pro,Apple đã tích hợp cụm 3 camera lần
                  đầu tiên lên các phiên bản cao cấp của hãng. Điểm này mang đến
                  trải nghiệm vượt bậc. Không chỉ có camera chính mà camera góc
                  rộng cũng như camera tele đều hỗ trợ tối đa cho việc quay chụp
                  của người dùng.
                </p>
                <h3>3.7. iPhone Xs, Xs Max, Xr</h3>
                <p>
                  Hiện nay thì ta bắt đầu hiếm gặp các mẫu điện thoại iPhone Xs
                  hay iPhone Xs Max, Xr hàng chính hãng VN/A. Tuy nhiên, loại
                  hàng này vẫn còn có mặt trên thị trường.{" "}
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_13.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Với hiệu năng mạnh mẽ từ con chip Apple A12 Bionic gồm 6 nhân,
                  máy vẫn chạy tốt và đáp ứng các tác vụ từ người dùng. Một
                  chiếc điện thoại cũ đã ra mắt được vài năm như điện thoại
                  iPhone Xs/iPhone Xs Max/iPhone Xr vẫn bỏ xa nhiều đối thủ cùng
                  phân khúc.
                </p>
                <h3>3.8. iPhone X</h3>
                <p>
                  Ra mắt vào tháng 9 năm 2017, điện thoại iPhone X đánh dấu một
                  kỷ nguyên mới với thiết kế không viền và màn hình Super Retina
                  OLED ấn tượng. Với công nghệ nhận diện khuôn mặt Face ID, điện
                  thoại mang đến sự bảo mật tiên tiến và trải nghiệm người dùng
                  vượt trội.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_14.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Con chip A11 Bionic mạnh mẽ và tính năng sạc không dây cũng là
                  những điểm nổi bật. Chúng giúp điện thoại iPhone X trở thành
                  biểu tượng của sự đổi mới và đẳng cấp.
                </p>
                <h3>3.9. iPhone 8 series</h3>
                <p>
                  iPhone 8 series ra mắt vào tháng 9 năm 2017, mang đến sự kết
                  hợp hoàn hảo giữa thiết kế truyền thống và công nghệ tiên
                  tiến. Các thiết bị có mặt lưng bằng kính hỗ trợ sạc không dây,
                  con chip A11 Bionic mạnh mẽ và khả năng chụp ảnh chân thực với
                  camera 12MP. Dòng smartphone đã đặt ra tiêu chuẩn mới cho dòng
                  điện thoại thông minh.
                </p>
                <p>
                  Công nghệ True Tone tự động điều chỉnh ánh sáng màn hình và
                  khả năng quay video 4K cũng là những điểm nhấn. Nó làm cho
                  dòng điện thoại iPhone 8 trở thành lựa chọn hấp dẫn cho người
                  dùng yêu thích sự kết hợp giữa hiệu năng và tiện ích.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_15.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.10. iPhone 7 Series</h3>
                <p>
                  Ra mắt vào tháng 9 năm 2016, dòng điện thoại iPhone 7 đã ghi
                  dấu ấn với thiết kế chống nước và chống bụi chuẩn IP67. Với sự
                  xuất hiện của nút Home cảm ứng lực và bỏ đi jack cắm tai nghe,
                  dòng máy mở ra một trang mới trong thiết kế điện thoại thông
                  minh.
                </p>
                <p>
                  Chip A10 Fusion mạnh mẽ, hệ thống camera cải tiến với ống kính
                  kép trên điện thoại iPhone 7 Plus và loa stereo đã nâng cao
                  trải nghiệm người dùng lên một tầm cao mới. Dòng sản phẩm này
                  còn được đánh giá cao nhờ hiệu suất vượt trội và độ bền cao.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_16.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.11. iPhone SE (2016)</h3>
                <p>
                  Điện thoại iPhone SE (2016) ra mắt vào tháng 3 năm 2016. Đây
                  là phiên bản kết hợp giữa hiệu suất mạnh mẽ và thiết kế nhỏ
                  gọn. Với con chip A9 giống như iPhone 6s, iPhone SE cung cấp
                  sức mạnh đáng kinh ngạc trong kích thước vừa vặn trong lòng
                  bàn tay.
                </p>
                <p>
                  Camera 12MP cho phép chụp ảnh chất lượng cao và quay video 4K
                  còn thời lượng pin được cải thiện giúp máy hoạt động bền bỉ
                  suốt ngày. Sở hữu thiết kế cổ điển nhưng không kém phần thời
                  thượng, sản phẩm nhanh chóng trở thành lựa chọn yêu thích của
                  những người dùng.
                </p>
                <h3>3.12. iPhone 6s series</h3>
                <p>
                  Dòng điện thoại iPhone 6sra mắt vào tháng 9 năm 2015. Dòng sản
                  phẩm đã mang đến một làn gió mới với nhiều cải tiến đáng chú
                  ý. Điểm nổi bật của dòng này là công nghệ cảm ứng lực 3D
                  Touch, cho phép người dùng thực hiện các thao tác nhanh chóng
                  và trực quan hơn.
                </p>
                <p>
                  Chip A9 mạnh mẽ cùng camera 12MP có khả năng quay video 4K đã
                  giúp iPhone 6s series mang lại hiệu suất vượt trội và khả năng
                  chụp ảnh, quay phim chất lượng cao. Với thiết kế kim loại
                  nguyên khối cùng màu sắc mới như Rose Gold, các model tiếp tục
                  khẳng định vị thế của Apple trong làng công nghệ.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_17.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.13. iPhone 6 series</h3>
                <p>
                  Dòng điện thoại iPhone 6 được giới thiệu vào tháng 9 năm 2014.
                  Chúng đã tạo nên cơn sốt với thiết kế mỏng hơn, màn hình lớn
                  hơn và các tính năng đột phá. Điểm nhấn của dòng này là màn
                  hình Retina HD với kích thước 4.7 inch và 5.5 inch (bản Plus),
                  mang đến trải nghiệm hình ảnh sống động hơn.
                </p>
                <p>
                  Chip A8 mạnh mẽ và hiệu năng cao, kết hợp với camera cải tiến
                  8MP, giúp iPhone 6 series trở thành lựa chọn hoàn hảo cho
                  người dùng yêu công nghệ. Sự xuất hiện của Apple Pay cũng là
                  một bước tiến lớn, đưa thanh toán di động lên một tầm cao mới.
                </p>
                <h3>3.14. iPhone 5C, 5s</h3>
                <p>
                  Ra mắt vào tháng 9 năm 2013, cặp đôi điện thoại iPhone 5C và
                  5s đã mang đến làn gió mới cho thị trường di động. iPhone 5C
                  sở hữu vỏ nhựa nhiều màu sắc tươi sáng đã phá vỡ quy chuẩn
                  thiết kế truyền thống của Apple, mang đến sự lựa chọn đa dạng
                  và trẻ trung cho người dùng.
                </p>
                <p>
                  Điện thoại iPhone 5s có thiết kế kim loại sang trọng, giới
                  thiệu cảm biến vân tay Touch ID. Đây là một bước đột phá trong
                  bảo mật di động. Cả hai mẫu đều được trang bị chip A7 mạnh mẽ,
                  giúp cải thiện hiệu suất đáng kể so với trước và hỗ trợ hệ
                  điều hành iOS 7 tiên tiến.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_18.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.15. iPhone 5</h3>
                <p>
                  Điện thoại iPhone 5 ra mắt vào tháng 9 năm 2012 và đã ghi dấu
                  ấn với thiết kế mỏng hơn, nhẹ hơn, màn hình lớn hơn 4 inch.
                  Chip A6 mạnh mẽ giúp tăng cường hiệu suất và tiết kiệm năng
                  lượng.
                </p>
                <p>
                  Camera 8MP được cải tiến, cung cấp khả năng chụp ảnh và quay
                  video chất lượng cao. Kết nối Lightning mới thay thế cổng
                  truyền thống, mang lại tốc độ truyền tải nhanh hơn. Ngoài ra,
                  dòng máy cũng hỗ trợ LTE, cho phép kết nối mạng nhanh hơn và
                  mạnh mẽ hơn.
                </p>
                <h3>3.16. iPhone 4s</h3>
                <p>
                  Điện thoại iPhone 4s ra mắt vào tháng 10 năm 2011, đánh dấu
                  một bước tiến lớn với Siri, trợ lý ảo thông minh đầu tiên của
                  Apple. Điện thoại được trang bị chip A5 mạnh mẽ, camera 8MP
                  cải tiến với khả năng quay video 1080p, mang lại hiệu suất và
                  chất lượng hình ảnh vượt trội.
                </p>
                <p>
                  Thiết kế vẫn giữ nguyên vẻ đẹp nguyên khối của điện thoại
                  iPhone 4. Tuy nhiên, với các tính năng nâng cấp, iPhone 4s
                  nhanh chóng trở thành một trong những mẫu điện thoại được ưa
                  chuộng nhất.
                </p>
                <h3>3.17. iPhone 4</h3>
                <p>
                  Điện thoại iPhone 4 được giới thiệu vào tháng 6 năm 2010. Đây
                  là một bước cách mạng về thiết kế với khung kim loại và mặt
                  kính trước sau. Điểm nhấn lớn nhất là màn hình Retina, mang
                  lại độ phân giải cao và hình ảnh sắc nét chưa từng có.
                </p>
                <p>
                  Chip A4 mạnh mẽ và camera 5MP có khả năng quay video HD đã
                  nâng cao trải nghiệm người dùng. Với FaceTime, cuộc gọi video
                  trở nên dễ dàng hơn bao giờ hết. Điện thoại iPhone 4 không chỉ
                  là một thiết bị mà là một bước tiến trong thế giới công nghệ
                  di động lúc bấy giờ.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_19.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>3.18. iPhone 3GS</h3>
                <p>
                  Điện thoại iPhone 3GS ra mắt vào tháng 6 năm 2009, đánh dấu
                  bước phát triển lớn với hiệu năng cải thiện và khả năng đồ họa
                  vượt trội. Chip xử lý nhanh hơn gấp đôi, camera 3MP với khả
                  năng quay video và tính năng điều khiển bằng giọng nói là
                  những điểm nổi bật của thiết bị.
                </p>
                <p>
                  iPhone 3GS cũng đã cho ra mắt tính năng cắt, sao chép và dán.
                  Đi kèm với đó là khả năng tải về nhanh hơn với kết nối 3G cải
                  tiến. Chúng giúp mang đến trải nghiệm người dùng mượt mà và
                  tiện lợi hơn.
                </p>
                <h3>3.19. iPhone 3G</h3>
                <p>
                  Điện thoại iPhone 3G được giới thiệu vào tháng 7 năm 2008. Sản
                  phẩm đã mang lại bước đột phá với tốc độ kết nối mạng 3G nhanh
                  hơn và khả năng định vị GPS tích hợp.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_20.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Thiết kế mới với mặt lưng bằng nhựa sáng bóng, cùng với sự ra
                  mắt của App Store, mở ra kỷ nguyên mới cho các ứng dụng di
                  động. Với hiệu năng được cải thiện và khả năng truy cập dữ
                  liệu nhanh hơn, điện thoại iPhone 3G thực sự là một cú hích
                  mạnh mẽ trong thế giới công nghệ di động.
                </p>
                <h3>3.20. iPhone 2G</h3>
                <p>
                  Ra mắt vào tháng 6 năm 2007, điện thoại iPhone 2G là khởi đầu
                  của cuộc cách mạng di động. Với thiết kế đột phá và màn hình
                  cảm ứng hoàn toàn, thiết bị đã làm thay đổi cách chúng ta
                  tương tác với điện thoại.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_21.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Hệ điều hành iOS đầu tiên và tính năng đa chạm mang đến trải
                  nghiệm người dùng chưa từng có. Bên cạnh đó, kết nối EDGE và
                  ứng dụng Safari giúp truy cập internet trở nên dễ dàng hơn.
                </p>
                <h3>4. Tại sao nên sử dụng điện thoại iPhone?</h3>
                <p>
                  Cùng điểm qua hàng loạt các lý do vì sao điện thoại iPhone lại
                  trở thành chiếc điện thoại quốc dân mà nhà nhà người người đều
                  mê ở ngay dưới đây:
                </p>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}>
                  <li>
                    <strong>Hiệu suất mạnh mẽ:</strong> Với mỗi thế hệ, điện
                    thoại iPhone được trang bị các con chip tiên tiến như
                    A-series, mang lại hiệu năng vượt trội và khả năng xử lý đồ
                    họa xuất sắc. Điều này đảm bảo mọi tác vụ từ công việc đến
                    giải trí đều diễn ra mượt mà, nhanh chóng.
                  </li>
                  <li>
                    <strong>Hệ điều hành iOS:</strong> Hệ điều hành iOS được tối
                    ưu hóa tương thích với phần cứng, mang đến trải nghiệm người
                    dùng ổn định và an toàn. iOS đem lại nhiều tính năng độc
                    quyền và cập nhật thường xuyên, giúp bảo vệ dữ liệu cá nhân
                    và duy trì hiệu suất tốt.
                  </li>
                  <li>
                    <strong>Thiết kế đẳng cấp:</strong> iPhone luôn nổi bật với
                    thiết kế sang trọng, tinh tế và chất liệu cao cấp. Mỗi phiên
                    bản đều có những cải tiến đáng kể về thiết kế, từ màn hình
                    Retina sắc nét đến khung kim loại chắc chắn.
                  </li>
                  <li>
                    <strong>Chất lượng camera:</strong> Điện thoại iPhone nổi
                    tiếng với hệ thống camera chất lượng cao, cho phép chụp ảnh
                    và quay video sắc nét, chân thực. Các tính năng như chụp
                    đêm, chân dung và quay phim 4K giúp người dùng tạo ra những
                    tác phẩm nghệ thuật.
                  </li>
                  <li>
                    <strong>Hệ sinh thái Apple:</strong> Khi sở hữu điện thoại
                    iPhone, bạn có thể dễ dàng kết nối và sử dụng các sản phẩm
                    khác của Apple như MacBook, iPad, Apple Watch và AirPods. Hệ
                    sinh thái này mang lại sự tiện lợi, đồng bộ và trải nghiệm
                    người dùng liền mạch.
                  </li>
                  <li>
                    <strong>Bảo mật và quyền riêng tư:</strong> Apple luôn đặt
                    bảo mật và quyền riêng tư của người dùng lên hàng đầu. Các
                    tính năng như Face ID, Touch ID và mã hóa dữ liệu giúp bảo
                    vệ thông tin cá nhân một cách tối ưu.
                  </li>
                  <li>
                    <strong>Ứng dụng và dịch vụ đa dạng:</strong> App Store cung
                    cấp hàng triệu ứng dụng chất lượng cao, từ giải trí, học tập
                    đến công việc. Ngoài ra, các dịch vụ như Apple Music, Apple
                    TV+ và iCloud giúp nâng cao trải nghiệm người dùng.
                  </li>
                  <li>
                    <strong>Giá trị lâu dài:</strong> Điện thoại iPhone nổi
                    tiếng với độ bền cao và khả năng giữ giá tốt sau thời gian
                    dài sử dụng. Điều này khiến nó trở thành sự đầu tư thông
                    minh cho những ai muốn sở hữu một thiết bị bền vững.
                  </li>
                </ul>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_22.png"
                  alt=""
                  className="iphone-image"
                />
                <h3>
                  5. Mua điện thoại iPhone mới chính hãng, đến Di Động Việt
                </h3>
                <p>
                  Để sở hữu chiếc iPhone mới chính hãng, hãy đến Di Động Việt.
                  Tại đây, chúng tôi cam kết "CHUYỂN GIAO GIÁ TRỊ VƯỢT TRỘI" và
                  đem lại cho bạn những trải nghiệm mua sắm hoàn hảo. Đặc biệt
                  là đừng quên câu nói: “Mua sản phẩm, chọn sản phẩm. Mua ở đâu,
                  chọn Di Động Việt”.
                </p>
                <h4>5.1. Khách hàng nhận được gì khi lựa chọn Di Động Việt</h4>
                <p>
                  Sản phẩm vượt trội: Tại Di Động Việt, bạn sẽ tìm thấy những
                  sản phẩm công nghệ Apple hàng đầu, đảm bảo chính hãng và chất
                  lượng cao. Đây là một Đại lý Ủy quyền chính thức của Apple tại
                  Việt Nam (AAR) thì độ uy tín không cần bàn cãi nhiều.
                </p>
                <p>
                  Quyền lợi vượt trội: Khi mua sắm tại Di Động Việt, bạn sẽ được
                  hưởng các chính sách bảo hành, đổi trả và hỗ trợ kỹ thuật tốt
                  nhất. Những chương trình khuyến mãi và ưu đãi hấp dẫn luôn chờ
                  đón bạn, giúp bạn tiết kiệm tối đa chi phí khi chọn mua.
                </p>
                <p>
                  Trải nghiệm vượt trội: Di Động Việt mang đến cho bạn một môi
                  trường mua sắm hiện đại, thân thiện và tiện nghi. Đội ngũ nhân
                  viên chuyên nghiệp, tận tâm sẽ luôn sẵn sàng hỗ trợ và tư vấn,
                  đảm bảo bạn có trải nghiệm mua sắm tuyệt vời.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_23.png"
                  alt=""
                  className="iphone-image"
                />
                <h4>5.2. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h4>
                <p>
                  Nếu bạn cần biết thêm thông tin về dòng điện thoại iPhone hoặc
                  các điện thoại khác, hãy liên hệ với cửa hàng qua các kênh
                  sau:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    <strong>Hotline Kỹ thuật, mua hàng:</strong> 1800.6018
                  </li>
                  <li>
                    <strong>Hotline Bảo hành:</strong> 1800.6729
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
                <h3>
                  6. Những đánh giá và nhận xét của khách hàng khi mua điện
                  thoại iPhone tại Di Động Việt
                </h3>
                <p>
                  Chị Nguyễn Minh Anh - Hà Nội: "Mua chiếc iPhone 14 tại Di Động
                  Việt là một trải nghiệm tuyệt vời. Nhân viên nhiệt tình, tư
                  vấn rất chi tiết giúp mình chọn được sản phẩm ưng ý nhất. Chưa
                  kể đến các chương trình khuyến mãi cực hấp dẫn, tiết kiệm được
                  không ít chi phí. Chắc chắn sẽ quay lại đây mua sắm."
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_24.png"
                  alt=""
                  className="iphone-image"
                />
                <p>
                  Anh Lê Hoàng Phong - TP. Hồ Chí Minh: "Di Động Việt thực sự là
                  lựa chọn hoàn hảo khi mình cần mua iPhone mới. Sản phẩm chính
                  hãng, bảo hành đầy đủ nên mình rất yên tâm. Đội ngũ nhân viên
                  thân thiện, không gian cửa hàng thoải mái, đúng với tiêu chí
                  'Chuyển giao giá trị vượt trội'. Rất hài lòng và sẽ giới thiệu
                  cho bạn bè."
                </p>
                <img
                  src="src/assets/images/Info_description_product/Apple_Info_description/Apple_25.png"
                  alt=""
                  className="iphone-image"
                />
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
export default Iphone_information_product;
