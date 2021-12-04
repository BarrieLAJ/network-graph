import React from "react";
import styled from "styled-components";
import MonimeLogo from "./MonimeLogo";
import { Row, Col } from "antd";
import { Navbar } from "./Navbar";
import { NormalLogo } from "./NormalLogo";
import { Footer } from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

interface HeaderProps {
  bgColor?: string;
}

const HeaderWrapper = styled.div<HeaderProps>((props) => ({
  width: "100%",
  backgroundColor: props.bgColor,
}));

const HeaderinnerWrapper = styled.div`
  padding: 1em 5em 3em 5em;
  width: 95%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const Layout = (props: {
  logoColor?: string;
  navbg?: string;
  navbar?: boolean;
  navTextOnly: boolean;
  footered: boolean;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Wrapper>
      <PageWrapper>
        <Row>
          <HeaderWrapper bgColor={props.navbg}>
            <HeaderinnerWrapper>
              {!props.navTextOnly ? (
                <MonimeLogo fillColor={props.logoColor} />
              ) : (
                <NormalLogo />
              )}
              {props.navbar && <Navbar />}
            </HeaderinnerWrapper>
          </HeaderWrapper>
        </Row>
        <Row>
          <Col span={24}>{props.children}</Col>
        </Row>
        {props.footered && <Footer />}
      </PageWrapper>
    </Wrapper>
  );
};

export default Layout;
