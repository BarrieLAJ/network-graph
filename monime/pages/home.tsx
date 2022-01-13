import { NextPage } from "next";
import Image from "next/image";
import Layout from "../src/common/Layout";
import {
  Row,
  Col,
  Avatar,
  Typography,
  Input,
  Select,
  Divider,
} from "antd";
import { Spacer } from "../src/common/Spacer";
import styled from "styled-components";
import AppButton from "../src/common/AppButton";
import { MultiInput } from "../src/common/MultiInput";

const { Title, Text, Link } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AvatarContainer = styled.div`
  position: absolute;
  top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

const Form = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 0 5px 1px rgba(116, 116, 116, 0.2);
  width: 480px;
  height: 480px;
  padding-bottom: 2em;
  margin-top: 55px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HomePage: NextPage = () => {
  const currencySelect = (
    <Select size="large" value="SLL">
      <Option value="SLL">SLL</Option>
      <Option value="USD">USD</Option>
    </Select>
  );
  return (
    <Layout navbg="#ffffff" navTextOnly navbar footered>
      <Row>
        <Col span={14}>
          <Row justify="center" wrap={false}>
            <Wrapper>
              <Form>
                <AvatarContainer>
                  <Avatar
                    size={110}
                    src={<Image src="/Picture.png" layout="fill" />}
                  />
                  <Spacer size={0.5} />
                  <Title level={4}>Sorieba Daffea</Title>
                </AvatarContainer>
                <Spacer size={9} />
                <Title level={4}>How much do you want to send?</Title>
                <Spacer size={4} />
                <MultiInput
                  type="text"
                  addonBefore={currencySelect}
                  placeholder="500000"
                  dir="rtl"
                  size="large"
                  style={{ width: "80%" }}
                />
                <Spacer size={2} />
                <TextArea
                  rows={3}
                  placeholder="Private message for Sorieba"
                  style={{ width: "80%", borderRadius: "5px" }}
                />
                <Spacer size={3} />
                <AppButton
                  block
                  size="large"
                  type="primary"
                  style={{
                    borderRadius: "20px",
                    width: "80%",
                  }}
                >
                  Send Sorieba SLL500,000
                </AppButton>
                <Spacer size={1} />
                <Text style={{ width: "70%", textAlign: "center" }}>
                  By making a payment, you agree to our
                </Text>
                <Link style={{ display: "block", textAlign: "center" }}>
                  General terms of Service
                </Link>
              </Form>
            </Wrapper>
          </Row>
        </Col>
        <Col span={10}>
          <Image src="/large.png" height="750px" width="721px" />
        </Col>
      </Row>
      <Divider style={{ margin: "16px 0" }} />
    </Layout>
  );
};

export default HomePage;
