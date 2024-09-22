import React, { useState } from "react";
import FooterBrand from "./subcomponets/FooterBrand";
import FooterDescription from "./subcomponets/FooterDescription";
import FooterNav from "./subcomponets/FooterNav";
import FooterScMedia from "./subcomponets/FooterScMedia";

const Footer = ({ children }: any) => {};

Footer.Brand = FooterBrand;
Footer.Description = FooterDescription;
Footer.Nav = FooterNav;
Footer.ScMedia = FooterScMedia;

export default Footer;
