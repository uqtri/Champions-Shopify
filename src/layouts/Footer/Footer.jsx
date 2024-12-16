import React from "react";
import FooterDetailContent from "./FooterDetailContent/FooterDetailContent";
import ContactIcons from "../../components/ContactIcons/ContactIcons";

export default function Footer() {
  return (
    <div className="p-3 py-5 mt-auto">
      <div className="row">
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center">
          <p className="h2 nav-brand fw-bolder">Champions</p>
          <p className="">SIGN UP FOR 15% OFF</p>
          <div className="w-100 mb-2">
            <input
              placeholder="Email"
              className="w-100 w-lg-50 fw-lighter px-3"
            />
          </div>
          <div className="">
            <ContactIcons />
          </div>
        </div>
        <div className="col-lg-2 col-12">
          <FooterDetailContent
            array={[
              "QUICK LINKS 1",
              "Home",
              "About Us",
              "Contact Us",
              "Blog",
              "Faq",
            ]}
          />
        </div>
        <div className="col-lg-2 col-12">
          {" "}
          <FooterDetailContent
            array={[
              "QUICK LINKS 2",
              "Home",
              "About Us",
              "Contact Us",
              "Blog",
              "Faq",
            ]}
          />
        </div>
        <div className="col-lg-2 col-12">
          {" "}
          <FooterDetailContent
            array={[
              "QUICK LINKS 3",
              "Home",
              "About Us",
              "Contact Us",
              "Blog",
              "Faq",
            ]}
          />
        </div>
        <div className="col-lg-2 col-12">
          {" "}
          <FooterDetailContent
            array={[
              "QUICK LINKS 4",
              "Home",
              "About Us",
              "Contact Us",
              "Blog",
              "Faq",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
