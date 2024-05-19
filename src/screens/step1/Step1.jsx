import { Button, Col, Flex, Form, Row, Tag } from "antd";
import Input from "../../components/input/Input";
import useStep1 from "./useStep1";
import UploadImage from "../../components/upload/UploadImage";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";

export const Step1 = () => {
  const {
    formik,
    setCurrentStep,
    skillInput,
    setSkillInput,
    handleAddSkill,
    handleRemoveSkill,
    contextHolder,
  } = useStep1();

  return (
    <Form name="vertical_form" layout="vertical">
      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="Mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.mobile}
            touched={formik.touched.mobile}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="Street"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.street}
            touched={formik.touched.street}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.city}
            touched={formik.touched.city}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Input
            label="Country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.country}
            touched={formik.touched.country}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Input
            label="Linkedin"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.linkedin}
            touched={formik.touched.linkedin}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Input
            label="Github"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.github}
            touched={formik.touched.github}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Input
            label="Position"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.position}
            touched={formik.touched.position}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Flex gap={16} align="end">
            <Input
              label="Skills"
              name="skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              // onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.skills}
              touched={formik.touched.skills}
            />
            <Button
              icon={<PlusOutlined />}
              style={{ marginBottom: 24 }}
              onClick={() => handleAddSkill(skillInput)}
              disabled={!skillInput}
            />
          </Flex>
        </Col>

        <Col span={24}>
          <Flex gap="4px 0" wrap style={{ marginBottom: "2rem" }}>
            {formik.values.skills?.map((skill, index) => (
              <Tag
                color="cyan"
                closable
                key={index}
                onClose={() => handleRemoveSkill(skill)}
              >
                {skill}
              </Tag>
            ))}
          </Flex>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <UploadImage onChange={(value) => formik.setFieldValue("image", value[0])} />
        </Col>
      </Row>

      {/* prev and next buttons */}
      <Navigation
        handleNext={formik.handleSubmit}
      />

      {contextHolder}
    </Form>
  );
};
