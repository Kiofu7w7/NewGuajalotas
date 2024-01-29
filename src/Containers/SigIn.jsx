import React, { useContext } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { DivFondoDifumi } from '../Components/StyleComponentsSignRegister';
import "../Styles/StyleSigIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Hooks/userContext';
import { FondoContainer } from '../Components/StyleCompPasarela';

function SigIn() {

    const objNew = {
        "id": 2,
        "email": "patatas123@gmail.com",
        "password": "panseroti",
        "cellphone": "123435112",
        "name": "Pepito",
        "last_name": "Perez",
        "id_carts": 1
    }
    const { setUser } = useContext(UserContext)
    
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        setUser(objNew)
        navigate("/");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FondoContainer style={{width: "100%"}}>
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
        </FondoContainer>
    )
}

export default SigIn