import { Row, Col, Typography, Space, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./template1Style.css";
import useStep8 from "./useStep8";
import { forwardRef } from "react";

const { Title, Text } = Typography;

export const Template1 = forwardRef((props, ref) => {
  const { formData } = useStep8();
  const {
    step1: {
      name = "",
      email = "",
      mobile = "",
      street = "",
      city = "",
      country = "",
      linkedin = "",
      github = "",
      position = "",
      skills = [],
      image = "",
    } = {},
    step2 = [],
    step3 = [],
    step4 = [],
    step5: { languages = [], achievements = [], certificates = [] } = {},
    step6: { color = { color: "#1677ff" } } = {},
    step7: { templateType = {} } = {},
  } = formData;

  console.log(languages);
  return (
    <div className="cv-container" style={{ backgroundColor: color.color }} ref={ref}>
      <Row justify="center">
        <Col span={24} style={{ display: "flex", flexDirection:"column", textAlign: "center", alignItems: "center" }}>
          {image?.thumbUrl  && (
            <div className="personImg">
              <img src={image?.thumbUrl || ""} alt={name} className="profile-image" />
            </div>
          )}
          <Title level={2} className="cv-title">
            {name}
          </Title>
          <Text className="cv-subtitle">{position}</Text>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Title level={4} className="cv-section-title">
            Personal Info
          </Title>
          <Space direction="vertical">
            <Text className="cv-text">
              <MailOutlined /> {email}
            </Text>
            <Text className="cv-text">
              <PhoneOutlined /> {mobile}
            </Text>
            <Text className="cv-text">
              <LinkedinOutlined /> {linkedin}
            </Text>
            <Text className="cv-text">
              <GithubOutlined /> {github}
            </Text>
            <Text className="cv-text">
              {street}, {city}, {country}
            </Text>
          </Space>
        </Col>
        <Col span={12}>
          <Title level={4} className="cv-section-title">
            Skills
          </Title>
          <Space direction="vertical">
            {skills.map((skill, index) => (
              <Text key={index} className="cv-text">
                • {skill}
              </Text>
            ))}
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={4} className="cv-section-title">
            Experience
          </Title>
          {step2.map((exp, index) => (
            <div key={index} className="cv-experience">
              <Text className="cv-text cv-bold">{exp.organization || ""}</Text>
              <Text className="cv-text">
                , {exp.position || ""}, (
                {exp.duration ? exp.duration.join(" - ") : ""}):
              </Text>
              <br />
              <Text className="cv-text">{exp.description || ""}</Text>
            </div>
          ))}
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={4} className="cv-section-title">
            Projects
          </Title>
          {step3.map((project, index) => (
            <div key={index} className="cv-project">
              <Text className="cv-text cv-bold">{project.title || ""}</Text>{" "}
              <Text className="cv-text">{project.link || ""}</Text>:
              <br />
              <Text className="cv-text">{project.description || ""}</Text>
            </div>
          ))}
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={4} className="cv-section-title">
            Education
          </Title>
          {step4.map((edu, index) => (
            <div key={index} className="cv-education">
              <Text className="cv-text cv-bold">{edu.college || ""}</Text>
              <Text className="cv-text">
                , {edu.qualification || ""}, (
                {edu.year ? edu.year.join(" - ") : ""}):
              </Text>
              <br />
              <Text className="cv-text">{edu.description || ""}</Text>
            </div>
          ))}
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Title level={4} className="cv-section-title">
            Languages
          </Title>
          <Space direction="vertical">
            {languages.map((language, index) => (
              <Text key={index} className="cv-text">
                • {language}
              </Text>
            ))}
          </Space>
        </Col>
        <Col span={12}>
          <Title level={4} className="cv-section-title">
            Achievements
          </Title>
          <Space direction="vertical">
            {achievements.map((achievement, index) => (
              <Text key={index} className="cv-text">
                • {achievement}
              </Text>
            ))}
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={4} className="cv-section-title">
            Certificates
          </Title>
          <Space direction="vertical">
            {certificates.map((certificate, index) => (
              <Text key={index} className="cv-text">
                • {certificate}
              </Text>
            ))}
          </Space>
        </Col>
      </Row>
    </div>
  );
})
