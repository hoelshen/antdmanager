import React from "react";

import { Card, Form, Input, Button, message,Icon, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const FormItem = Form.Item;

export default class FormLogin extends React.Component {
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.setFieldsValue({
      username: "Bamboo",
    });
  }

  handleSubmit = (values) => {
    let userInfo = this.formRef.current.getFieldsValue();
/*     this.formRef.current.validateFields((err, value)=>{
      console.log('err, value: ', err, value);
     if(!err){
        message.success(`${userInfo.username}`)
      } 
    }) */
    


    console.log(userInfo);
  };

  render() {
    return (
      <div>
        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }} ref={this.formRef}>
            <FormItem name="username"
             rules={[{ required: true, message: 'Please input your username!' },{
               min: 5,
               max: 10,
               message: "长度不在范围内"
             }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="请输入用户名" />
            </FormItem>

            <FormItem name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#">
                Forgot password
              </a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
