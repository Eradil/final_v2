import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useContext, useState } from "react";
import { contextProducts } from "../../context/contextProducts";
import { message } from "antd";
import "./AddProduct.css";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AddProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { createProduct } = useContext(contextProducts);
  const [img, setImg] = useState(null);
  function save(newProduct) {
    console.log(newProduct);
    createProduct({
      ...newProduct,
      images: img,
      // comment: [],
    });
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="add_btn">
        <Button onClick={showModal}>Add product</Button>
      </div>

      <Modal
        footer={null}
        title="Add products"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleSave}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Name"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input placeholder="name of instrument" />
          </Form.Item>

          <Form.Item
            name="text"
            label="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea placeholder="description" />
          </Form.Item>
          <Form.Item
            label="status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please input produced!",
              },
            ]}
          >
            <Input placeholder="produced" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input details!",
              },
            ]}
          >
            <Select>
              <Select.Option value={"clothes"}>Clothes</Select.Option>
              <Select.Option value={"music"}>Music</Select.Option>
              <Select.Option value={"interior"}>Interior</Select.Option>\{" "}
              <Select.Option value={"tours"}>Tours</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Image"
            name="images"
            rules={[
              {
                required: true,
                message: "Please input URL of image!",
              },
            ]}
          >
            <Input
              placeholder="URL of image"
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
            />
            {/* <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Add product</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
