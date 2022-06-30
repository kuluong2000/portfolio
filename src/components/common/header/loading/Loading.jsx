import React from "react";
import classNames from "classnames/bind";
import styles from "./loading.module.scss";
const cx = classNames.bind(styles);
export default function Loading() {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("content")}>
        <h2>Hữu Lương</h2>
        <h2>Hữu Lương</h2>
      </div>
    </section>
  );
}
