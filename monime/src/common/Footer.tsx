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
    <Row>
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
                    size={40}
                    style={{ color: "#AAAFB6", fontSize: "20px" }}
                  />
                </li>
                <li>
                  <TwitterOutlined
                    style={{ color: "#AAAFB6", fontSize: "20px" }}
                  />
                </li>
                <li>
                  <YoutubeFilled
                    style={{ color: "#AAAFB6", fontSize: "20px" }}
                  />
                </li>
                <li>
                  <LinkedinFilled
                    style={{ color: "#AAAFB6", fontSize: "20px" }}
                  />
                </li>
                <li>
                  <InstagramFilled
                    style={{ color: "#AAAFB6", fontSize: "20px" }}
                  />
                </li>
              </Space>
            </SocialIconsUl>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Text style={{ color: "#aaafb6" }}>
            &copy;2021 Monime Limited, All rights reserved.
          </Text>
          <Spacer size={2} />
        </Row>
      </FooterWrapper>
    </Row>
  );
};
