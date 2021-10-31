import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../src/common/Layout";
import { Typography } from "antd";

const { Title, Link } = Typography;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  top: -47px;
  background-color: white;
  width: 75%;
  margin: -54px 2em;
  padding: 2.8em 4.5em;
`;

const LeftContent = styled.div`
  text-align: left;
  color: #090a0a;
  padding-top: 2px; ;
`;

const RightContent = styled.div`
  text-align: left;
  padding-top: 4px;
  justify-self: center;
  flex-grow: 0;
`;
const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 20px;
`;

const OrderedList = styled.ol`
  font-size: medium;
  font-weight: 400;
  margin-left: -1em;
  li{
    margin-top: 0.4em;
    margin-bottom: 0.4em ;
  }
`;

const QrLogin: NextPage = () => {
  return (
    <Layout logoColor="#ffffff" navbg="#388DFF">
      <Content>
        <LeftContent>
          <Title level={3}>To use Monime on your computer:</Title>
          <Spacer />
          <OrderedList>
            <li>Open Monime on your phone</li>
            <li>Tap Setings and select Linked Devices</li>
            <li>Point your phone to this screen and the capture the code</li>
          </OrderedList>
          <Spacer />
          <Spacer />
          <Link  strong>Need help to get started?</Link>
        </LeftContent>
        <RightContent>
          <img src="./qr-code.png" height="250px" width="260px" />
        </RightContent>
      </Content>
    </Layout>
  );
};

export default QrLogin;
