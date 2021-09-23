import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            Beranda
          </Link>
        </li>
        {/* BRAND */}
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/brand"}>Brand</Link>
          <ul className="sub-menu">
            {/* NEW BRAND */}
            <li className="menu-item-has-children">
              <a href="/#" onClick={e => e.preventDefault()}>Brand Baru</a>
              <ul className="sub-menu">
                {/* LOOP NEW BRAND */}
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Unface
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Ethernal
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Erigo
                  </Link>
                </li>
                {/* END NEW BRAND */}
              </ul>
            </li>
            {/* END NEW BRAND */}

            {/* TOP BRAND */}
            <li className="menu-item-has-children">
              <a href="/#" onClick={e => e.preventDefault()}>Brand Teratas</a>
              <ul className="sub-menu">
                {/* LOOP TOP BRAND */}
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Erigo
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Ethernal
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Ventela
                  </Link>
                </li>
                {/* END LOOP TOP BRAND */}
              </ul>
            </li>
            {/* END TOP BRAND */}

            {/* OTHER BRAND */}
            <li className="menu-item-has-children">
              <a href="/#" onClick={e => e.preventDefault()}>Brand Lainnya</a>
              <ul className="sub-menu">
                {/* LOOP OTHER BRAND */}
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Ventela
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Ethernal
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/brand/:idBrand"}>
                    Unface
                  </Link>
                </li>
                {/* END LOOP OTHER BRAND */}
              </ul>
            </li>
            {/* END OTHER BRAND */}
          </ul>
        </li>
        {/* END BRAND */}

        {/* CATEGORIES */}
        <li className="menu-item-has-children">
          <a href="/#" onClick={e => e.preventDefault()}>Kategori</a>
          <ul className="sub-menu">
            {/* COUNT LOOP COLLECTION FIRST */}
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/collection/:idCollection"}>Pria</Link>
              <ul className="sub-menu">
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
                {/* END LOOP CATEGORIES INSIDE INDEX COLLECTION */}
              </ul>

            </li>
          </ul>
        </li>
        {/* END CATEGORIES */}

        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            Semua Produk
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
