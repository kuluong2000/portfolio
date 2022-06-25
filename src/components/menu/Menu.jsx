import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import { faBriefcase, faEnvelope, faHome, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <ul className={cx("menu")}>
      <li className={cx("menu-item")}>
        <Link to="/" className={cx("menu-link")}>
          <FontAwesomeIcon className={cx("menu-icon")} icon={faHome}></FontAwesomeIcon>
          <p className={cx("menu-item-name")}>Home</p>
        </Link>
      </li>
      <li className={cx("menu-item")}>
        <Link to="/portfolio" className={cx("menu-link")}>
          <FontAwesomeIcon className={cx("menu-icon")} icon={faBriefcase}></FontAwesomeIcon>
          <p className={cx("menu-item-name")}>Portfolio</p>
        </Link>
      </li>
      <li className={cx("menu-item")}>
        <Link to="/graduate" className={cx("menu-link")}>
          <FontAwesomeIcon className={cx("menu-icon")} icon={faUserGraduate}></FontAwesomeIcon>
          <p className={cx("menu-item-name")}>Học vấn </p>
        </Link>
      </li>
      <li className={cx("menu-item")}>
        <Link to="/contact" className={cx("menu-link")}>
          <FontAwesomeIcon className={cx("menu-icon")} icon={faEnvelope}></FontAwesomeIcon>
          <p className={cx("menu-item-name")}>Contact</p>
        </Link>
      </li>
    </ul>
  );
}
