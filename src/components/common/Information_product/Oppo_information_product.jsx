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
          <div className="Oppo-info-container">
            <p>
              Điện thoại OPPO là một trong những thương hiệu smartphone quen
              thuộc tại Việt Nam. Với thiết kế đẹp mắt, camera sắc nét và hiệu
              năng mạnh mẽ, dòng sran phẩm luôn mang đến trải nghiệm tuyệt vời
              cho người dùng. Chính điều này đã giúp thương hiệu điện thoại
              không thua kém bất kỳ đối thủ nào trên thị trường, đặc biệt là
              trong phân khúc tầm trung - giá rẻ.
            </p>
            {isExpanded && (
              <>
                <h3>1. Thông tin chung về điện thoại OPPO</h3>
                <p>
                  OPPO do Duan Yongping sáng lập (người sáng lập và là chủ tịch
                  của BBK Electronics) cùng với CEO Tony Chen vào năm 2003. Với
                  trụ sở tại thành phố Đông Hoản, tỉnh Quảng Đông, Trung Quốc,
                  OPPO đã nhanh chóng phát triển thành một thương hiệu quốc tế.
                  Đến năm 2013, thương hiệu điện tử công nghệ này chính thức có
                  mặt tại thị trường Việt Nam.
                </p>
                <p>
                  Với vị trí top 5 nhà sản xuất điện thoại hàng đầu toàn cầu và
                  thị phần đạt 8,1% vào đầu năm 2019, OPPO chắc chắn đã tạo nên
                  một ấn tượng mạnh mẽ trong lĩnh vực. Tại Việt Nam, thị phần
                  của điện thoại OPPO tăng lên đến25,2% vào cuối năm 2019. Điều
                  đó giúp hãng vững vàng ở vị trí thứ 2 trong danh sách các nhà
                  sản xuất điện thoại di động hàng đầu.
                </p>
                <p>
                  Sản phẩm chủ lực của thương hiệu tập trung vào điện thoại
                  thông minh trong phân khúc tầm trung và cận cao cấp.. Một số
                  dòng điện thoại OPPO chính hãng đặc trưng là OPPO Reno, OPPO
                  Find và OPPO A. Chúng đều đã và đang tiếp tục khẳng định vị
                  thế và uy tín của OPPO trên toàn cầu.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_1.png"
                  alt=""
                />
                <h3>2. Những điểm đặc trưng nổi bật của điện thoại OPPO</h3>
                <p>
                  Những chiếc điện thoại OPPO ra mắt trên thị trường đều nhanh
                  chóng thu hút được sự quan tâm của cộng đồng công nghệ. Điều
                  này cho thấy hãng không ngừng nâng cấp, cải tiến và hoàn thiện
                  thiết bị của hãng tốt hơn, hướng đến đáp ứng nhu cầu của người
                  dùng hiện đại.
                </p>
                <h3>2.1. Thiết kế</h3>
                <p>
                  Thương hiệu này không ngừng theo đuổi xu hướng thiết kế trẻ
                  trung, thời thượng, dẫn đầu xu thế và hướng đến một thế hệ
                  người dùng năng động. Đặc điểm nổi bật trong phong cách thiết
                  kế này chính là sự xuất hiện của OPPO Glow. Mặt lưng của mỗi
                  chiếc smartphone là sự kết hợp tinh tế của sắc màu để tạo ra
                  hiệu ứng chuyển màu ấn tượng, góp phần tạo ra ngoài độc đáo và
                  cuốn hút.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_2.png"
                  alt=""
                />
                <p>
                  Đồng thời hãng cũng luôn tiên phong hướng tới các xu hướng
                  công nghệ mới nhằm đảm bảo rằng người dùng luôn sở hữu những
                  thiết bị hiện đại nhất. Điển hình trong đó là thiết kế cạnh
                  vuông tinh tế, trọng lượng nhẹ, sự đa dạng về các phiên bản
                  màu sắc và màn hình cong tràn viền. Tất cả điều này nhằm đóng
                  góp vào việc tạo ra trải nghiệm tối ưu nhất cho người dùng.
                </p>
                <h3>2.2. Màn hình</h3>
                <p>
                  Tùy mục đích hướng đến mà mỗi chiếc điện thoại OPPO sở hữu màn
                  hình với kích thước khác nhau. Từ những chiếc máy nhỏ gọn với
                  không gian hiển thị 6.5 inch đến kích thước lớn lên đến 6.74
                  inch. Điểm mạnh của những sản phẩm này là thương hiệu luôn
                  tinh chỉnh độ phân giải phù hợp nhằm giúp mọi nội dung đều
                  được hiển thị rõ nét.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_3.png"
                  alt=""
                />
                <h3>2.3. Hiệu năng ổn định, mượt mà</h3>
                <p>
                  Điện thoại OPPO thường được trang bị chip xử lý của Mediatek
                  và Qualcomm. Những con chip này trải dài khắp các phân khúc,
                  mang đến hiệu năng ổn định và mượt mà cho dòng sản phẩm.{" "}
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_4.png"
                  alt=""
                />
                <p>
                  Các thiết bị này hoàn toàn đủ sức để đáp ứng nhu cầu học tập,
                  làm việc và thậm chí chơi những tựa game có đòi hỏi phần cứng
                  cao. Điều này không chỉ đảm bảo trải nghiệm người dùng liền
                  mạch mà còn đáp ứng được nhu cầu giải trí đa dạng như: lướt
                  web, xem phim, chơi game,...
                </p>
                <h3>2.4. Camera</h3>
                <p>
                  Khi nói về thương hiệu này, không thể bỏ qua khả năng chụp ảnh
                  của dòng sản phẩm này, đặc biệt là khi chụp chân dung. Các
                  dòng điện thoại OPPO về sau nay vẫn kế thừa thành công danh
                  hiệu "Chuyên gia selfie" từ những ngày đầu bước chân vào thị
                  trường. Điều này mang đến cho người dùng trải nghiệm chụp ảnh
                  liền mạch trên cả camera trước và sau.
                </p>
                <p>
                  Hãng đã giới thiệu dòng smartphone Reno với thế mạnh là chụp
                  chân dung chuyên nghiệp. Với quyết tâm không ngừng nghỉ, hãng
                  đã phát triển qua nhiều thế hệ Chuyên gia chân dung.
                </p>
                <p>
                  Trong đó, mỗi thế hệ đều mang đến những cải tiến mới, liên tục
                  được hoàn thiện hệ thống camera chân dung hàng đầu trên thị
                  trường. Các tính năng chụp chân dung nổi bật trên dòng Reno
                  bao gồm chụp chân dung xóa phông Bokeh Flare, chụp chân dung
                  màu AI,...
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_5.png"
                  alt=""
                />
                <p>
                  Camera của điện thoại OPPO luôn tập trung vào cải thiện hiệu
                  suất AI. hỗ trợ làm đẹp tự nhiên. Nó giúp đảm bảo rằng người
                  dùng sẽ có những bức ảnh rạng rỡ, màu da tươi sáng, cân đối
                  chi tiết tốt nhất, ghi lại mọi khoảnh khắc đẹp. Nhờ tất cả
                  những cải tiến này, bạn có thể tự tin chụp selfie mọi lúc, mọi
                  nơi mà không cần dùng đến các ứng dụng làm đẹp.
                </p>
                <p>
                  Đặc biệt, thương hiệu đã hợp tác với Hasselblad khi ra mắt
                  dòng sản phẩm điện thoại gập Find N. Điều này được xem là một
                  bước tiến mạnh mẽ giúp điện thoại OPPO trở thành tâm điểm với
                  công nghệ camera tiên tiến.
                </p>
                <h3>2.5. Thời lượng pin</h3>
                <p>
                  Hãng này nổi danh nhờ khả năng tối ưu hóa thời gian sạc cho
                  người dùng bằng công nghệ sạc nhanh tiên tiến. Hầu hết các mẫu
                  điện thoại OPPO đều hỗ trợ công nghệ sạc nhanh SuperVOOC, giúp
                  rút ngắn thời gian cần thiết để sạc đầy năng lượng cho thiết
                  bị.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_6.png"
                  alt=""
                />
                <p>
                  Thông số sạc nhanh mà bạn thường thấy trên các mẫu điện thoại
                  OPPO bao gồm 33W, 67W, 80W. Công nghệ này không chỉ giúp người
                  dùng nhanh chóng nạp đầy năng lượng cho thiết bị mà còn đảm
                  bảo rằng có thể sử dụng thiết bị mà không cần lo lắng.
                </p>
                <h3>2.6. Hệ điều hành</h3>
                <p>
                  ColorOS là giao diện người dùng dựa trên hệ điều hành Android
                  của OPPO. Nó được đánh giá là một trong những giao diện mượt
                  mà và dễ sử dụng nhất. Điện thoại OPPO cũng không ngừng nâng
                  cấp, tinh chỉnh ColorOS tốt hơn, đảm bảo sự ổn định và khả
                  năng hoạt động bền bỉ qua thời gian.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_7.png"
                  alt=""
                />
                <h3>3. Các dòng điện thoại OPPO hiện có trên thị trường</h3>
                <p>
                  OPPO luôn mong muốn đáp ứng nhu cầu trải nghiệm của mọi đối
                  tượng người dùng. Đó là lý do thương hiệu Trung Quốc này mang
                  đến đa dạng các sản phẩm thuộc các phân khúc giá khác nhau.
                  Nhờ vậy, người dùng có thể dễ dàng tìm kiếm sản phẩm phù hợp
                  nhất với bản thân.
                </p>
                <h3>3.1. OPPO A Series</h3>
                <p>
                  OPPO ra mắt dòng OPPO A nằm trong phân khúc giá rẻ, bình dân
                  cho đến tầm trung nhưng vẫn đảm bảo cấu hình ổn định. Chiến
                  lược này là để cung cấp đầy đủ các tính năng cần thiết của một
                  chiếc smartphone.
                </p>
                <p>
                  Do đó, điện thoại OPPO A đã trở thành một trong những lựa chọn
                  hàng đầu cho giới trẻ hiện nay. Những mẫu máy này thường sở
                  hữu ngoại hình thời thượng, màu sắc đa dạng và giá cả phải
                  chăng. Qua đó, sản phẩm dễ dàng thu hút được rất nhiều khách
                  hàng trên thị trường.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_8.png"
                  alt=""
                />
                <p>
                  OPPO A Series là sự kết hợp hoàn hảo giữa thiết kế đẹp mắt,
                  tính năng hiện đại và giá cả phải chăng. Điều này đúng với cam
                  kết của OPPO rằng họ sẽ mang đến cho khách hàng những sản phẩm
                  chất lượng và độc đáo nhất trên thị trường.
                </p>
                <p>
                  Nhìn chung, ngay cả với điện thoại OPPO giá rẻ, người dùng vẫn
                  có thể tận hưởng trọn vẹn các trò chơi, xem phim online, lướt
                  web một cách thoải mái. Bất kỳ tình trạng giật, lag khó chịu
                  đều không diễn ra trong lúc trải nghiệm.
                </p>
                <p>
                  Một số gợi ý mới của dòng điện thoại OPPO A Series như: OPPO
                  A78, OPPO A58, OPPO A18,...
                </p>
                <h3>3.2. OPPO Reno Series</h3>
                <p>
                  Có thể nói dòng OPPO Reno không còn là cái tên quá xa lạ đối
                  với những người yêu công nghệ. Đây là dòng sản phẩm nằm trong
                  phân khúc tầm trung và cận cao cấp của điện thoại OPPO. Điểm
                  mạnh của các thiết bị này là tích hợp những công nghệ cao cấp,
                  hiện đại và được cải tiến mạnh mẽ về cấu hình và tính năng.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_9.png"
                  alt=""
                />
                <p>
                  Ngoài ra, các sản phẩm thuộc OPPO Reno Series đều có thiết kế
                  chắc chắn, bền bỉ cùng với màn hình to lớn. Mỗi máy được trang
                  bị một trong những bộ vi xử lý hàng đầu trong phân khúc giá
                  hiện nay. Vì thế, chúng có thể xử lý mượt và ổn định các tác
                  vụ từ cơ bản cho đến nâng cao cũng như nhu cầu chơi game, lướt
                  web, xem phim, nghe nhạc,...
                </p>
                <p>
                  Thiết kế của những chiếc Reno cũng không ngừng đổi mới với vẻ
                  đẹp đẳng cấp và thời trang. Mỗi thiết bị là sự kết hợp hoàn
                  hảo giữa công nghệ và thẩm mỹ, vừa hướng đến người yêu công
                  nghệ vừa làm hài lòng giới trẻ năng động. Đồng thời đây cũng
                  là trợ thủ đắc lực của mọi đối tượng trong phân khúc tầm
                  trung.
                </p>
                <p>
                  Một số gợi ý mới của dòng điện thoại OPPO Reno Series như:
                  OPPO Reno11 Series, OPPO Reno10,...
                </p>
                <h3>3.3. OPPO Find N Series</h3>
                <p>
                  OPPO chính thức gia nhập thị trường điện thoại gập với dòng
                  OPPO Find N từ cuối năm 2021. Với công nghệ màn hình gập đỉnh
                  cao và tính năng hiện đại, OPPO Find N Series đang trở thành
                  một đối thủ đáng gờm trong thị trường điện thoại gập nội địa
                  và quốc tế.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_10.png"
                  alt=""
                />
                <p>
                  Hai thiết kế quen thuộc của dòng điện thoại gập chính là gập
                  dọc và gập ngang. Ngay từ những sản phẩm đầu tiên, OPPO đã bắt
                  kịp nhu cầu sử dụng của người dùng với những chiếc smartphone
                  gập dọc nhỏ gọn, màn hình to. Nó sẽ giúp mọi người trực tiếp
                  thao tác các tính năng cơ bản trên màn hình ngoài.
                </p>
                <p>
                  Nhìn chung, OPPO Find N Series là sự lựa chọn lý tưởng trong
                  phân khúc cao cấp, thích hợp cho những người muốn trải nghiệm
                  hoặc yêu thích điện thoại gập. Mỗi thiết bị đều là lựa chọn
                  hấp dẫn dành cho những ai đam mê màn hình rộng nhưng vẫn muốn
                  máy nhỏ gọn để thuận tiện trong khi sử dụng và di chuyển.
                </p>
                <p>
                  Một số gợi ý mới của dòng điện thoại OPPO Find N Series: OPPO
                  Find N3 Series, OPPO Find N2 Series,...
                </p>
                <h3>3.4. OPPO Find X Series</h3>
                <p>
                  OPPO Find X Series là dòng flagship cao cấp. Từng chiếc
                  smartphone đều thể hiện sự đẳng cấp của người dùng. Dòng điện
                  thoại này được chế tạo từ những nguyên liệu bền bỉ và chất
                  lượng cao, đem lại sự hoàn hảo cho người sở hữu. Điển hình
                  trong đó phải kể đến bị những bộ vi xử lý mạnh nhất trong phân
                  khúc giá cho những chiếc máy này.
                </p>
                <p>
                  Ngoài ra, màn hình rộng lớn với chất lượng hiển thị cao cũng
                  mang lại giây phút giải trí tuyệt đỉnh. Hệ thống camera sau
                  với cảm biến hấp dẫn biến từng khoảnh khắc trong cuộc sống đều
                  trở thành tuyệt tác.
                </p>
                <p>
                  Nhìn chung, những chiếc điện thoại thuộc OPPO Find X Series
                  thật sự xứng đáng với mức giá cao của nó. Nếu bạn là một người
                  đam mê công nghệ, muốn trải nghiệm hiệu năng mạnh mẽ của dòng
                  smartphone cao cấp, Find X Series chắc chắn làm bạn hài lòng.{" "}
                </p>
                <p>
                  Các sản phẩm nổi bật trong dòng OPPO Find X bao gồm: OPPO Find
                  X7 Series, OPPO Find X6 Series,...
                </p>
                <h3>4. Lý do nên sở hữu điện thoại OPPO</h3>
                <p>
                  OPPO đã khẳng định tên tuổi của mình không chỉ qua các thiết
                  bị công nghệ đột phá có mức giá hợp lý mà còn qua chất lượng
                  và độ bền vững chắc. Hãng không ngừng nghiên cứu và phát triển
                  để nâng cao mức độ bền bỉ của sản phẩm nhằm đảm bảo rằng chúng
                  có thể chịu đựng được mọi loại tác động và áp lực.
                </p>
                <p>
                  Các sản phẩm mới nhất của OPPO A Series đều là minh chứng sống
                  cho sự cải tiến không ngừng nghỉ này. Thiết kế đổi mới với
                  khung và mặt lưng đều được làm bằng nhựa cứng, không chỉ giúp
                  máy chắc chắn mà còn bảo vệ tốt cho các linh kiện bên trong.
                </p>
                <p>
                  Hay như việc ra mắt dòng điện thoại OPPO Find N Series trong
                  phân khúc cao cấp. Chúng có những cải tiến về chất lượng bản
                  lề cũng như khả năng chụp ảnh vượt trội và dung lượng pin lớn.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_11.png"
                  alt=""
                />
                <p>
                  Bên cạnh việc chú trọng vào phần cứng, OPPO còn cải tiến mạnh
                  mẽ về phần mềm. Với RAM lên đến 16GB và bộ nhớ trong lên tới
                  1TB, người dùng không cần phải lo lắng về không gian lưu trữ
                  hạn chế hay tốc độ chậm chạp.
                </p>
                <p>
                  Nhìn chung, OPPO không ngừng cải thiện về nhiều mặt để tạo nên
                  một sản phẩm mà người dùng có thể tin cậy và sử dụng trong
                  thời gian dài. Đây là lời giải đáp hoàn hảo nhất của OPPO đến
                  những người dùng còn băn khoăn điện thoại OPPO dùng tốt không.
                </p>
                <h3>
                  5. Ưu và nhược điểm của OPPO so với các dòng điện thoại khác
                </h3>
                <p>
                  OPPO sở hữu thiết kế tinh tế và thời lượng pin dài lâu. Màn
                  hình rực rỡ và camera sắc nét làm hài lòng người dùng. Tuy
                  nhiên, một số dòng smartphone khác lại có hiệu suất mạnh hơn
                  và cập nhật phần mềm nhanh hơn. Vậy hãy cùng xem phần ưu và
                  nhược điểm của điện thoại OPPO so với các hãng khác sau đây.
                </p>
                <h3>5.1. So với Apple iPhone</h3>
                <p>
                  Điện thoại OPPO có giá cả phải chăng, phù hợp với người dùng
                  đang muốn tìm những thiết bị ngon bổ rẻ. Ngoài ra, thời lượng
                  pin ấn tượng và khả năng sạc nhanh của máy lluôn khiến bạn
                  luôn yên tâm. Tuy nhiên, hiệu suất và hệ sinh thái của nó lại
                  không mạnh mẽ như iPhone.
                </p>
                <p>
                  Apple iPhone thì sở hữu hiệu năng vượt trội và hệ điều hành
                  mượt mà. Các ứng dụng và phần mềm luôn được cập nhật nhanh
                  chóng. Tuy nhiên, giá thành của iPhone cao hơn nhiều so với
                  OPPO.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_12.png"
                  alt=""
                />
                <p>
                  Cả hai đều có điểm mạnh riêng. Bạn nên chọn máy tùy thuộc vào
                  nhu cầu cá nhân của mình. Bạn chọn OPPO nếu muốn tiết kiệm và
                  chỉ cần tính năng đủ dùng. Trong khi đó, hãy chọn iPhone nếu
                  chúng ta ưu tiên hiệu suất và hệ sinh thái đa dạng.
                </p>
                <h3>
                  5.2. So với các thương hiệu Android khác (Samsung, Xiaomi,...)
                </h3>
                <p>
                  Điện thoại OPPO có thiết kế sang trọng và giá cả hợp lý. Thời
                  lượng pin và sạc nhanh cũng là ưu điểm nổi bật của thương hiệu
                  này. Tuy nhiên, hiệu suất của chúng lại không mạnh bằng
                  Samsung.
                </p>
                <p>
                  Samsung luôn luôn dẫn đầu với công nghệ tiên tiến và hiệu năng
                  cao. Ngoài ra, màn hình và camera của họ cũng luôn được giới
                  công nghệ đánh giá cao và thuộc hàng top. Tuy nhiên, giá thành
                  của Samsung cao hơn OPPO.
                </p>
                <p>
                  Xiaomi thì lại nổi bật với giá rẻ và tính năng phong phú. Bên
                  cạnh đó, những dòng điện thoại của hãng cũng sở hữu hiệu suất
                  tốt và được cập nhật phần mềm nhanh. Ngược lại, thiết kế của
                  các thiết bị bị này lại không tinh tế và sang như OPPO.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_13.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_14.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_15.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_16.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_17.png"
                  alt=""
                />
                <h3>
                  6. Lý do nên mua điện thoại OPPO mới chính hãng tại Di Động
                  Việt
                </h3>
                <p>
                  Khi mua điện thoại OPPO tại Di Động Việt, khách hàng sẽ được
                  CHUYỂN GIAO GIÁ TRỊ VƯỢT TRỘI tại mọi điểm chạm. Do đó, đừng
                  quên "Mua sản phẩm, chọn sản phẩm. Mua ở đâu, chọn Di Động
                  Việt" nhé.
                </p>
                <h3>6.1. Khách hàng nhận được gì khi lựa chọn Di Động Việt </h3>
                <p>
                  Di Động Việt tự hào là điểm đến lý tưởng cho mỗi khách hàng
                  với lời cam kết SẢN PHẨM VƯỢT TRỘI. Chắc chắn từng sản phẩm
                  OPPO tại đây đều là hàng CHÍNH HÃNG, CHÍNH THỐNG 100%, được ủy
                  nhiệm CHÍNH DANH, CHÍNH THỨC bởi hãng điện thoại mà không phải
                  hàng xách tay trôi nổi trên thị trường.
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_18.png"
                  alt=""
                />
                <p>
                  Không những vậy, QUYỀN LỢI KHÁCH HÀNG là ưu tiên hàng đầu khi
                  mua sắm tại Di Động Việt. Bạn không chỉ nhận được những ưu đãi
                  từ hãng OPPO mà còn có thêm gói bảo hành mở rộng riêng biệt.
                  Những chính sách bán hàng đắt giá khác như dùng thử không mất
                  phí, chế độ đổi trả một đổi một, cùng với hình thức trả góp 0%
                  lãi suất cũng được áp dụng, đem lại sự thuận lợi tối ưu.
                </p>
                <p>
                  Và không thể không nhắc đến TRẢI NGHIỆM VƯỢT TRỘI khi mua sắm
                  tại Di Động Việt. Tại đây, đội ngũ nhân viên tại Di Động Việt
                  – những người luôn KIÊN NHẪN, TẬN TÂM VÀ TRÁCH NHIỆM sẽ hỗ trợ
                  bạn bất cứ lúc nào, không phân biệt dịch vụ ngoại tuyến hay
                  trực tuyến. Sự quan tâm khách hàng không chỉ dừng lại ở việc
                  mua và bán mà Di Động Việt còn đồng hành cùng quý khách trên
                  mỗi hành trình sử dụng sản phẩm.
                </p>
                <h3>6.2. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h3>
                <p>
                  Nếu bạn còn bất cứ điều gì thắc mắc hay cần được giải đáp điều
                  gì về điện thoại OPPO tại Di Động Việt, hãy liên hệ qua các
                  nguồn dưới đây:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    <strong>Hotline:</strong> 1800.6018 (Liên hệ Kỹ thuật hoặc
                    Mua ngay).
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
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_19.png"
                  alt=""
                />
                <h3>
                  7. Những đánh giá và nhận xét của khách hàng khi mua điện
                  thoại OPPO chính hãng tại Di Động Việt
                </h3>
                <p>
                  Anh Thọ tại Quận 1 - TP.HCM chia sẻ: “Đây là lần đầu tiên tôi
                  mua điện thoại tại Di Động Việt và cảm thấy rất hài lòng. Tôi
                  đã sử dụng điện thoại OPPO gần mười năm nên sau khi thấy dòng
                  Reno mới đã ra mắt ở Việt Nam, tôi quyết định đổi điện thoại
                  luôn. Tôi đã thử tìm hiểu các chính sách của các cửa hàng điện
                  thoại ở gần nhà và chọn Di Động Việt vì chương trình thu cũ
                  đổi mới khá hấp dẫn. Nhờ Di Động Việt mà tôi đã sở hữu một
                  chiếc máy mới chất lượng với giá rẻ hơn nhiều so mong đợi.”
                </p>
                <p>
                  Bạn Hồng - Sinh viên Kinh tế chia sẻ: “Khi mua điện thoại thì
                  mình quan tâm chất lượng máy lẫn trải nghiệm mua sắm, và Di
                  Động Việt đáp ứng tốt cả hai nhu cầu này của mình. Chiếc OPPO
                  mình vừa mua ở đây chạy mượt mà và tạm thời không có bất kỳ
                  vấn đề gì. Ngoài ra, mình đánh giá cao quy trình mua hàng
                  nhanh chóng và tiện lợi, mình cũng cực kỳ hài lòng với chính
                  sách bảo hành mà họ cung cấp. Sẽ luôn quay lại Di Động Việt
                  mỗi khi cần mua điện thoại mới!"
                </p>
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_20.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_21.png"
                  alt=""
                />
                <img
                  src="src/assets/images/Info_description_product/Oppo_Info_description/Oppo_22.png"
                  alt=""
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
export default Oppo_information_product;
