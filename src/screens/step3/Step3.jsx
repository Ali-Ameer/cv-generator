import { Button, Col, Divider, Flex, Form, Row, Space } from "antd";
import Input from "../../components/input/Input";
import useStep3 from "./useStep3";
import { CloseOutlined } from "@ant-design/icons";
import Navigation from "../../components/navigation/Navigation";
import { FieldArray, Formik } from "formik";

export const Step3 = () => {
  const { initialValues, validationSchema, onSubmit } = useStep3();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => {

        return (
          <Form name="vertical_form" layout="vertical">
            <FieldArray name="projects">
              {({ insert, remove, push }) => (
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%", marginBottom: "2rem" }}
                >
                  {formik.values.projects?.map((project, index) => (
                    <>
                      {formik.values.projects?.length > 1 && (
                        <Flex key={index} flex={1} justify="flex-end">
                          <Button
                            icon={<CloseOutlined />}
                            onClick={() => remove(index)}
                          />
                        </Flex>
                      )}
                      <div key={index}>
                      <Row key={index} gutter={16}>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                          <Input
                            label="Title"
                            name={`projects.${index}.title`}
                            value={formik.values.projects[index].title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.projects?.[index]?.title}
                            touched={formik.touched.projects?.[index]?.title}
                          />
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                          <Input
                            label="Link"
                            name={`projects.${index}.link`}
                            value={formik.values.projects[index].link}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.projects?.[index]?.link}
                            touched={formik.touched.projects?.[index]?.link}
                          />
                        </Col>
                      </Row>

                      <Row gutter={16}>
                        <Col span={24}>
                          <Input
                            label="Description"
                            name={`projects.${index}.description`}
                            value={formik.values.projects[index].description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.projects?.[index]?.description}
                            touched={
                              formik.touched.projects?.[index]?.description
                            }
                          />
                        </Col>
                      </Row>

                      {formik.values.projects?.length !== index + 1 && (
                        <Divider />
                      )}
                      </div>
                    </>
                  ))}

                  <Flex flex={1} justify="flex-end">
                    <Button
                      onClick={() =>
                        push({
                          title: "",
                          link: "",
                          description: "",
                        })
                      }
                    >
                      add more project
                    </Button>
                  </Flex>
                </Space>
              )}
            </FieldArray>

            {/* prev and next buttons */}
            <Navigation handleNext={formik.handleSubmit} />
          </Form>
        );
      }}
    </Formik>
  );
};
