import { NextPage } from "next";
import Image from "next/image";
import Layout from "../src/common/Layout";
import { Row, Col, Avatar, Typography, Input, Select, Divider } from "antd";
import { Spacer } from "../src/common/Spacer";
import styled from "styled-components";
import AppButton from "../src/common/AppButton";

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
  top: -70px;
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
  height: 420px;
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
                    size={70}
                    src={<Image src="/Picture.png" layout="fill" />}
                  />
                  <Title level={4}>Sorieba Daffea</Title>
                </AvatarContainer>
                <Spacer size={4} />
                <Title level={4}>How much do you want to send?</Title>
                <Spacer size={4} />
                <Input
                  type="text"
                  addonBefore={currencySelect}
                  bordered
                  placeholder="500000"
                  dir="rtl"
                  size="large"
                  style={{ width: "80%" }}
                />
                <Spacer size={2} />
                <TextArea
                  rows={3}
                  placeholder="Private message for Sorieba"
                  style={{ width: "80%" }}
                />
                <Spacer size={3} />
                <AppButton
                  block
                  size="large"
                  type="default"
                  style={{
                    borderRadius: "20px",
                    width: "80%",
                    boxShadow: "5px 6px 0 0 #008CFF",
                  }}
                >
                  Send Sorieba SLL500,000
                </AppButton>
                <Spacer size={1} />
                <Text style={{ width: "70%", textAlign: "center" }}>
                  By making a payment, you agree to our
                  <Link>General terms of Service</Link>
                </Text>
              </Form>
            </Wrapper>
          </Row>
        </Col>
        <Col span={10}>
          <Image src="/large.png" height="600px" width="621px" />
        </Col>
      </Row>
      <Divider />
    </Layout>
  );
};

export default HomePage;
