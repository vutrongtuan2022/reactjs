import React, { memo } from "react";
import "./styles.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin, FaTwitter, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { formater } from "ultis/formater";
function Header() {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left">
            <ul>
              <li>
                <MdEmail />
                abudabi@gmail.com
              </li>
              <li>
                Miễn phí ship từ đơn{" "}
                <strong style={{ color: "#008874" }}>{formater(200000)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <SiInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaUserCircle />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
