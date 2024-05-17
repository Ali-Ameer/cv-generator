import React, { useState } from "react";
import { Image, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = ({ onChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
    onChange(newFileList);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined style={{ color: "#444" }} />
      <div
        style={{
          marginTop: 8,
          color: "#444",
        }}
      >
        Upload Image
      </div>
    </button>
  );

  return (
    <>
      <Upload
        listType="picture-card"
        customRequest={({ file, onSuccess }) => {
          onSuccess("ok");
        }}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
      >
        {fileList.length > 0 ? null : uploadButton}
      </Upload>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};
export default UploadImage;
