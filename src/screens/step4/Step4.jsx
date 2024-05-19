import { Button, Col, Divider, Flex, Form, Row, Space } from "antd";
import Input from "../../components/input/Input";
import useStep4 from "./useStep4";
import { CloseOutlined } from "@ant-design/icons";
import Navigation from "../../components/navigation/Navigation";
import { FieldArray, Formik } from "formik";
import DateInput from "../../components/input/DateInput";

export const Step4 = () => {
  const { initialValues, validationSchema, onSubmit } = useStep4();

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
            <FieldArray name="education">
              {({ insert, remove, push }) => (
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  {formik.values.education?.map((friend, index) => (
                    <div key={index}>
                      {formik.values.education?.length > 1 && (
                        <Flex  flex={1} justify="flex-end">
                          <Button
                            icon={<CloseOutlined />}
                            onClick={() => remove(index)}
                          />
                        </Flex>
                      )}

                      <Row gutter={16}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Input
                            label="College"
                            name={`education.${index}.college`}
                            value={formik.values.education[index].college}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.errors.education?.[index]?.college
                            }
                            touched={
                              formik.touched.education?.[index]?.college
                            }
                          />
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Form.Item label="Year">
                            <DateInput
                              picker="month"
                              name={`education.${index}.year`}
                              value={formik.values.education[index].year}
                              onChange={(e, date) => {
                                formik.setFieldValue(
                                  `education[${index}].year`,
                                  e === null ? null : date
                                );
                              }}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.education?.[index]?.year
                              }
                              touched={
                                formik.touched.education?.[index]?.year
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                          <Input
                            label="Qualification"
                            name={`education.${index}.qualification`}
                            value={formik.values.education[index].qualification}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.education?.[index]?.qualification}
                            touched={
                              formik.touched.education?.[index]?.qualification
                            }
                          />
                        </Col>

                        <Col span={24}>
                          <Input
                            label="Description"
                            name={`education.${index}.description`}
                            value={formik.values.education[index].description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.errors.education?.[index]?.description
                            }
                            touched={
                              formik.touched.education?.[index]?.description
                            }
                          />
                        </Col>
                      </Row>

                      {formik.values.education?.length !== index + 1 && (
                        <Divider />
                      )}
                      </div>
                  ))}

                  <Flex flex={1} justify="flex-end">
                    <Button
                      onClick={() =>
                        push({
                          college: "",
                          year: "",
                          qualification: "",
                          description: "",
                        })
                      }
                    >
                      add more education
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
