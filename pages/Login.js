import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
export default function Login() {
  const router = useRouter();
  const apiEndPoint = "http://localhost:5000/users";

  const onFinish = async (values) => {
    const obj = {
      username: values.username,
      password: values.password,
    };

    const data = await axios.post(`${apiEndPoint}/signin`, obj);
    console.log("api", data.status);

    data.status===202?router.push("/main"):null
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div style={{ padding: "5%", width: "20%" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

// const getdata=async()=>{
//   const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
//   console.log("🚀 ~ file: Login.js:13 ~ getdata ~ res", res.data)
// }
// useEffect(()=>{
//   getdata()

// },[])
