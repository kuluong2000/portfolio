import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName(cx("main-content-title"));
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-type");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".main-content-title > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <section className={cx("wrapper")}>
      <div className="container">
        <div className={cx("main")}>
          <div className={cx("main-avatar")}>
            <img src={require("../../assets/image/avatar.jpg")} alt="H???u L????ng" />
          </div>
          <div className={cx("main-content")}>
            <Link to="/" className={cx("main-content-title")} data-period="2000" data-type='[ "Hi, Im H???u L????ng.", "I am FE Developer.", "I Love to Develop." ]'>
              <span className="wrap"></span>
            </Link>

            <p className={cx("main-content-desc")}>
              Ch??o m???i ng?????i m??nh t??n l?? H???u L????ng, hi???n t???i m??nh ??ang l?? sinh vi??n n??m cu???i c???a tr?????ng ?????i h???c <span> S?? Ph???m k??? Thu???t </span>. V???i ni???m ??am m?? v??? l???p tr??nh v?? mong mu???n th??nh m???t FE Developer, m??nh ???? t??m hi???u v?? tham gia v??o m???t s???
              kh??a h???c v??? Html, Css, React v?? ???? c?? m???t s??? d??? ??n nh??? c???a c?? nh??n
            </p>
            <Link to="/" className={cx("main-content-action")}>
              <p className={cx("main-content-action-name")}>Portfolio</p>
              <div className={cx("main-content-action-arrow")}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(Home);
