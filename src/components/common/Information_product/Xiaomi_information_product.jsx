import { Button } from "antd";
import React, { useState } from "react";

const Xiaomi_information_product = (props) => {
  const { category } = props;
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái để kiểm tra xem có xem thêm không

  const toggleExpanded = (event) => {
    event.preventDefault(); // Ngừng hành vi mặc định (tránh reload trang)
    setIsExpanded(!isExpanded); // Chuyển trạng thái giữa xem thêm và thu gọn
  };

  return (
    <>
      {category === "Xiaomi" && (
        <>
          <p>
            Điện thoại Xiaomi là một trong những dòng sản phẩm chủ lực của
            Xiaomi tại Việt Nam. Dòng máy không chỉ thu hút người dùng nhờ vẻ
            ngoài tinh tế mà còn bởi khả năng chụp ảnh tuyệt vời và hiệu năng
            vượt trội trong mọi tầm giá. Chính điều này đã khẳng định vị thế lớn
            mạnh của điện thoại Xiaomi chính hãng khi so sánh với các thương
            hiệu khác trên thị trường.
          </p>

          {isExpanded && (
            <>
              <h3>1. Đôi nét về điện thoại Xiaomi - Redmi</h3>
              <p>
                Xiaomi là một trong những thương hiệu điện thoại lớn tại Trung
                Quốc và quốc tế, có trụ sở chính ở Bắc Kinh. Được mệnh danh là
                “Apple của Trung Quốc”, Xiaomi luôn mang đến những dòng điện
                thoại thông minh chất lượng với mức giá thân thiện đến tay người
                dùng.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_1.png"
                alt=""
              />
              <p>
                Thương hiệu Xiaomi bắt đầu hành trình của mình vào ngày 6/4/2010
                trong mảng thiết bị công nghệ. Sau hơn một thập kỷ đầy nỗ lực và
                thành công, Xiaomi đã vươn mình lên vị trí thứ ba trong danh
                sách các nhà sản xuất smartphone hàng đầu thế giới. Vào năm
                2017, hãng chính thức ra mắt tại Việt Nam. Họ nhanh chóng chứng
                minh được vị thế trên thị trường công nghệ, trở thành thương
                hiệu điện thoại được nhiều người tin tưởng.{" "}
              </p>
              <h3>
                2. Những điểm đặc trưng nổi bật của điện thoại Xiaomi - Redmi
              </h3>
              <p>
                Xiaomi - Redmi nổi tiếng trong thị trường điện thoại với các sản
                phẩm trải dài khắp các phân khúc giá, đặc biệt là phân khúc bình
                dân và tầm trung. Điện thoại Xiaomi đã chứng minh được ngay cả
                với mức giá rẻ thì bạn vẫn có thể trên tay sản phẩm đáp ứng yêu
                cầu sử dụng của bản thân về mọi mặt.
              </p>
              <h3>2.1. Thiết kế</h3>
              <p>
                Thương hiệu này luôn đề cao việc tạo ra thiết kế ấn tượng và
                hiện đại cho sản phẩm của mình. Điều này khiến người dùng không
                thể rời mắt ngay từ lần nhìn đầu tiên. Họ không chỉ dừng lại ở
                thiết kế nguyên khối và vuông vức mà còn quan tâm đến việc phối
                màu sắc tinh tế hơn. Những sản phẩm mới đều sở hữu mặt lưng bóng
                với hiệu ứng màu ấn tượng, đem lại cho người dùng những chiếc
                smartphone táo bạo và cuốn hút.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_2.png"
                alt=""
              />
              <p>
                Chưa hết, Xiaomi đã có những cải tiến thêm với nhiều gam màu trẻ
                trung và các chi tiết tinh xảo như mặt lưng cong, hiệu ứng
                gradient. Đặc biệt, cụm camera của Xiaomi - Redmi cũng được bố
                trí hài hòa, tạo điểm nhấn cho toàn bộ thiết bị.
              </p>
              <h3>2.2. Màn hình</h3>
              <p>
                Màn hình của điện thoại Xiaomi luôn mang lại trải nghiệm tuyệt
                vời nhờ vào công nghệ hiển thị cao cấp. Dù là dòng Redmi giá rẻ
                hay Mi Series cao cấp, chúng đều được trang bị màn hình có độ
                phân giải tối thiểu Full HD+, hỗ trợ các công nghệ như AMOLED
                hay IPS LCD.{" "}
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_3.png"
                alt=""
              />
              <p>
                Điều này giúp hình ảnh hiển thị trở nên sắc nét, sống động và
                chân thực. Đối với các mẫu flagship, màn hình còn hỗ trợ tần số
                quét cao từ 90Hz đến 120Hz, mang lại trải nghiệm mượt mà khi
                chơi game hoặc lướt web.
              </p>
              <h3>2.3. Hiệu năng</h3>
              <p>
                Điện thoại Xiaomi - Redmi được đánh giá cao về hiệu năng nhờ
                trang bị các con chip mạnh mẽ từ Qualcomm và MediaTek. Các dòng
                máy thuộc Mi Series thường sử dụng chip Snapdragon cao cấp, đảm
                bảo khả năng xử lý đa nhiệm mượt mà từ công việc đến giải trí.{" "}
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_4.png"
                alt=""
              />
              <p>
                Trong khi đó, dòng Redmi và POCO cũng không kém cạnh với các
                chip tầm trung nhưng vẫn đảm bảo hiệu suất tốt. Đặc biệt, với
                dung lượng RAM từ 4GB đến 16GB và bộ nhớ trong lên đến 512GB,
                người dùng có thể thoải mái sử dụng mà không lo giật lag hay
                thiếu không gian lưu trữ.
              </p>
              <h3>2.4. Camera </h3>
              <p>
                Xiaomi - Redmi luôn không ngừng cải tiến và nâng cấp camera trên
                mỗi dòng sản phẩm mới. Đa số các điện thoại Xiaomi hiện đại được
                trang bị hệ thống camera đa ống kính như 2,3 và thậm chí tới 4
                camera trong một cụm. Điều này là để đáp ứng mọi yêu cầu về nhu
                cầu chụp ảnh từ cơ bản đến chuyên nghiệp.
              </p>
              <p>
                Điện thoại Xiaomi - Redmi cũng đã tích hợp những công nghệ tiên
                tiến như AI, tự động làm đẹp và các chế độ chụp ảnh như HDR,
                chụp góc rộng. Do đó, người dùng sẽ có nhiều sự lựa chọn để có
                được bức hình ưng ý nhất với mình.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_5.png"
                alt=""
              />
              <p>
                Đối với dòng sản phẩm cao cấp và cận cao cấp, Xiaomi - Redmi đã
                đưa ra một cấp độ hoàn toàn mới về chất lượng camera nhờ sự hợp
                tác với Leica. Sự kết hợp này đã giúp điện thoại Xiaomi được
                trang bị các ống kính quang học chuyên nghiệp của Leica cùng với
                những thuật toán và phần mềm hiện đại.
              </p>
              <p>
                Kết quả là người dùng có thể chụp được những bức ảnh chuyên
                nghiệp và quay video mượt mà. Điều này sẽ giúp làm nổi bật xu
                hướng chụp ảnh và quay video trên di động đang ngày càng trở nên
                phổ biến.
              </p>
              <h3>2.5. Thời lượng pin</h3>
              <p>
                Xiaomi - Redmi luôn tập trung mang lại thời lượng pin cao cho
                người dùng của mình. Cụ thể, hãng đã trang bị cho các dòng điện
                thoại các mức pin lớn từ 4000 - 5000 mAh. Điều này đảm bảo thời
                gian dùng máy lâu dài nên bạn cũng không cần lo lắng bị tụt pin
                nhanh chóng và gây ảnh hưởng đến trải nghiệm.
              </p>
              <p>
                Đồng thời Xiaomi - Redmi cũng không quên tối ưu hóa thời gian
                sạc pin bằng việc tích hợp công suất sạc lớn và tính năng sạc
                nhanh siêu tốc. Nhờ vậy mà thời gian sạc được rút ngắn, mang lại
                sự tiện lợi và hiệu quả tốt hơn cho người dùng.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_6.png"
                alt=""
              />
              <h3>2.6. Hệ điều hành</h3>
              <p>
                Hệ điều hành MIUI (hoặc HyperOS) của điện thoại Xiaomi được đánh
                giá cao nhờ sở hữu giao diện thân thiện và khả năng tùy biến
                mạnh mẽ. Dòng thiết bị dùng hệ điều hành Android trên nền tảng
                MIUI, mang đến trải nghiệm sử dụng mượt mà và dễ dàng. Xiaomi -
                Redmi cũng liên tục cập nhật phần mềm để cải thiện hiệu năng và
                bảo mật cho thiết bị.
              </p>
              <p>
                Điểm đặc biệt nhất là điện thoại Xiaomi - Redmi còn cung cấp bản
                cập nhật hệ điều hành cho cả những mẫu smartphone đã ra mắt từ
                lâu. Điều này đảm bảo rằng người dùng có thể sử dụng chiếc điện
                thoại của mình ổn định và hiệu quả trong một khoảng thời gian
                dài.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_7.png"
                alt=""
              />
              <p>
                Mới đây, hãng đã giới thiệu giao diện điều hành HyperOS trên một
                số thiết bị mới của mình. Ngoài ra, một số thiết bị cũ cũng được
                hỗ trợ cập nhật từ MIUI lên HyperOS. Vậy là sau nhiều năm thì
                thương hiệu Xiaomi - Redmi đã cho ra một sản phẩm giao diện hệ
                điều hành mới.
              </p>
              <p>
                Không còn gắn liền với từ MI như nhiều sản phẩm phần mềm khác
                nhưng HyperOS lại thể hiện dấu ấn của hãng một cách mạnh mẽ
                trong việc tối ưu và đồng bộ, liên kết các thiết bị trong hệ
                sinh thái Xiaomi. Sự nâng cấp này giúp cho người dùng khi sử
                dụng các thiết bị của hãng có thể kết nối và trao đổi thông tin,
                dữ liệu và hơn thế nữa.
              </p>
              <h3>
                3. Các dòng điện thoại Xiaomi - Redmi hiện nay trên thị trường
              </h3>
              <p>
                Dòng điện thoại Xiaomi sở hữu nhiều dòng sản phẩm khác nhau để
                đáp ứng nhu cầu đa dạng của người dùng từ phân khúc giá rẻ đến
                cao cấp. Mỗi dòng máy đều có những đặc điểm riêng biệt, phù hợp
                với từng đối tượng khách hàng khác nhau
              </p>
              <h3>3.1. Xiaomi series (Mi series)</h3>
              <p>
                Mi Series là dòng flagship của điện thoại Xiaomi với thiết kế
                cao cấp và hiệu năng mạnh mẽ. Các sản phẩm trong dòng này thường
                được trang bị chip Snapdragon hàng đầu của Qualcomm, camera chất
                lượng cao và màn hình AMOLED sắc nét.{" "}
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_8.png"
                alt=""
              />
              <p>
                Có thể nói sản phẩm thuộc Xiaomi Mi Series hướng đến đối tượng
                đam mê công nghệ, muốn bắt kịp với những công nghệ mới nhất.
                Ngoài ra, đây cũng là dòng sản phẩm lý tưởng dành cho game thủ
                cũng như những ai yêu thích chụp ảnh trên điện thoại.
              </p>
              <p>
                Một số gợi ý của Xiaomi Mi Series trên thị trường hiện nay: Dòng
                Xiaomi 14, dòng Xiaomi 13,...
              </p>
              <h3>3.2. Xiaomi T series</h3>
              <p>
                Xiaomi T Series là sự lựa chọn hợp lý cho những ai muốn trải
                nghiệm điện thoại cao cấp với mức giá phải chăng hơn. Dòng này
                có hiệu năng mạnh mẽ, nhiều công nghệ tiên tiến như sạc nhanh,
                màn hình tần số quét cao nhưng giá lại rẻ hơn so với Mi Series.
                Dòng điện thoại Xiaomi T là lựa chọn phù hợp cho những người
                dùng muốn sở hữu một chiếc smartphone hiệu suất cao mà vẫn tiết
                kiệm chi phí.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_9.png"
                alt=""
              />
              <p>
                Bạn có thể tham khảo một số sản phẩm đang có hiện nay như: Dòng
                Xiaomi 14T, dòng Xiaomi 13T,
              </p>
              <h3>3.3. Xiaomi Mix (Mi Mix series)</h3>
              <p>
                Xiaomi Mi Mix Series tiếp tục là một dòng sản phẩm thuộc phân
                khúc cao cấp của điện thoại Xiaomi. Những chiếc smartphone này
                đều sở hữu màn hình full viền, toát lên vẻ cuốn hút độc đáo và
                tối ưu mọi trải nghiệm về giải trí.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_10.png"
                alt=""
              />
              <p>
                Bên cạnh đó, điểm tạo nên sự khác biệt của dòng máy này chính là
                nó sở hữu phong cách thiết kế theo dạng vỏ gốm độc lạ. Điện
                thoại Xiaomi cũng trang bị những công nghệ hàng đầu cho chiếc
                điện thoại cao cấp của hãng. Điều này nhằm mang đến hiệu năng
                khủng đủ để cân tốt mọi nhu cầu giải trí và tác vụ nâng cao của
                người dùng.
              </p>
              <p>
                Đó là lý do sản phẩm này trở thành thiết bị lý tưởng dành cho
                các game thủ mobile. Tuy nhiên sau khi Mi Mix 4 ra mắt vào năm
                2021 thì hiện tại Xiaomi vẫn chưa ra mắt phiên bản điện thoại
                mới cho dòng máy này.
              </p>
              <h3>3.4. Redmi</h3>
              <p>
                Redmi là dòng điện thoại giá rẻ của Xiaomi hướng đến người dùng
                phổ thông. Dù có giá thành phải chăng nhưng điện thoại Xiaomi
                thuộc dòng Redmi vẫn đảm bảo được hiệu năng ổn định, màn hình
                lớn và thời lượng pin tốt. Dòng sản phẩm này rất phù hợp cho học
                sinh, sinh viên hoặc những ai cần một thiết bị đủ tốt cho các
                tác vụ hàng ngày.
              </p>
              <p>
                Hiện dòng Redmi có nhiều sản phẩm với cấu hình khác nhau, bạn có
                thể tham khảo như: Xiaomi Redmi 14C, Xiaomi Redmi A3,...
              </p>
              <h3>3.5. Redmi Note</h3>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_11.png"
                alt=""
              />
              <p>
                Redmi Note là dòng sản phẩm tầm trung của Xiaomi kết hợp giữa
                hiệu năng mạnh mẽ và giá thành hợp lý. Các mẫu Redmi Note thường
                có màn hình lớn, camera chất lượng và pin dung lượng cao, rất
                phù hợp với người dùng trẻ tuổi. Đây cũng là sản phẩm bán chạy
                nhất của dòng điện thoại Xiaomi tại Việt Nam. Thế hệ mới nhất
                hiện nay của dòng sản phẩm này là dòng Xiaomi Redmi Note 13.
              </p>
              <h3>4. Vì sao nên lựa chọn điện thoại Xiaomi?</h3>
              <p>
                Xiaomi - Redmi luôn không ngừng khẳng định vị thế của hãng trong
                từng phân khúc giá. Sự đa dạng về sản phẩm giúp thương hiệu tiếp
                cận được nhiều đối tượng người dùng hơn. Đáng chú ý là về mặt
                hiệu năng, Xiaomi chứng minh được điện thoại Xiaomi dùng tốt nhờ
                sử dụng cùng dòng chip với đối thủ nhưng có mức giá rẻ hơn.
              </p>
              <p>
                Các dòng điện thoại Xiaomi - Redmi cũng nổi bật với chất lượng
                và độ bền cao. Máy có thể chịu đựng được nhiều loại va đập và áp
                lực khác nhau. Xiaomi cũng không ngần ngại tích hợp các chuẩn
                kháng nước, chống bụi cao nhất ngay cho những chiếc smartphone
                tầm trung. Ngoài ra, hãng cũng làm hài lòng các tín đồ đam mê
                chụp ảnh nhờ việc hợp tác với Leica trong hai năm gần đây.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_12.png"
                alt=""
              />
              <p>
                Xiaomi - Redmi cũng tăng trải nghiệm người dùng khi mở rộng RAM
                lên đến 16GB và bộ nhớ trong lên tới 1TB (hoặc nhỏ hơn tuỳ
                loại). Vậy nên người dùng không cần lo lắng về việc không đủ
                không gian lưu trữ hay hiệu suất chậm trễ.
              </p>
              <p>
                Đáng chú ý, Xiaomi - Redmi không chỉ mạnh về điện thoại mà còn
                dần xâm nhập khắp mọi nơi trong chính ngôi nhà của bạn với đa
                dạng thiết bị điện tử khác nhau. Các sản phẩm của Xiaomi gắn kết
                với nhau thông qua hệ sinh thái Mi. Điều này giúp người dùng dễ
                dàng liên kết các thiết bị để thuận tiện trong quá trình sử dụng
                hơn.
              </p>
              <p>
                Nhìn chung, điện thoại Xiaomi - Redmi đã trở thành một trong
                những thương hiệu quen thuộc tại thị trường Việt Nam, khẳng định
                chất lượng và độ bền khi sử dụng trong thời gian dài. Nếu bạn
                đang cân nhắc về một sản phẩm hấp dẫn, tối ưu mọi trải nghiệm
                với mức giá phải chăng thì smartphone Xiaomi là gợi ý dành cho
                bạn.
              </p>
              <h3>
                5. Ưu và nhược điểm của Xiaomi so với các dòng điện thoại khác
              </h3>
              <p>
                Mỗi thương hiệu điện thoại đều có những ưu điểm và hạn chế riêng
                và Xiaomi cũng không ngoại lệ. Khi so với các đối thủ lớn trong
                ngành như Apple, Samsung hay OPPO, Xiaomi có những lợi thế nhất
                định nhưng vẫn tồn tại một số nhược điểm cần lưu ý.
              </p>
              <h3>5.1. So với Apple iPhone</h3>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_13.png"
                alt=""
              />
              <p>
                Xiaomi có lợi thế lớn về giá cả khi so với iPhone, đặc biệt là ở
                phân khúc tầm trung và giá rẻ. Người dùng có thể sở hữu một
                chiếc điện thoại Xiaomi với cấu hình mạnh mẽ, pin lâu và nhiều
                tính năng hiện đại mà không cần bỏ ra số tiền lớn.
              </p>
              <p>
                Tuy nhiên, Apple lại vượt trội hơn về hệ sinh thái và sự tối ưu
                của hệ điều hành iOS. Nó mang lại trải nghiệm mượt mà và liền
                mạch giữa các thiết bị. Xiaomi dù đã cải thiện MIUI nhưng được
                đánh giá là vẫn chưa đạt đến sự ổn định và đồng bộ như iPhone.
              </p>
              <h3>5.2. So với các thương hiệu Android khác (Samsung, OPPO)</h3>
              <p>
                Khi so với Samsung và OPPO, Xiaomi nổi trội hơn nhờ cấu hình
                mạnh và giá thành cạnh tranh hơn, đặc biệt là ở phân khúc tầm
                trung. Xiaomi thường trang bị vi xử lý mạnh mẽ và dung lượng pin
                cao hơn so với các đối thủ cùng giá.
              </p>
              <p>
                Tuy nhiên, Samsung có lợi thế về màn hình hiển thị và chất lượng
                camera còn OPPO lại sở hữu thiết kế thời trang và công nghệ sạc
                nhanh. Về giao diện, MIUI của Xiaomi có nhiều tùy chỉnh nhưng
                đôi khi chưa mượt mà như ColorOS của OPPO.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_14.png"
                alt=""
              />
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_15.png"
                alt=""
              />
              <h3>6. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h3>
              <p>
                Khi chọn mua điện thoại Xiaomi chính hãng tại hệ thống Di Động
                Việt, khách hàng có thể yên tâm vì sẽ được CHUYỂN GIAO GIÁ TRỊ
                VƯỢT TRỘI tại mọi điểm chạm. Cụ thể, khi mua sắm, bạn sẽ nhận
                được những đặc quyền riêng mà chỉ có Di Động Việt có như sau.
              </p>
              <h3>6.1. Khách hàng nhận được gì khi lựa chọn Di Động Việt</h3>
              <p>
                Di Động Việt cam kết đem lại cho khách hàng SẢN PHẨM VƯỢT TRỘI.
                Minh chứng rõ nhất đó chính là mọi sản phẩm Xiaomi mới đều là
                hàng CHÍNH HÃNG CHÍNH THỐNG 100% cũng như được cung cấp, uỷ
                nhiệm CHÍNH NGẠCH, CHÍNH DANH, CHÍNH THỨC mà không phải chính
                hãng trôi nổi hay chính hãng xách tay. Ngoài ra, khách hàng còn
                được hưởng các dịch vụ vượt trội đi kèm, điểm hình là bảo hành
                chính hãng dài lâu,…
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_16.png"
                alt=""
              />
              <p>
                Chưa hết, khách hàng còn được hưởng QUYỀN LỢI VƯỢT TRỘI khi chọn
                mua điện thoại Xiaomi tại hệ thống Di Động Việt. Ngoài các chính
                sách mà hãng đưa ra, Di Động Việt còn giúp cho người mua yên tâm
                hơn với gói bảo hành mở rộng độc quyền với thời gian dài. Ngoài
                ra, cửa hàng còn mang tới nhiều chính sách hấp dẫn khác như:
                dùng thử miễn phí, 1 đổi 1, trả góp 0% lãi suất,…
              </p>
              <p>
                Chưa hết, TRẢI NGHIỆM VƯỢT TRỘI cũng là điều mà Di Động Việt
                mong muốn truyền tải tới các khách hàng thân yêu. Bạn sẽ được
                đội ngũ nhân viên đầy TẬN TÂM, CAM KẾT VÀ TRÁCH NHIỆM hỗ trợ mọi
                lúc mọi nơi dù là offline hay online. Chưa hết, Di Động Việt
                cũng luôn quan tâm và chăm sóc khách hàng trong mọi giai đoạn:
                trước, trong và sau mua hàng chu đáo nhất.
              </p>
              <h3>6.2. Thông tin liên hệ bộ phận hỗ trợ khách hàng</h3>
              <p>
                Nếu bạn còn bất cứ điều gì thắc mắc hay cần được giải đáp điều
                gì về điện thoại Xiaomi tại Di Động Việt, hãy liên hệ qua các
                nguồn dưới đây:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
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
              <h3>
                7. Những đánh giá và nhận xét của khách hàng khi mua điện thoại
                Xiaomi - Redmi chính hãng tại Di Động Việt
              </h3>
              <p>
                Chị Nhung tại Quận 10 - TP.HCM chia sẻ: “Là một tín đồ của
                Xiaomi và cũng là khách hàng thân thiết của Di Động Việt, mình
                cảm thấy rất ưng ý khi mua điện thoại Xiaomi tại đây. Điều mình
                thích nhất chính là giá cả ở Di Động Việt luôn rẻ hơn so với các
                nơi khác, giúp mình tiết kiệm được kha khá chi phí. Nhờ vậy,
                mình không còn lo về vấn đề tài chính nữa. Cảm ơn Di Động Việt
                đã luôn mang đến cho khách hàng những sản phẩm chất lượng với
                giá cả hợp lý”.
              </p>
              <p>
                Chị Chi ở Mỹ Tho cũng có chung quan điểm: “Mình thực sự hài lòng
                khi mua điện thoại Xiaomi tại Di Động Việt. Không chỉ sở hữu mức
                giá cạnh tranh, Di Động Việt còn mang đến cho khách hàng nhiều
                ưu đãi hấp dẫn như thu cũ đổi mới, trả góp 0% lãi suất và bảo
                hành chính hãng dài lâu. Nhờ vậy, mình có thể mua được chiếc
                điện thoại mong muốn với chi phí tiết kiệm nhất mà vẫn yên tâm
                về chất lượng sản phẩm và dịch vụ hậu mãi. Cảm ơn Di Động Việt
                đã luôn đồng hành cùng khách hàng”.
              </p>
              <p>
                Bạn Tín - Sinh viên Đại học HUFLIT cũng chia sẻ: “Là một sinh
                viên, mình luôn ưu tiên lựa chọn những sản phẩm có giá cả hợp
                lý. Và may mắn thay, khi mua điện thoại Xiaomi tại Di Động Việt,
                mình đã thực sự hài lòng với mức giá ưu đãi hơn so với các cửa
                hàng khác. Không những vậy, trải nghiệm mua sắm tại Di Động Việt
                cũng vô cùng tuyệt vời với đội ngũ nhân viên nhiệt tình, chu
                đáo, luôn sẵn sàng giải đáp mọi thắc mắc của mình. Nhờ vậy, mình
                đã có thể chọn được chiếc điện thoại ưng ý nhất”.
              </p>
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_17.png"
                alt=""
              />
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_18.png"
                alt=""
              />
              <img
                src="src/assets/images/Info_description_product/Xiaomi_Info_description/Xiaomi_19.png"
                alt=""
              />
            </>
          )}

          <Button onClick={toggleExpanded}>
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </Button>
        </>
      )}
    </>
  );
};

export default Xiaomi_information_product;
