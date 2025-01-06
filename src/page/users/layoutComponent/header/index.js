import React, { memo, useState } from "react";
import "./styles.scss";
import {
  AiOutlineFacebook,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin, FaTwitter, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { formater } from "ultis/formater";
import { ROUTER } from "ultis/router";
function Header() {
  const [isShowCategories, setIsShowCategories] = useState(true);
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTER.USER.HOME,
      // , id: 0
    },
    {
      name: "Cửa hàng",
      path: ROUTER.USER.PRODUCT,
      // , id: 1
    },
    {
      name: "Sản phẩm",
      path: "",
      // id: 2,
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
          // , uuid: 0
        },
        {
          name: "Rau củ",
          path: "",
          // , uuid: 1
        },
        {
          name: "Thức ăn nhanh",
          path: "",
          // , uuid: 2
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTER.USER.ARTICLE,
      // , id: 3
    },
    // { name: "", path: "" },
    // { name: "", path: "" },
    {
      name: "Giỏ hàng",
      path: ROUTER.USER.CART,
      // , id: 4
    },
  ]);

  return (
    <>
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
                  <strong style={{ color: "#008874" }}>
                    {formater(200000)}
                  </strong>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3 ">
            <div className="header_logo">
              <h1>SIVI Code</h1>
            </div>
          </div>
          <div className="col-xl-6 ">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu?.child && (
                      <ul className="header_menu_dropdown">
                        {menu?.child.map((child, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={child?.path}>{child?.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 ">
            {" "}
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formater(1200000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setIsShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                <li>
                  <Link to="#">Shop bán thịt</Link>
                </li>
                <li>
                  <Link to="#">Shop bán rau củ</Link>
                </li>
                <li>
                  <Link to="#">Shop bán nước trái cây</Link>
                </li>
                <li>
                  <Link to="#">Shop bán trái cây</Link>
                </li>
                <li>
                  <Link to="#">Shop bán hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form action="#">
                  <input type="text" placeholder="Bạn đang tìm gì..." />
                  <button type="submit" className="button_search">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>0528.454.545</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero_item">
              <div className="hero_text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
