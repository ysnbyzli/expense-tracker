import { Form, Input, Button, Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router';
import { LoginForm } from '../types/user';
import { useDispatch, useSelector } from 'react-redux';
import showError from '../utils/showError';
import { login } from '../store/actions/userActions';
import { AppState } from '../store';
import { useEffect } from 'react';
import showSuccess from '../utils/showSuccess';


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

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#fff", margin: "0 10px" }} spin />;

const Login = () => {

    const history = useHistory();
    const location = useLocation<{ newSignup?: boolean }>();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state: AppState) => state.user)

    const onFinish = async (values: LoginForm) => {
        dispatch(login(values))
    }

    useEffect(() => {
        error && showError(error);
    }, [error])

    useEffect(() => {
        data.username && showSuccess("You have successfully logged in!")
    }, [data.username])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            history.push("/")
        }
    }, [history, data])

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            validateMessages={validateMessages}
            autoComplete="off"
        >
            <h2 style={{ textAlign: "center", marginBottom: 40 }}>
                Please Login
            </h2>

            {location.state?.newSignup && <Alert message="You successfully signed up. Please login using your credentials." type="success" showIcon closable style={{ width: "30%", margin: "0 auto 15px" }} />}

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, min: 6 }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" disabled={loading}>
                    {loading ? <Spin indicator={antIcon} /> : "Register"}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login
