import { Button } from "antd";
import React, { useState } from "react";
import "./Information_product_all.css";

const Information_product_all = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return <> {category === "all" && (
    <>
      <div className="all-info-container">
        <div>
          <p>Trong thời đại hiện nay, điện thoại di động đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của con người. Từ những thiết bị chỉ có chức năng nghe gọi cơ bản, giờ đây, điện thoại di động đã phát triển thành những chiếc smartphone với vô số tính năng vượt trội, hỗ trợ cả công việc, học tập lẫn giải trí. </p>
          <h3>1. Thông tin chung về điện thoại di động</h3>
          <p className="all-info-container-p">Điện thoại di động là thiết bị điện tử cầm tay giúp người dùng thực hiện các cuộc gọi, gửi tin nhắn và kết nối với mạng internet. Không chỉ dừng lại ở chức năng cơ bản là nghe gọi, điện thoại di động ngày nay còn được trang bị nhiều tính năng tiên tiến như camera, hệ điều hành thông minh, các ứng dụng hỗ trợ công việc, giải trí và thậm chí là quản lý sức khỏe. Với sự phát triển không ngừng của công nghệ, <span class="highlight">điện thoại</span> đã trở thành một phần thiết yếu của cuộc sống con người.</p>
          <img src="/images/Info_description_product/All_Info_description/All_1.png" alt="" className={`all-info-container-img-chinh ${isExpanded ? "expanded" : ""}`} />
        </div>
        {isExpanded && (
          <>
            <h3>2. Quá trình phát triển của điện thoại</h3>
            <p>Điện thoại di động xuất hiện lần đầu vào năm 1973 khi kỹ sư Martin Cooper của Motorola thực hiện cuộc gọi bằng thiết bị không dây đầu tiên. Tuy nhiên, phải đến những năm 1990, điện thoại di động mới bắt đầu phổ biến và được sản xuất hàng loạt. Thời điểm đó, điện thoại chủ yếu phục vụ cho việc nghe gọi và gửi tin nhắn văn bản với thiết kế đơn giản, bàn phím vật lý và màn hình đen trắng.</p>
            <img src="/images/Info_description_product/All_Info_description/All_2.png" alt="" className="all-info-container-img" />
            <p>Từ giữa những năm 2000, điện thoại thông minh (smartphone) bắt đầu xuất hiện và nhanh chóng thay thế điện thoại phổ thông. Cột mốc quan trọng đánh dấu sự phát triển của smartphone là sự ra đời của iPhone vào năm 2007, với giao diện màn hình cảm ứng hoàn toàn mới mẻ và hệ điều hành iOS tiên tiến. Cùng thời điểm đó, hệ điều hành Android ra mắt, tạo nên cuộc cạnh tranh khốc liệt giữa các hãng sản xuất điện thoại.</p>
            <p>Ngày nay, điện thoại di động thông minh không chỉ làm thay đổi cách con người giao tiếp mà còn mang đến nhiều tiện ích trong công việc, giải trí, giáo dục và thậm chí là chăm sóc sức khỏe.</p>
            <h3>3. Các chức năng chính của điện thoại di động</h3>
            <p>Điện thoại di động hiện đại mang trong mình nhiều tính năng vượt trội, giúp người dùng thực hiện nhiều nhiệm vụ hàng ngày. Dưới đây là một số chức năng chính của điện thoại di động:</p>
            <ul className="all-info-container-ulli">
              <li><strong>Nghe gọi và nhắn tin:</strong> Đây là chức năng cơ bản và không thể thiếu của mọi loại điện thoại.</li>
              <li><strong>Truy cập internet:</strong> Cho phép người dùng duyệt web, sử dụng mạng xã hội, xem video, nghe nhạc và làm việc trực tuyến.</li>
              <li><strong>Chụp ảnh và quay video:</strong> Với sự phát triển của công nghệ camera, điện thoại di động hiện nay có khả năng chụp ảnh và quay video chất lượng cao, không thua kém các máy ảnh chuyên nghiệp.</li>
              <li><strong>Ứng dụng giải trí và làm việc:</strong> Người dùng có thể tải và cài đặt hàng ngàn ứng dụng hữu ích từ các kho ứng dụng như Google Play hay App Store, từ các trò chơi giải trí, ứng dụng văn phòng đến các công cụ học tập.</li>
              <li><strong>GPS và định vị:</strong> Điện thoại di động hiện đại được tích hợp GPS, giúp người dùng định vị, tìm đường và thậm chí theo dõi sức khỏe.</li>
              <li><strong>Thanh toán di động:</strong> Với các tính năng như NFC hay mã QR, điện thoại có thể thực hiện thanh toán không dây một cách nhanh chóng và tiện lợi.</li>
            </ul>
            <img src="/images/Info_description_product/All_Info_description/All_3.png" alt="" className="all-info-container-img" />
            <h3>4. Tầm quan trọng của điện thoại di động trong cuộc sống</h3>
            <p>Điện thoại thông minh đã thay đổi cách con người giao tiếp và tương tác với thế giới. Với chiếc điện thoại trong tay, bạn có thể kết nối với mọi người ở bất kỳ đâu trên thế giới, tiếp cận thông tin một cách nhanh chóng và thực hiện nhiều công việc ngay cả khi đang di chuyển.</p>
            <p>Ngoài ra, điện thoại còn đóng vai trò quan trọng trong việc giải trí và học tập. Bạn có thể xem phim, nghe nhạc, chơi game, hoặc tham gia các khóa học trực tuyến chỉ với một chiếc smartphone. Trong lĩnh vực sức khỏe, các ứng dụng di động còn giúp người dùng theo dõi tình trạng sức khỏe, đo lường nhịp tim, và thậm chí là tư vấn y tế từ xa.</p>
            <img src="/images/Info_description_product/All_Info_description/All_4.png" alt="" className="all-info-container-img" />
            <p>Với sự phát triển của công nghệ 5G, điện thoại di động đã mở ra kỷ nguyên mới cho việc kết nối và trao đổi dữ liệu, giúp người dùng truy cập internet với tốc độ cao hơn, đồng thời hỗ trợ các dịch vụ trực tuyến trong thời gian thực.</p>
            <h3>5. Phân loại điện thoại theo nhu cầu</h3>
            <p>Theo nhu cầu, điện thoại sẽ được chia thành các loại chính như sau.</p>
            <h3>5.1. Điện thoại chơi game, cấu hình cao</h3>
            <p>Điện thoại Gaming hay Gaming phone cũng là một chiếc điện thoại thông minh nhưng được thiết kế để tối ưu hơn cho việc chơi game. Những chiếc smartphone này thường được các hãng tập trung rất nhiều vào cấu hình, khả năng tản nhiệt. Đồng thời nó cũng giúp tối ưu phần mềm, hỗ trợ quá trình chơi game được diễn ra mượt mà hơn bao giờ hết.</p>
            <h3>Đặc điểm của những chiếc máy này thường:</h3>
            <ul className="all-info-container-ulli">
              <li><strong>Màn hình lớn</strong> hỗ trợ tần số quét màn hình cao, cấu hình khủng.</li>
              <li><strong>Khả năng tản nhiệt tốt</strong> giúp duy trì hiệu suất ổn định trong thời gian dài.</li>
              <li><strong>Thiết kế hầm hố</strong> đậm chất game thủ, mang lại trải nghiệm mạnh mẽ và cá tính.</li>
            </ul>
            <p>Ngoài ra, những chiếc điện thoại gaming thường còn được các hãng trang bị thêm nhiều phụ kiện hỗ trợ khi chơi game như hệ thống tản nhiệt rời, tay cầm chơi game….</p>
            <img src="/images/Info_description_product/All_Info_description/All_5.png" alt="" className="all-info-container-img" />
            <h3>5.2. Điện thoại chụp hình, quay phim đẹp</h3>
            <p>Tương tự với dòng Gaming phone, điện thoại chụp ảnh hay camera phone là một chiếc điện thoại thông minh được các hãng tối ưu về camera cũng như khả năng chụp ảnh. Hầu hết các dòng điện thoại ngày nay đều được trang bị hệ thống camera vô cùng chất lượng với khả năng chụp ảnh tốt.</p>
            <img src="/images/Info_description_product/All_Info_description/All_6.png" alt="" className="all-info-container-img" />
            <p>Ngoài việc tối ưu phần cứng, phần mềm cũng là một trong những yếu tố giúp chiếc camera phone chụp ảnh tốt hơn. Ví dụ như dòng iPhone, Google Pixel…, tuy chỉ có 1 camera với 12MP nhưng những tấm ảnh cho ra vô cùng ấn tượng, sắc nét…</p>
            <h3>5.3. Điện thoại pin trâu</h3>
            <p>Khi mà các tác vụ hàng ngày như lướt web, xem video, chơi game, hay thậm chí là làm việc từ xa ngày càng đòi hỏi nhiều năng lượng hơn, việc sở hữu một chiếc điện thoại pin trâu sẽ giúp bạn duy trì kết nối và tránh những gián đoạn không mong muốn.</p>
            <p>Các dòng điện thoại như <span class="highlight_bold">Xiaomi Redmi, Samsung Galaxy M Series, hay realme</span> hiện đang nổi bật với dung lượng pin từ <span class="highlight_bold">5000mAh</span> trở lên. Với mức pin này, bạn có thể thoải mái sử dụng điện thoại cả ngày mà không phải lo lắng về việc phải sạc giữa chừng. Điều này đặc biệt hữu ích cho những người có công việc bận rộn hoặc thường xuyên di chuyển, giúp họ luôn sẵn sàng cho các cuộc gọi công việc, họp trực tuyến, hoặc xử lý các tác vụ quan trọng mà không bị gián đoạn.</p>
            <h3>5.4. Điện thoại mỏng nhẹ</h3>
            <p>Với những người yêu thích sự tiện lợi và thẩm mỹ, một chiếc điện thoại mỏng nhẹ sẽ là lựa chọn phù hợp. Những dòng điện thoại như iPhone, OPPO Reno, hay Samsung Galaxy Z Flip không chỉ có thiết kế mỏng nhẹ mà còn mang đến hiệu năng mạnh mẽ và trải nghiệm sử dụng thoải mái.</p>
            <img src="/images/Info_description_product/All_Info_description/All_7.png" alt="" className="all-info-container-img" />
            <h3>5.5. Điện thoại gập</h3>
            <p>Điện thoại gập là những chiếc điện thoại có khả năng gập mở lại giúp chiếc máy nhỏ hơn so với các dòng điện thoại khác. Người ta thường nghĩ điện thoại gập chỉ là những chiếc điện thoại dumbphone với khả năng nghe - gọi cơ bản. Ví dụ điển hình nhất đó là chiếc Motorola V3i huyền thoại hay cao cấp hơn là những chiếc điện thoại Vertu.</p>
            <img src="/images/Info_description_product/All_Info_description/All_8.png" alt="" className="all-info-container-img" />
            <p>Tuy nhiên, với sự phát triển của công nghệ ngày nay, các dòng điện thoại gập cũng đã được các hãng hồi sinh và phát triển mạnh mẽ hơn bao giờ hết. Dòng Galaxy Z Fold4 và Samsung Z Flip4 là 2 chiếc điện thoại gập được nhiều người săn đón nhất hiện nay. Đây là 2 chiếc điện thoại thông minh với khả năng gập mở vô cùng ấn tượng. Đi kèm với đó là cấu hình cực khủng cùng khả năng kháng nước IPX8.</p>
            <h3>5.6. Điện thoại xa xỉ</h3>
            <p>Đối với những người yêu thích sự sang trọng và đẳng cấp, điện thoại xa xỉ là lựa chọn không thể bỏ qua. Các thương hiệu như Vertu nổi tiếng với những chiếc điện thoại được chế tác từ các vật liệu đắt tiền như vàng, kim cương, da cao cấp, hướng đến đối tượng người dùng thượng lưu.</p>
            <h3>6. Phân loại điện thoại theo chức năng</h3>
            <p>Về yếu tố chức năng, các dòng điện thoại di động cũng có thể phân chia theo các nhóm sau.</p>
            <h3>6.1. Điện thoại hỗ trợ 5G</h3>
            <p>Công nghệ 5G đang dần trở thành xu hướng với khả năng truy cập internet siêu tốc. Các dòng điện thoại hỗ trợ 5G như iPhone 12, Samsung Galaxy S21, hay Xiaomi Mi 11 giúp người dùng tận hưởng tốc độ kết nối nhanh, giảm độ trễ và hỗ trợ các ứng dụng trực tuyến mượt mà hơn.</p>
            <img src="/images/Info_description_product/All_Info_description/All_9.png" alt="" className="all-info-container-img" />
            <h3>6.2. Điện thoại có NFC</h3>
            <p>NFC (Near Field Communication) là công nghệ cho phép điện thoại kết nối và trao đổi dữ liệu trong khoảng cách ngắn. Các ứng dụng phổ biến của NFC bao gồm thanh toán di động (Apple Pay, Google Pay) và chia sẻ dữ liệu giữa các thiết bị. Các dòng điện thoại từ Apple, Samsung, OPPO hiện nay hầu như đều đã tích hợp tính năng này.</p>
            <h3>6.3. Điện thoại có bảo mật sinh trắc </h3>
            <p>Bảo mật sinh trắc như nhận diện khuôn mặt, cảm biến vân tay giúp tăng cường tính bảo mật cho điện thoại di động. Các dòng điện thoại cao cấp như iPhone, Samsung Galaxy S và Xiaomi đều tích hợp các công nghệ bảo mật này, giúp bảo vệ dữ liệu cá nhân của người dùng.</p>
            <img src="/images/Info_description_product/All_Info_description/All_10.png" alt="" className="all-info-container-img" />
            <h3>6.4. Điện thoại có chống nước, kháng bụi</h3>
            <p>Chức năng chống nước, kháng bụi giúp bảo vệ điện thoại trước những tác động từ môi trường. Các dòng điện thoại thông minh như iPhone, Samsung Galaxy S, Sony Xperia đều đa phân đảm bảo đạt chuẩn IP68, cho phép chống nước trong khoảng thời gian và ở độ sâu nhất định.</p>
            <h3>7. Phân loại smartphone theo hệ điều hành</h3>
            <p>Điện thoại Android nổi bật với sự đa dạng và linh hoạt. Đây là một hệ điều hành mở, dễ tùy chỉnh, phù hợp với mọi nhu cầu và ngân sách. Người dùng có thể chọn từ nhiều thương hiệu lớn với nhiều mức giá khác nhau.</p>
            <p>Điện thoại iOS mang đến trải nghiệm mượt mà và ổn định. Hệ sinh thái Apple tương đối khép kín, bảo mật cao và đồng bộ hoàn hảo. Do đó, dòng iPhone là lựa chọn cho những ai yêu thích sự tối giản và cao cấp.</p>
            <p>Cả Android và iOS đều có điểm mạnh riêng tùy vào nhu cầu người dùng. Android phù hợp với tính cá nhân hóa và đa dạng giá thành. Trong khi đó, iOS dành cho những ai muốn sự liền mạch và đẳng cấp.</p>
            <h3>8. Phân loại điện thoại theo phân khúc giá</h3>
            <p><span class="highlight_bold">Điện thoại giá rẻ (dưới 3 triệu đồng)</span> đáp ứng nhu cầu cơ bản như nghe gọi và nhắn tin. Đây là lựa chọn phù hợp cho học sinh, sinh viên hoặc người lớn tuổi. Chúng co thiết kế đơn giản, tập trung vào tính thực dụng hơn là hiệu năng.</p>
            <p><span class="highlight_bold">Phân khúc tầm trung (3 - 8 triệu đồng)</span> mang đến sự cân bằng giữa giá cả và chất lượng. Máy có thiết kế đẹp, hiệu năng ổn định và camera đủ tốt cho người dùng phổ thông. Đây là lựa chọn lý tưởng cho nhân viên văn phòng hoặc người thích trải nghiệm mượt mà.</p>
            <img src="/images/Info_description_product/All_Info_description/All_11.png" alt="" className="all-info-container-img" />
            <p><span class="highlight_bold">Cận cao cấp (8 - 15 triệu đồng)</span> là nơi hội tụ của thiết kế và hiệu năng mạnh mẽ. Những chiếc máy ở phân khúc này có màn hình đẹp, camera cao cấp và cấu hình mạnh. Các thiết bị sẽ phù hợp với người dùng yêu công nghệ và giải trí đa phương tiện.</p>
            <p><span class="highlight_bold">Phân khúc cao cấp (trên 15 triệu đồng)</span> là đỉnh cao của sự hoàn thiện. Điện thoại cao cấp sở hữu thiết kế sang trọng, tính năng tiên tiến và hiệu năng vượt trội. Đây là lựa chọn thích hợp cho doanh nhân hoặc người muốn khẳng định đẳng cấp.</p>
            <img src="/images/Info_description_product/All_Info_description/All_12.png" alt="" className="all-info-container-img" />
            <h3>9. Các thương hiệu điện thoại di động nổi tiếng và phổ biến hiện nay</h3>
            <p>Nhờ sự phát triển mạnh mẽ của công nghệ mà thị trường điện thoại ngày nay rất sôi động. Đi cùng với đó là nhu cầu sử dụng smartphone ngày càng tăng cao, khiến thị trường xuất hiện nhiều hãng điện thoại di động khác nhau về kiểu dáng và thông số. Sau đây là một số hãng điện thoại đáng mua và tốt nhất hiện nay.</p>
            <h3>9.1. Điện thoại iPhone</h3>
            <p><span class="highlight">Điện thoại iPhone</span> là một trong những sản phẩm làm nên tên tuổi của Apple và cũng là thiết bị được khá nhiều người dùng săn đón. Vì là dòng sản phẩm cao cấp nên thường những chiếc iPhone luôn có thiết kế sang trọng, tinh tế đi cùng với cấu hình mạnh mẽ. Đi kèm với đó là hỗ trợ cập nhật phần mềm lâu dài khiến người dùng yên tâm khi sử dụng.</p>
            <p>Vậy nếu người dùng cần tìm một chiếc điện thoại để sử dụng lâu dài, hiệu năng ổn định và được cập nhật thường xuyên thì iPhone là một lựa chọn hoàn toàn xứng đáng. </p>
            <img src="/images/Info_description_product/All_Info_description/All_13.png" alt="" className="all-info-container-img" />
            <h3>9.2. Điện thoại Samsung</h3>
            <p>Ngoài Apple thì Samsung cũng là một ông lớn trong thị trường smartphone hiện nay. <span class="highlight">Điện thoại Samsung</span> thường được hãng chăm chuốt rất tỉ mỉ và thường áp dụng những công nghệ mới lên sản phẩm. Vì thế, Samsung thường có đa dạng phân khúc smartphone từ tầm trung (Galaxy A Series) đến flagship cao cấp (dòng Galaxy S, Galaxy Note) và dòng nắp gập (Galaxy Z Fold, Z Flip).</p>
            <p>Nếu người dùng không thích sự “tù túng” của iOS nhưng cần sự ổn định thì những dòng flagship của Samsung là một sự lựa chọn hoàn hảo. Người dùng có thể trải nghiệm được những tính năng mới, công nghệ mới cũng như cấu hình phần cứng cực khủng. </p>
            <img src="/images/Info_description_product/All_Info_description/All_14.png" alt="" className="all-info-container-img" />
            <h3>9.3. Điện thoại Xiaomi</h3>
            <p><span class="highlight">Điện thoại Xiaomi</span> là thương hiệu điện thoại đến từ Trung Quốc, được rất nhiều người tiêu dùng yêu thích và lựa chọn. Những mẫu điện thoại của Xiaomi thường là những dòng tầm trung - cận cao cấp với thiết kế trẻ trung, năng động nhiều màu sắc. Hãng cũng thường trang bị cho những thiết bị của mình cấu hình mạnh mẽ nhất, dung lượng pin lớn….</p>
            <h3>9.4. Điện thoại OPPO</h3>
            <p><span class="highlight">Điện thoại OPPO</span> là một trong những thương hiệu điện thoại khá phổ biến đối với giới trẻ. Các dòng smartphone của OPPO thường có thiết kế đẹp mắt, cấu hình ổn định với camera chụp cực kỳ sắc nét. Đặc biệt là với camera selfie, những dòng sản phẩm OPPO đã chiếm được rất nhiều cảm tình của biết bao nhiêu bạn nữ. Một số dòng sản phẩm tiêu biểu: OPPO Reno12 5G, OPPO Reno12 F 5G, OPPO Find N3 Flip, OPPO A18,...</p>
            <img src="/images/Info_description_product/All_Info_description/All_15.png" alt="" className="all-info-container-img" />
            <h3>10. Các tiêu chí khi lựa chọn smartphone</h3>
            <p>Thiết kế bên ngoài là một trong những yếu tố quan trọng khiến người dùng quyết định chọn chiếc smartphone của mình. Hiện nay, những chiếc điện thoại thông minh không chỉ đơn thuần là một thiết bị di động để liên lạc, giải trí, mà nó còn đóng vai trò là một phụ kiện trang trí, thể hiện phần nào đó tính cách của người dùng.</p>
            <p>Đây là lý do các nhà sản xuất đã thiết kế ra đa dạng mẫu mã để hợp hơn với tính cách của người dùng. Từ thiết kế hầm hố của những dòng gaming phone cho đến mỏng manh “sexy” như những chiếc Xiaomi 11 Lite 5G NE, hay vuông vức như những chiếc iPhone 16 Series.</p>
            <img src="/images/Info_description_product/All_Info_description/All_16.png" alt="" className="all-info-container-img" />
            <p>Màu sắc cũng là một trong điểm đáng chú ý trên những chiếc smartphone ngày nay. Với màu sắc trẻ trung, năng động ta có màu Gradient từ những chiếc Realme, Xiaomi, Samsung hay hiện đại, cao cấp như trên những dòng iPhone, Galaxy S hay mới nhất là trên dòng Galaxy Z Fold6</p>
            <p>Ngoài ra, cảm giác cầm nắm cũng vô cùng quan trọng khi mua một chiếc smartphone. Người dùng nên ưu tiên ra thẳng cửa hàng để được sờ tận tay, để biết được chiếc smartphone ấy có phù hợp với cỡ tay của người dùng hay không. Từ đó đưa ra quyết định có nên lựa chọn mua chiếc điện thoại ấy hay không.</p>
            <h3>10.2. Màn hình</h3>
            <p>Màn hình và kích thước màn hình cũng sẽ ảnh hưởng rất nhiều đến tiêu chí chọn mua của người tiêu dùng. Với đa số người dùng hiện nay, họ luôn muốn được trải nghiệm nhiều nội dung hơn nên kích thước màn hình ngày càng lớn hơn. Tuy nhiên, để có thể sử dụng, cầm nắm vừa tay nhất chúng ta nên ưu tiên lựa chọn những chiếc màn hình có kích thước từ 6.2 inch trở lên.</p>
            <p>Bên cạnh đó, không ít người dùng vẫn thích sử dụng những chiếc smartphone màn hình bé vì kích thước nhỏ gọn và tiện lợi của nó. Ngoài ra, người dùng nên ưu tiên mua những chiếc smartphone có màn hình với độ phân giải từ Full HD trở lên để hình ảnh được hiển thị sắc nét hơn. </p>
            <img src="/images/Info_description_product/All_Info_description/All_17.png" alt="" className="all-info-container-img" />
            <h3>10.3. Hiệu năng</h3>
            <p>Ngoài việc tối ưu phần mềm, thì phần cứng cũng là một thứ vô cùng quan trọng giúp chiếc smartphone có thể hoạt động mượt mà. Vi xử lý CPU và GPU sẽ quyết định đến tốc độ xử lý ứng dụng cũng như hoạt động của máy. Vì thế, vi xử lý được trang bị trên chiếc điện thoại càng mạnh thì tốc độ xử lý ứng dụng, đồ họa của máy càng nhanh, càng mượt mà.</p>
            <p>Bên cạnh đó, dung lượng RAM cũng rất quan trọng trên một chiếc smartphone. Dung lượng RAM càng lớn thì khả năng đa nhiệm của máy càng nhiều. Điều này giúp hạn chế khả năng bị lag, giật, đơ máy khi người dùng mở nhiều ứng dụng cùng lúc.</p>
            <p>Hiện nay, đa phần các dòng smartphone giá rẻ, tầm trung đã được trang bị dung lượng RAM từ 4GB trở lên. Với các dòng máy cao cấp, dung lượng RAM có thể từ 8GB - 16GB RAM.</p>
            <img src="/images/Info_description_product/All_Info_description/All_18.png" alt="" className="all-info-container-img" />
            <h3>10.4. Camera</h3>
            <p>Nếu là một người dùng yêu thích chụp ảnh, quay phim hay sử dụng điện thoại để phục vụ cho những mục đích tương tự thì camera là một yếu tố khá quan trọng. Ngoài những thông số về phần cứng, người dùng cũng nên quan tâm về những tính năng khác như hỗ trợ chụp ảnh xóa phông, góc rộng, khả năng chống rung, thu âm,..</p>
            <h3>10.5. Hệ điều hành</h3>
            <p>Hệ điều hành là một trong những thứ quan trọng nhất khi người dùng lựa chọn mua một chiếc smartphone. Trên thị trường hiện nay, có rất nhiều hệ điều hành khác nhau có thể kể đến như: iOS, Android, BlackBerry OS, Windows Phone và Symbian. Vì mỗi hệ điều hành được xây dựng và phát triển trên các nền tảng khác nhau nên chúng sẽ có những ưu điểm và nhược điểm khác nhau.</p>
            <h3>10.6. Dung lượng pin và sạc</h3>
            <p>Thời lượng sử dụng pin cũng được khá nhiều người dùng quan tâm đến hiện nay. Một chiếc điện thoại pin càng lớn (mAh) thì càng có thời lượng sử dụng lâu giúp phục vụ tốt cho cho nhiều mục đích sử dụng của người dùng. Ngoài ra, người dùng cũng nên quan tâm thiết bị đó có hỗ trợ khả năng sạc nhanh hay không, sử dụng cổng sạc nào, nên ưu tiên lựa chọn sản phẩm có cổng sạc USB Type C.</p>
            <img src="/images/Info_description_product/All_Info_description/All_19.png" alt="" className="all-info-container-img" />
            <h3>10.7. Thương hiệu</h3>
            <p>Sau khi chọn lựa được hệ điều hành thì việc lựa chọn thương hiệu điện thoại trở nên dễ dàng hơn rất nhiều. Nếu lựa chọn iOS thì người dùng chỉ có thể chọn mua những dòng iPhone đến từ nhà Apple. Nếu người dùng lựa chọn Android thì nên ưu tiên những thương hiệu lớn như Samsung, Xiaomi, OPPO, Vivo hoặc một số thương hiệu khác như LG, Sony, Vsmat, BKAV…</p>
            <h3>10.8 Theo nhu cầu sử dụng</h3>
            <p>Nhu cầu sử dụng là tiêu chí quan trọng khi chọn smartphone. Người dùng cơ bản cần máy đơn giản để nghe gọi, nhắn tin. Trong khi đó, người trẻ chọn máy có camera đẹp và cấu hình ổn định.</p>
            <p>Nếu bạn chơi game, hãy ưu tiên điện thoại có chip mạnh và màn hình mượt. Người làm việc di động nên chọn máy pin lâu, hỗ trợ ứng dụng văn phòng. Còn tín đồ công nghệ sẽ muốn những tính năng hiện đại nhất có mặt trên thiết bị của mình</p>
            <h3>10.9. Các tính năng đặc biệt</h3>
            <p>Khi chọn mua một chiếc điện thoại, ngoài các yếu tố như dung lượng pin, hiệu năng hay thiết kế, các tính năng đặc biệt cũng đóng vai trò quan trọng trong việc nâng cao trải nghiệm người dùng và đem lại sự tiện lợi trong cuộc sống hàng ngày. Việc cân nhắc thêm các tính năng đặc biệt như khả năng chống nước, hỗ trợ 5G, NFC, và bảo mật sinh trắc cũng sẽ giúp bạn chọn được một thiết bị đáp ứng tốt các yêu cầu về kết nối, bảo mật </p>
            <h3>10.10. Mức giá</h3>
            <p>Giá cả luôn là một trong những yếu tố hàng đầu được cân nhắc khi lựa chọn điện thoại. Để chọn được sản phẩm phù hợp, người dùng nên xác định rõ ràng nhu cầu sử dụng của mình. Ví dụ, nếu bạn cần một chiếc điện thoại để chụp ảnh đẹp, chơi game mượt mà và có dung lượng pin lớn, thì việc đầu tư vào một sản phẩm cao cấp có thể là lựa chọn đúng đắn. Ngược lại, nếu bạn chỉ cần một thiết bị để sử dụng các tác vụ cơ bản như gọi điện, nhắn tin và lướt web, một chiếc điện thoại tầm trung với mức giá phải chăng sẽ hợp lý hơn.</p>
            <img src="/images/Info_description_product/All_Info_description/All_20.png" alt="" className="all-info-container-img" />
            <h3>11. Mua điện thoại thông minh mới chính hãng, đến Di Động Việt</h3>
            <p><span class="highlight_bold">CHUYỂN GIAO GIÁ TRỊ VƯỢT TRỘI</span> chính là phương châm hoạt động của Di Động Việt. Đến với chúng tôi, bạn có thể nhận được vô vàn các ưu đãi, khuyến mãi giá trị. Đi kèm với đó là mức giá rẻ hơn tất cả loại “GIÁ RẺ”, “GIÁ RẺ HƠN”, “GIÁ RẺ NHẤT” khác trên thị trường.</p>
            <h3>11.1. Khách hàng nhận được gì khi lựa chọn Di Động Việt </h3>
            <p>Là đối tác toàn diện của nhiều thương hiệu điện thoại di động, thế nên Di Động Việt cũng nhận được đặc quyền phân phối các sản phẩm smartphone <span class="highlight_bold">VƯỢT TRỘI CHÍNH HÃNG CHÍNH THỐNG 100%</span> . </p>
            <p>Không chỉ cam kết cung cấp cho khách hàng các dòng điện thoại mới chính hãng, chất lượng với giá cả cạnh tranh mà Di Động Việt còn mang đến nhiều <span class="highlight_bold">QUYỀN LỢI VƯỢT TRỘI</span>  khác. Chẳng hạn như: Bảo hành 1 đổi 1, bảo hành rơi vỡ D.Care, bảo hành pin,…</p>
            <p>Cuối cùng, Di Động Việt luôn mang đến cho khách hàng <span class="highlight_bold">TRẢI NGHIỆM VƯỢT TRỘI</span>  trong suốt hành trình mua sắm, từ lúc tham khảo sản phẩm đến sau khi mua hàng.</p>
            <img src="/images/Info_description_product/All_Info_description/All_21.png" alt="" className="all-info-container-img" />
            <h3>11.2. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h3>
            <p>Nếu như quý khách hàng có bất kỳ thắc mắc hay câu hỏi nào cần được giải đáp, hãy liên hệ với chúng tôi qua các kênh sau:</p>
            <ul className="all-info-container-ulli">
              <li><strong>Hotline:</strong> 1800.6018 (Liên hệ Kỹ thuật hoặc Mua ngay).</li>
              <li><strong>Hotline:</strong> 1800.6729 (Liên hệ Bảo hành).</li>
              <li><strong>Hotline:</strong> 1800.6306 (Góp ý).</li>
              <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/didongviet/" target="_blank" rel="noopener noreferrer">Didongviet</a></li>
              <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@didongviet_official" target="_blank" rel="noopener noreferrer">@didongviet_official</a></li>
            </ul>
            <h3>12. Những đánh giá và nhận xét của khách hàng khi mua điện thoại/smartphone tại Di Động Việt</h3>
            <img src="/images/Info_description_product/All_Info_description/All_22.png" alt="" className="all-info-container-img" />
            <p className="all-info-container-p"><span class="highlight_bold">Anh Minh – TP. Hồ Chí Minh:</span> Tôi đã mua iPhone 14 Pro Max tại Di Động Việt và thật sự hài lòng với dịch vụ ở đây. Các bạn nhân viên tư vấn rất nhiệt tình, không chỉ giới thiệu chi tiết về sản phẩm mà còn giúp tôi chọn được phương thức trả góp phù hợp. Mình rất ưng ý với chính sách thu cũ đổi mới của cửa hàng, giúp tiết kiệm được một khoản kha khá.</p>
            <p className="all-info-container-p"><span class="highlight_bold">Chị Hương – Hà Nội:</span> Tôi chọn mua Samsung Galaxy S24 Ultra tại Di Động Việt vì thấy có nhiều chương trình khuyến mãi hấp dẫn. Sau khi đến cửa hàng, tôi thực sự ấn tượng với cách nhân viên hỗ trợ. Họ giải thích rất tỉ mỉ về các tính năng của máy và giúp tôi chọn được mẫu điện thoại đúng với nhu cầu của mình. </p>
            <p className="all-info-container-p"><span class="highlight_bold">Chị Linh – Cần Thơ:</span> Đây là lần thứ hai mình mua điện thoại tại Di Động Việt. Lần này mình mua OPPO Reno và vẫn thấy dịch vụ rất tốt như lần trước. Nhân viên chăm sóc khách hàng rất thân thiện, không hề gây áp lực mua hàng, tư vấn rất khách quan.</p>
          </>
        )}
        <Button onClick={toggleExpanded} >
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </Button>
      </div>
    </>
  )}
  </>;
};

export default Information_product_all;
