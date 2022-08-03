import React, { useEffect } from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";

const Blog = (props) => {

  useEffect(() => {
    props.changeHeaderHandler(5);
  }, [props]);

  return (
    <div className="col-10 offset-1">
      <div className="row">
        <div className="card col-5 mr-5" style={{paddingBottom: 0}}>
          <img
            src="https://file.hstatic.net/1000379507/file/ngan-phong-rop-sung-chan-khi-chay-bo_2_e11546dca473407da476bcbdfbf730c0_grande.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              6 MẸO NHỎ NGĂN BÀN CHÂN BỊ SƯNG VÀ PHỒNG RỘP KHI MANG GIÀY CHẠY BỘ
            </h5>
            <p className="card-text">
              Chắc hẳn đã không ít lần bạn gặp phải tình trạng sưng tấy, hay
              thậm chí phồng rộp, tổn thương bàn chân khi mang giày nói chung và
              giày chạy bộ nói riêng, đặc biệt là với giày mới mua. Để tránh
              được sự khó chịu không đáng có gây ảnh hưởng đến chất lượng tập
              luyện, việc chọn giày chạy tốt, êm, vừa size là tất yếu. Bên cạnh
              đó, BF365 cũng sẽ chia sẻ thêm một vài kinh nghiệm giúp ngăn tình
              trạng phồng rộp, sưng tấy khi mang giày chạy bộ nhé.
            </p>
            <NavLink to="#" className="btn btn-primary" >
              Đọc tiếp
            </NavLink>
          </div>
        </div>

        <div className="card col-5 ml-5">
          <img
            src="https://file.hstatic.net/1000379507/file/giay-sneaker-trang-chinh-hang-trendy-zx-2k-boost_92cdaa3ba28e4ce7afc111657a004d5f_grande.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              CHỌN SNEAKER TRẮNG CHO NAM CHÍNH HÃNG MIX ĐỒ SIÊU TRENDY HÈ 2022
            </h5>
            <p className="card-text">
              Không hề ngạc nhiên khi những đôi Sneaker trắng thoải mái, dễ dàng
              phối được nhiều style khác nhau mà vẫn vô cùng nổi bật và luôn
              thời thượng lại được các tín đồ thời trang trên khắp thế giới ưu
              ái đến vậy. Mùa hè sôi động đã sang, bạn sẽ ưu tiên lựa chọn phong
              cách thật thoải mái, năng động với quần short, áo thun hay vẫn
              luôn lịch lãm cùng sơ mi và quần âu. Dù kết hợp với loại trang
              phục nào, sneaker trắng vẫn luôn là lựa chọn lý tưởng, không mất
              nhiều thời gian cân nhắc chọn màu để phối đồ mà hiệu quả thu hút
              vẫn cực kỳ cao. Cùng chọn ngay mẫu sneaker trắng yêu thích tại
              BF365 để dịp hè năm nay đi đâu cũng thật lung linh nhé.
            </p>
            <NavLink to="#" className="btn btn-primary">
            Đọc tiếp
            </NavLink>
          </div>
        </div>

        <div className="card col-5 mr-5">
          <img
            src="https://file.hstatic.net/1000379507/file/vi-sao-can-luu-y-trong-luong-de-mua-giay-chay-bo-tot-2_1e039fe8e41142f49cbefd95e32db4ed_grande.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              MỘT ĐÔI GIÀY CHẠY BỘ TỐT THƯỜNG CÓ TRỌNG LƯỢNG BAO NHIÊU?
            </h5>
            <p className="card-text">
              Phần lớn người mua giày chạy bộ thường ưu tiên các tiêu chí êm,
              nhẹ, đàn hồi tốt khi lựa chọn giày chạy bộ. Tuy nhiên, các hãng
              sản xuất cũng đưa ra rất nhiều lựa chọn về trọng lượng đối với các
              loại giày chạy bộ khác nhau. Vậy giày chạy bộ tốt thường nặng bao
              nhiêu? Thử cùng BF365 giải đáp thắc mắc này để tìm được đôi giày
              chạy bộ chất lượng với trọng lượng phù hợp nhé.
            </p>
            <NavLink to="#" className="btn btn-primary">
            Đọc tiếp
            </NavLink>
          </div>
        </div>

        <div className="card col-5 ml-5">
          <img
            src="https://file.hstatic.net/1000379507/file/meo-nho-lam-kho-giay-bang-giay-bao_958a90feef2846a18226ba8da0ef23c8_grande.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              MẸO LÀM KHÔ GIÀY ƯỚT CỰC NHANH CHÓNG ĐỂ MÙA MƯA KHÔNG CÒN LÀ TRỞ
              NGẠI
            </h5>
            <p className="card-text">
              Mùa hè đến cũng là mùa của những cơn mưa rào bất chợt xuất hiện,
              kéo theo nhiều bất tiện khi giày dép bị ướt sau khi đi mưa. Mang
              giày ướt không chỉ gây khó chịu mà còn ảnh hưởng đến tuổi thọ của
              giày cũng như có hại cho sức khỏe. Ngoài ra, với tần suất mưa liên
              tục, chắc chắn nhiều bạn cũng đã từng gặp tình trạng giày chưa kịp
              khô để tiếp tục sử dụng. Để cải thiện tình trạng này, hãy cùng
              tham khảo những mẹo làm khô giày thật nhanh chóng trong mùa mưa
              nhé.
            </p>
            <NavLink to="#" className="btn btn-primary">
              Đọc tiếp
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
