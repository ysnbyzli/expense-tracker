import { useState } from "react";
import { Form, Input, Button, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import api from "../utils/api";
import showError from "../utils/showError";



const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#fff", margin: "0 10px" }} spin />;

function SignUp() {

    const [loading, setLoading] = useState(false);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
    };

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    const history = useHistory();

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            await api().post("/users/register", values);
            history.push("/login", { newSignup: true });
        } catch (error) {
            console.log({ error });
            showError((error as any).response.data.errorMessage);
        }
        setLoading(false);
    };

    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <h2 style={{ textAlign: "center", marginBottom: 40 }}>
                Register for an account
            </h2>
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Please input your password!", min: 6 },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email", required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="full_name" label="Full Name">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" disabled={loading} >
                    {loading ? <Spin indicator={antIcon} /> : "Register"}
                </Button>
            </Form.Item>
        </Form>
    );
}

export default SignUp;