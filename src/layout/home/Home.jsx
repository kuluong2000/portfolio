import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import styles from "./home.module.scss";
const cx = classNames.bind(styles);
export default function Home() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

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
    var elements = document.getElementsByClassName(cx("main-content-title"));
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".main-content-title > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  return (
    <section className={cx("wrapper")}>
      <div className="container">
        <div className={cx("main")}>
          <div className={cx("main-avatar")}>
            <img src={require("../../assets/image/avatar.jpg")} alt="Hữu Lương" />
          </div>
          <div className={cx("main-content")}>
            <Link to="/" className={cx("main-content-title")} data-period="2000" data-type='[ "Hi, Im Hữu Lương.", "I am FE Developer.", "I Love to Develop." ]'>
              <span className="wrap"></span>
            </Link>

            <p className={cx("main-content-desc")}>
              Chào mọi người mình tên là Hữu Lương, hiện tại mình đang là sinh viên năm cuối của trường đại học <span> Sư Phạm kỹ Thuật </span>. Với niềm đam mê về một FE Developer, mình đã tìm hiểu và tham gia vào một số khóa học về Html, Css, React
              và đã có một số dự án nhỏ của cá nhân
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
      <Menu></Menu>
    </section>
  );
}