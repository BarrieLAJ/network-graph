import React from "react";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Divider, Row, Space, Typography } from "antd";
import { NormalLogo } from "./NormalLogo";
import { Spacer } from "./Spacer";
import styled from "styled-components";

const { Link, Text } = Typography;

const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 0.6em;
`;

const SocialIconsUl = styled.ul`
  list-style: none;
`;

export const Footer = () => {
  return (
    // <Row>
    <FooterWrapper>
      <Row justify="space-between">
        <Col>
          <Space size={40}>
            <NormalLogo />
            <Link
              style={{
                color: "#000",
                marginTop: "-0.4em",
                display: "inline-block",
              }}
              href="#"
            >
              Disclaimer
            </Link>
            <Link
              style={{
                color: "#000",
                marginTop: "-0.4em",
                display: "inline-block",
              }}
              href="#"
            >
              Cookies
            </Link>
          </Space>
        </Col>
        <Col>
          <SocialIconsUl>
            <Space size="small">
              <li>
                <FacebookFilled
                  href="https://www.facebook.com/monime.net"
                  size={40}
                  style={{ color: "#AAAFB6", fontSize: "20px" }}
                />
              </li>
              <li>
                <TwitterOutlined
                  href="https://twitter.com/monime_net"
                  style={{ color: "#AAAFB6", fontSize: "20px" }}
                />
              </li>
              <li>
                <YoutubeFilled
                  href="https://youtube.com/monime"
                  style={{ color: "#AAAFB6", fontSize: "20px" }}
                />
              </li>
              <li>
                <LinkedinFilled
                  href="https://www.linkedin.com/company/monime"
                  style={{ color: "#AAAFB6", fontSize: "20px" }}
                />
              </li>
              <li>
                <InstagramFilled
                  href="https://www.instagram.com/monime.net"
                  style={{ color: "#AAAFB6", fontSize: "20px" }}
                />
              </li>
            </Space>
          </SocialIconsUl>
        </Col>
      </Row>
      <Divider style={{ margin: "16px 0" }} />
      <Row>
        <Text style={{ color: "#aaafb6" }}>
          &copy;2021 Monime Limited, All rights reserved.
        </Text>
        <Spacer size={0.1} />
      </Row>
    </FooterWrapper>
    // </Row>
  );
};
