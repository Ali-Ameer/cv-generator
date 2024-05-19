import { Button, Flex, Image, Radio, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

export const Onboarding = ({ onClick }) => {
  return (
    <Content style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      <Flex flex={1} justify="center" align="flex-start">
        <Typography.Title level={3} style={{ fontWeight: 400 }}>
          Welcome to Our Cv Builder
        </Typography.Title>
      </Flex>

      {/* <Flex flex={1} justify="center" align="flex-start" gap={16}> */}
      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Image src="/src/assets/images/welcome.svg" alt="" preview={false} />

        <Typography.Text color="secondary">
          Choose the language of your cv content:
        </Typography.Text>

        <Radio.Group>
          <Radio.Button value="start" type="primary" checked={true}>
            English
          </Radio.Button>
          <Radio.Button value="end">Arabic</Radio.Button>
        </Radio.Group>

        <Button
          type="primary"
          shape="round"
          onClick={onClick}
          style={{ padding: "4px 28px" }}
        >
          Let's Start
        </Button>
      </Space>
      {/* </Flex> */}
    </Content>
  );
};
