import React, { useState } from 'react';
import { Avatar, Card, Col, Layout, Menu, Row, theme } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import useProducts from '../Hooks/useProducts';
import PopUpDetails from '../Components/AdminComponents/PopUpDetails';
import PopUpEdit from '../Components/AdminComponents/PopUpEdit';
import PopUpConfig from '../Components/AdminComponents/PopUpConfig';
const { Header, Content, Sider } = Layout;
const items1 = [
    {
        "key": "1",
        "label": "Productos"
    },
    {
        "key": "2",
        "label": "Usuarios"
    },
    {
        "key": "3",
        "label": "Carritos"
    }
]

function AdminPage() {
    const { data } = useProducts();
    const [collapsed, setCollapsed] = useState(false);
    const [popUpOpenDetails, setPopUpOpenDetails] = useState(false);
    const [popUpOpenEdit, setPopUpOpenEdit] = useState(false);
    const [popUpOpenConfig, setPopUpOpenConfig] = useState(false);
    const [categoria, setCategoria] = useState("all")
    const [itemSelect, setItemSelect] = useState();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const categoriasData = [...new Set(data?.map((item) => item.categoria))];

    
    const handleDetails = (item) => {
        setPopUpOpenDetails(true)
        setItemSelect(item)
    }

    const handleEdit = (item) => {
        setPopUpOpenEdit(true)
        setItemSelect(item)
    }

    const handleConfig = (item) => {
        setPopUpOpenConfig(true)
        setItemSelect(item)
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items1}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    
                </Menu>
            </Header>
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" mode="inline">
                        {categoriasData?.map((a, index) => (
                            <Menu.Item key={index} onClick={() => { setCategoria (a)}}> 
                                <span style={{ textTransform: "capitalize" }} >{a}</span> 
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '20px 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Row gutter={16}>
                            {categoria === "all" && (
                                data?.map((item, index) => (
                                    <Col span={8} key={index}>
                                        <Card
                                            style={{
                                                width: 300,
                                            }}
                                            cover={
                                                <img
                                                    alt="productImage"
                                                    src={item.imagen}
                                                    style={{
                                                        backgroundImage: `url(${item.plato})`,
                                                        backgroundPosition: "center 60px",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",}}
                                                />
                                            }
                                            actions={[
                                                <EllipsisOutlined onClick={() => handleDetails(item)} key="ellipsis" />,
                                                <EditOutlined style={{ backgroundColor: "#faea0c" }} onClick={() => handleEdit(item)} key="edit" />,
                                                <DeleteOutlined style={{ backgroundColor: "red" }} onClick={() => handleConfig(item)} key="setting" />,
                                            ]}
                                        >
                                            <Meta
                                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                                title={item.nombre_completo}
                                                description={`${item.precio}.00`}
                                            />
                                        </Card>
                                    </Col>
                                ))
                            )}
                            {data?.filter((product) => product.categoria === categoria).map((item, index) => (
                                <Col span={8} key={index}>
                                    <Card
                                        style={{
                                            width: 300,
                                        }}
                                        cover={
                                            <img
                                                alt="productImage"
                                                src={item.imagen}
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined onClick={() => handleConfig(item)} key="setting" />,
                                            <EditOutlined onClick={() => handleEdit(item)} key="edit" />,
                                            <EllipsisOutlined onClick={() => handleDetails(item)} key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                            title={item.nombre_completo}
                                            description={`${item.precio}.00`}
                                        />
                                    </Card>
                                </Col>
                            ))}
                            {popUpOpenDetails && <PopUpDetails item={itemSelect} onClose={() => setPopUpOpenDetails(false)} />}
                            {popUpOpenEdit && <PopUpEdit item={itemSelect} cats={categoriasData} onClose={() => setPopUpOpenEdit(false)} />}
                            {popUpOpenConfig && <PopUpConfig item={itemSelect} onClose={() => setPopUpOpenConfig(false)} />}
                        </Row>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AdminPage