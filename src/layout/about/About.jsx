import React from "react";
import classNames from "classnames/bind";
import styles from "./about.module.scss";
const cx = classNames.bind(styles);
export default function About() {
  return (
    <section className={cx("about")}>
      <div className="container">
        <div className={cx("about-main")}>
          <h2 className={cx("about-heading")}>About</h2>
          <div className={cx("about-content")}>
            <h5 className={cx("about-title")}>Thông tin học vấn</h5>
            <ul className={cx("about-list")}>
              <li className={cx("about-item")}>
                <p>Từ 28/3/2022 - 28/6/2022</p>
                <p>Thực tập tại công ty Mobifone</p>
              </li>
              <li className={cx("about-item")}>
                <p>Từ năm 2018-2022</p>
                <p>Là sinh viên trường đại học sư phạm kỹ thuật</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
