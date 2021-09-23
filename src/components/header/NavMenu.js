import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              Beranda
            </Link>
          </li>
          {/* BRAND */}
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["brand"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  {/* NEW BRAND */}
                  <li className="mega-menu-title">
                   <a href="/#" onClick={e => e.preventDefault()}>Brand Baru</a>
                  </li>
                  {/* LOOP NEW BRAND HERE */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Unface
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Ethernal
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Erigo
                    </Link>
                  </li>
                  {/* END LOOP */}
                </ul>
              </li>
              <li>
                <ul>
                  {/* TOP BRAND */}
                  <li className="mega-menu-title">
                    <a href="/#" onClick={e => e.preventDefault()}>Brand Teratas</a>
                  </li>
                  {/* LOOP TOP BRAND HERE */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Unface
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Ethernal
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Erigo
                    </Link>
                  </li>
                  {/* END LOOP */}
                </ul>
              </li>
              <li>
                <ul>
                  {/* Other BRAND */}
                  <li className="mega-menu-title">
                    <a href="/#" onClick={e => e.preventDefault()}>Brand Lainnya</a>
                  </li>
                  {/* LOOP OTHER BRAND HERE */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Unface
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Ethernal
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/brand/:brandId"}>
                      Erigo
                    </Link>
                  </li>
                  {/* END LOOP */}
                </ul>
              </li>
            </ul>
          </li>
          {/* END BRAND */}
          {/* CATEGORY */}
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              Kategori
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              {/* COUNT LOOP COLLECTION FIRST */}
              <li>
                <ul>
                  {/* THEN LOOP COLLECTION */}
                  <li className="mega-menu-title">
                   <Link to={process.env.PUBLIC_URL + "/collection/:idCollection"}>
                   Pria
                    </Link>
                  </li>
                  {/* AFTER THAT< LOOP CATEGORIES INSIDE INDEX COLLECTION */}
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection/:idCollection/categories/:idCategories"}>
                      Baju
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection/:idCollection/categories/:idCategories"}>
                      Celana
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/collection/:idCollection/categories/:idCategories"}>
                      Sepatu
                    </Link>
                  </li>
                  {/* END LOOP CATEGORIES */}
                </ul>
              </li>
              {/* END COUNT */}
            </ul>
          </li>
          {/* END CATEGORY */}
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Semua Produk
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
