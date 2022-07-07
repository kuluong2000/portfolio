/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import styles from "./portfolio.module.scss";
const cx = classNames.bind(styles);
export default function Portfolio() {
  const menu = [
    {
      title: "Trip Guide",
      image: require("../../assets/image/tripguide.gif"),
      path: "https://tripguide-kuluong2000.vercel.app/",
      description: "Đây là sản phẩm mình làm về  du lịch",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Ozone",
      image: require("../../assets/image/ozone.gif"),
      path: "https://kuluong2000.github.io/Generic/Ozone/?fbclid=IwAR0Qi3HR1tcMuQNSPEnp-pdW2ixDvuwp7N-oXyG3FixH8ySj-NTfknSt4t0",
      description: "Đây là sản phẩm mình làm về  thị trường bất động sản",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Portfolio",
      image: require("../../assets/image/avatar.jpg"),
      path: "https://portfolio-fzz0l0szj-kuluong2000.vercel.app/",
      description: "Đây là sản phẩm mình làm về  blog cá nhân của mình, trong đây tổng hợp bao gồm các sản phẩm mình đã tự tay xây dựng lên",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Restaurant",
      image: require("../../assets/image/restaurant.gif"),
      path: "https://kuluong2000.github.io/restaurant/",
      description: "Đây là sản phẩm mình làm về  Nhà hàng",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Baby Shop",
      image: require("../../assets/image/baby.gif"),
      path: "https://baby-shop-kuluong2000.vercel.app/",
      description: "Đây là sản phẩm mình làm về  shop thời trang cho trẻ em",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // ##################################################### //
  //  slide slider
  // ##################################################### //
  var settings = {
    className: "slick-portfolio",
    lazyLoad: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "20px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  // ##########################################################//
  // JSX RENDER
  // ##########################################################//
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("portfolio-main")}>
          <h2 className={cx("portfolio-subheader")}>Portfolio</h2>
          <h5 className={cx("portfolio-title")}>Những sản phẩm mình đã làm được</h5>
          <ul className={cx("portfolio-list")}>
            <Slider {...settings}>
              {menu.map((item, idx) => {
                return (
                  <li key={idx} className={cx("portfolio-item")}>
                    <a href={item.path} className={cx("portfolio-link")} target="_blank" rel="noreferrer">
                      <div className={cx("portfolio-top")}>
                        <img src={item.image} alt="" />
                        <p className={cx("portfolio-name")}>{item.title}</p>
                        <p className={cx("portfolio-desc")}>{item.description}</p>
                      </div>
                      <div className={cx("portfolio-tags")}>
                        {item.tags.map((tag, idx) => (
                          <span>{tag}</span>
                        ))}
                      </div>
                    </a>
                  </li>
                );
              })}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}
