import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card, Spin, Alert } from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "admin",
                password: "123456",
            },
            message: {
                err: "",
                success: "",
            },
            loading: false,
        };
    }
    render() {
        const { data, message, loading } = this.state;
        return (
            <>
            <Card title="Login" style={{ textAlign: "center" }}>
                {message.err && (
                    <Alert
                        message={message.err}
                        type="error"
                        style={{ width: "300px", margin: "10px auto" }}
                    />
                )}
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                        username: data.username,
                        password: data.password,
                    }}
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
                        <Input
                            name="username"
                            value={data.username}
                        />
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
                        <Input.Password
                            name="password"
                            value={data.password}
                        />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={loading}
                        >
                            {loading ? <Spin /> : "Submit"}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            </>
        );
    }
}
export default Login