import { Button, Col, Divider, Flex, Form, Row, Space } from "antd";
import Input from "../../components/input/Input";
import useStep2 from "./useStep2";
import { CloseOutlined } from "@ant-design/icons";
import Navigation from "../../components/navigation/Navigation";
import { FieldArray, Formik } from "formik";
import DateInput from "../../components/input/DateInput";

export const Step2 = () => {
  const { initialValues, validationSchema, onSubmit } = useStep2();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => {
        console.log(formik.values);
        return (
          <Form name="vertical_form" layout="vertical">
            <FieldArray name="experience">
              {({ insert, remove, push }) => (
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  {formik.values.experience?.map((friend, index) => (
                    <>
                      {formik.values.experience?.length > 1 && (
                        <Flex flex={1} justify="flex-end">
                          <Button
                            icon={<CloseOutlined />}
                            onClick={() => remove(index)}
                          />
                        </Flex>
                      )}
                      <Row gutter={16}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Input
                            label="Organization"
                            name={`experience.${index}.organization`}
                            value={formik.values.experience[index].organization}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.errors.experience?.[index]?.organization
                            }
                            touched={
                              formik.touched.experience?.[index]?.organization
                            }
                          />
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Input
                            label="Position"
                            name={`experience.${index}.position`}
                            value={formik.values.experience[index].position}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.experience?.[index]?.position}
                            touched={
                              formik.touched.experience?.[index]?.position
                            }
                          />
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Form.Item label="Duration">
                            <DateInput
                              picker="month"
                              name={`experience.${index}.duration`}
                              value={formik.values.experience[index].duration}
                              onChange={(e, date) => {
                                formik.setFieldValue(
                                  `experience[${index}].duration`,
                                  e === null ? null : date
                                );
                                console.log("e ", e);
                                console.log(date);
                              }}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.experience?.[index]?.duration
                              }
                              touched={
                                formik.touched.experience?.[index]?.duration
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={24}>
                          <Input
                            label="Description"
                            name={`experience.${index}.description`}
                            value={formik.values.experience[index].description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.errors.experience?.[index]?.description
                            }
                            touched={
                              formik.touched.experience?.[index]?.description
                            }
                          />
                        </Col>
                      </Row>

                      {formik.values.experience?.length !== index + 1 && (
                        <Divider />
                      )}
                    </>
                  ))}

                  <Flex flex={1} justify="flex-end">
                    <Button
                      onClick={() =>
                        push({
                          organization: "",
                          position: "",
                          duration: "",
                          description: "",
                        })
                      }
                    >
                      add more experience
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
