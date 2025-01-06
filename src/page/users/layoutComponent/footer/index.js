import React, { memo } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_info">
              <h2 className="footer_info_logo">SIVI SHOP</h2>
              <ul>
                <li>
                  Địa chỉ:<span> 213 Dương Đình Nghệ</span>
                </li>
                <li>
                  Phone:<span> 0698755452</span>
                </li>
                <li>
                  Email:<span> CodeSIVI@GMAIL.COM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_info">
              <h4 className="footer_info_shop">Cửa hàng</h4>
              <div className="row">
                <ul className="col-6">
                  <li>
                    <Link to={""}>Liên hệ</Link>
                  </li>
                  <li>
                    <Link to={""}>Thông tin về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={""}>Sản phẩm kinh doanh</Link>
                  </li>
                </ul>
                <ul className="col-6">
                  <li>
                    <Link to={""}>Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to={""}>Giỏ hàng</Link>
                  </li>
                  <li>
                    <Link to={""}>Danh sách ưu thích</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer_widget">
              <h4>Khuyến mãi & ưu đãi</h4>
              <p>Đăng ký nhập thông tin tại đây</p>
              <form action="#">
                <div className="input_group">
                  <input type="text" placeholder="Nhập thông tin" />
                  <button type="submit" className="button_submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer_widget_social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <SiInstagram />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
