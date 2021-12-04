import type { NextPage } from "next";

import { Input, Space, Typography, Select, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Layout from "../src/common/Layout";
import AppButton from "../src/common/AppButton";
const { Option } = Select;
const { Title, Link } = Typography;

import { Spacer } from "../src/common/Spacer";

const Home: NextPage = () => {
  const selectCountryCode = (
    <Select
      defaultValue="SL"
      style={{
        borderRight: "none",
        borderRadius: "20px",
      }}
    >
      <Option value="SL">+232</Option>
    </Select>
  );
  return (
    <Layout navTextOnly={false} navbg="#ffffff" footered={false}>
      <Row>
        <Col span={12} offset={10}>
          <Space direction="vertical" size="large">
            <Title level={3} style={{ textAlign: "center" }}>
              Log in to your Monime <br /> account, wherever you are
            </Title>
            <Spacer size={2} />
            <Input
              style={{ borderLeft: "none", borderRadius: "100px" }}
              size="large"
              type="tel"
              placeholder="Mobile Number"
              addonBefore={selectCountryCode}
            />
            <Spacer size={3} />
            <AppButton
              rightIcon={<ArrowRightOutlined style={{ marginTop: "5px" }} />}
              block
              size="large"
              type="primary"
              style={{
                borderRadius: "20px",
              }}
            >
              Next
            </AppButton>
            <Link style={{ textAlign: "center", display: "block" }}>
              Don&lsquo;t have an account?
            </Link>
          </Space>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
