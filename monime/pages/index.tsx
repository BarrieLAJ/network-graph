import type { NextPage } from "next";
import styled from "styled-components";
import MonimeLogo from "../src/common/MonimeLogo";
import { Input, Space, Typography, Select, Divider, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
// import Head from 'next/head'
const { Option } = Select;
const { Title, Link, Text } = Typography;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 3em;
`;

const HeaderWrapper = styled.div`
  padding: 2em;
  width: 100%;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: max-content; */
`;
const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 20px;
`;

const Home: NextPage = () => {
  const selectCountryCode = (
    <Select
      defaultValue="SL"
      style={{
        borderRight: "none",
      }}
    >
      <Option value="SL">+232</Option>
    </Select>
  );
  return (
    <Wrapper>
      <PageWrapper>
        <HeaderWrapper>
          <MonimeLogo />
        </HeaderWrapper>
        <MainContent>
          <Space direction="vertical" size="large">
            <Title level={3} style={{ textAlign: "center" }}>
              Log in to your Monime <br /> account, wherever you are
            </Title>
            <Spacer />
            <Input
              style={{ borderLeft: "none", borderRadius: "100px" }}
              size="large"
              type="tel"
              placeholder="Mobile Number"
              addonBefore={selectCountryCode}
              formNoValidate
            />
            <Spacer />
            <Spacer />
            <Button
              // icon={<ArrowRightOutlined />}
              block
              size="large"
              type="primary"
              style={{
                borderRadius: "20px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: 90,
              }}
            >
              <Text style={{color: "white"}}>Next</Text>
              <ArrowRightOutlined style={{ marginTop: "5px" }} />
            </Button>
            <Link style={{ textAlign: "center", display: "block" }}>
              Don&lsquo;t have an account?
            </Link>
          </Space>
        </MainContent>
      </PageWrapper>
    </Wrapper>
  );
};

export default Home;
