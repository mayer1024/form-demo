import * as React from "react";
import { Form, Input } from "antd";

export const FormOne = React.memo((props) => {
  return (
    <Form {...props}>
      <Form.Item
        label="输入框1"
        name="label1"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="输入框2"
        name="label2"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="输入框3"
        name="label3"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
});
