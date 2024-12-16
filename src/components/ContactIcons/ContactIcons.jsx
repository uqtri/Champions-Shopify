import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "../../assets/ContactIcons/index";
export default function ContactIcons() {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ width: "10rem" }}
    >
      <Facebook />
      <Instagram />
      <Pinterest />
      <Twitter />
    </div>
  );
}
