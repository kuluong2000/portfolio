import PropTypes from "prop-types";
import React from "react";
import styles from "./globalStyle.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default function GlobalStyle({ children }) {
  return <div className="wrapper">{children}</div>;
}
GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};
