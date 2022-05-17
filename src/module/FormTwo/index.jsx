import * as React from "react";
import { Form, Input } from "antd";

export const FormTwo = React.memo((props) => {
  return (
    <Form {...props}>
      <Form.Item
        label="表单2-1"
        name="two1"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="表单2-2"
        name="two2"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="表单2-3"
        name="two3"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
});
