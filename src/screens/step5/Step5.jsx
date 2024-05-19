import { Button, Col, Flex, Form, Row, Tag } from "antd";
import Input from "../../components/input/Input";
import useStep5 from "./useStep5";
import { PlusOutlined } from "@ant-design/icons";
import Navigation from "../../components/navigation/Navigation";

export const Step5 = () => {
  const {
    formik,
    languageInput,
    setLanguageInput,

    achievementInput,
    setAchievementInput,

    certificateInput,
    setCertificateInput,
    
    handleAddLanguage,
    handleRemoveLanguage,

    handleAddAchievement,
    handleRemoveAchievement,

    handleAddCertificate,
    handleRemoveCertificate,
  } = useStep5();

  return (
    <Form name="vertical_form" layout="vertical">
      <Row gutter={16}>
        <Col span={23}>
          <Flex gap={16} align="end">
            <Input
              label="languages"
              name="languages"
              value={languageInput}
              onChange={(e) => setLanguageInput(e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.errors.languages}
              touched={formik.touched.languages}
            />
            <Button
              icon={<PlusOutlined />}
              style={{ marginBottom: 24 }}
              onClick={() => handleAddLanguage(languageInput)}
              disabled={!languageInput}
            />
          </Flex>
        </Col>

        <Col span={23}>
          <Flex gap="4px 0" wrap style={{ marginBottom: "2rem" }}>
            {formik.values?.languages?.map((lang, index) => (
              <Tag
                color="cyan"
                closable
                key={index}
                onClose={() => handleRemoveLanguage(lang)}
              >
                {lang}
              </Tag>
            ))}
          </Flex>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={23}>
          <Flex gap={16} align="end">
            <Input
              label="achievements"
              name="achievements"
              value={achievementInput}
              onChange={(e) => setAchievementInput(e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.errors.achievements}
              touched={formik.touched.achievements}
            />
            <Button
              icon={<PlusOutlined />}
              style={{ marginBottom: 24 }}
              onClick={() => handleAddAchievement(achievementInput)}
              disabled={!achievementInput}
            />
          </Flex>
        </Col>

        <Col span={23}>
          <Flex gap="4px 0" wrap style={{ marginBottom: "2rem" }}>
            {formik.values?.achievements?.map((achieve, index) => (
              <Tag
                color="cyan"
                closable
                key={index}
                onClose={() => handleRemoveAchievement(achieve)}
              >
                {achieve}
              </Tag>
            ))}
          </Flex>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={23}>
          <Flex gap={16} align="end">
            <Input
              label="certificates"
              name="certificates"
              value={certificateInput}
              onChange={(e) => setCertificateInput(e.target.value)}
              onBlur={formik.handleBlur}
              error={formik.errors.certificates}
              touched={formik.touched.certificates}
            />
            <Button
              icon={<PlusOutlined />}
              style={{ marginBottom: 24 }}
              onClick={() => handleAddCertificate(certificateInput)}
              disabled={!certificateInput}
            />
          </Flex>
        </Col>

        <Col span={23}>
          <Flex gap="4px 0" wrap style={{ marginBottom: "2rem" }}>
            {formik.values?.certificates?.map((certificate, index) => (
              <Tag
                color="cyan"
                closable
                key={index}
                onClose={() => handleRemoveCertificate(certificate)}
              >
                {certificate}
              </Tag>
            ))}
          </Flex>
        </Col>
      </Row>

      <Navigation handleNext={formik.handleSubmit} />
    </Form>
  );
};
