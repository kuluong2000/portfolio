import React from "react";
import classNames from "classnames/bind";
import styles from "./contact.module.scss";
const cx = classNames.bind(styles);
export default function Contact() {
  return (
    <section className={cx("contact")}>
      <div className="container">
        <div className={cx("contact-main")}>
          <div className={cx("contact-box")}>
            <h5 className={cx("contact-subheading")}>Liên hệ</h5>
            <h2 className={cx("contact-heading")}>Liên hệ với tớ</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
