import React from "react";
import styled from "styled-components";
import AppButton from "./AppButton";

const NavUL = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  gap: 2em;
  margin-top: 1em;
`;

export const Navbar = () => {
  return (
    <NavUL>
      <li>
        <AppButton style={{ color: "#000" }} type="link" href="#">
          Blog
        </AppButton>
      </li>
      <li>
        <AppButton style={{ color: "#000" }} type="link" href="#">
          Careers
        </AppButton>
      </li>
      <li>
        <AppButton style={{ color: "#000" }} type="link" href="#">
          Press
        </AppButton>
      </li>
      <li>
        <AppButton style={{ borderRadius: "20px" }} type="default" href="#">
          Get Started
        </AppButton>
      </li>
    </NavUL>
  );
};
