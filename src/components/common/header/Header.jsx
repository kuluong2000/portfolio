import React from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
const cx = classNames.bind(styles);
export default function Header() {
  return (
    <header className={cx("header")}>
      <div className="container">
        <svg height="50px">
          <symbol id="s-text">
            <text textAnchor="start" x="0%" y="100%">
              Hữu Lương
            </text>
          </symbol>
          <g className={cx("g-ants")}>
            <use xlinkHref="#s-text" className={cx("text-copy")} />
            <use xlinkHref="#s-text" className={cx("text-copy")} />
            <use xlinkHref="#s-text" className={cx("text-copy")} />
            <use xlinkHref="#s-text" className={cx("text-copy")} />
            <use xlinkHref="#s-text" className={cx("text-copy")} />
          </g>
        </svg>
      </div>
    </header>
  );
}
