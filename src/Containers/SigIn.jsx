import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { DivFondoDifumi, DivFondoSVG } from '../Components/StyleComponentsSignRegister';
import "../Styles/StyleSigIn.css"
import { Link, useNavigate } from 'react-router-dom';

function SigIn() {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate("/");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <DivFondoSVG>
            <DivFondoDifumi>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 800,
                        backgroundColor: "rgba(255, 255, 255, 0.63)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        borderRadius: 20,
                        padding: 30
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >


                    <Form.Item
                        label="Email"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
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
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        name="noCoun"
                        wrapperCol={{
                            offset: 3,
                            span: 20,
                        }}
                    >
                        <p>¿No tienes cuenta? <Link to="/register">Registrate gratis</Link></p>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button style={{ backgroundColor: "#FA4A0C", color: "white", border: "none", outlineColor: "white" }} htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </DivFondoDifumi>
        </DivFondoSVG>
    )
}

export default SigIn