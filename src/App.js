import * as React from "react";
import { Tabs, Form, Button } from "antd";
import { FormOne } from "./module/FormOne";
import { FormTwo } from "./module/FormTwo";
import create from "zustand";
import _ from "lodash";

const useStore = create((set) => ({
  form: {},
  setForm: (info) => set({ form: info.forms }),
}));

export const App = React.memo(() => {
  const [selectTab, setSelectTab] = React.useState("Form1");
  const { setForm, form } = useStore();
  const handleSubmit = React.useCallback(() => {
    Object.values(form).forEach(async (item) => {
      console.info(item);
      await item.validateFields().then((res) => {
        console.info(res);
      });
    });
  }, [form]);

  console.info(form);

  return (
    <div>
      <Form.Provider onFormChange={(name, info) => setForm(info)}>
        <Tabs activeKey={selectTab} onChange={setSelectTab}>
          <Tabs.TabPane tab="表单1" key="Form1">
            <FormOne form={form["Form1"]} name="Form1" />
          </Tabs.TabPane>
          <Tabs.TabPane tab="表单2" key="Form2">
            <FormTwo form={form["Form2"]} name="Form2" />
          </Tabs.TabPane>
        </Tabs>
      </Form.Provider>

      <Button onClick={handleSubmit}>点击提交</Button>
    </div>
  );
});
export default App;
