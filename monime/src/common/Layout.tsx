import React from "react";
import styled from "styled-components";
import MonimeLogo from "./MonimeLogo";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* margin: 0 auto; */
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* padding: 0 3em; */
`;

interface HeaderProps {
  bgColor?: string;
}

const HeaderWrapper = styled.div<HeaderProps>((props) => ({
  padding: "2em 5em 3em 5em",
  width: "100%",
  backgroundColor: props.bgColor,
}));

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: max-content; */
`;

const Layout = (props: {
  logoColor?: string;
  navbg?: string;
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
        <HeaderWrapper bgColor={props.navbg}>
          <MonimeLogo fillColor={props.logoColor} />
        </HeaderWrapper>
        <MainContent>{props.children}</MainContent>
      </PageWrapper>
    </Wrapper>
  );
};

export default Layout;
