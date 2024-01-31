import React, { useEffect, useState } from 'react';
import { Avatar, Card, Col, Layout, Menu, Modal, Row, theme } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import useProducts from '../Hooks/useProducts';
import PopUpDetails from '../Components/AdminComponents/PopUpDetails';
import PopUpEdit from '../Components/AdminComponents/PopUpEdit';
import { WarningOutlined } from '@ant-design/icons';
import { DeleteCopyDataUsersCarts, DeleteDataUsersCarts } from '../Peticiones/axios';
import { urlComida, urlCopias } from '../helpers/urls';
import PopUpCreate from '../Components/AdminComponents/PopUpCreate';
import { useNavigate } from 'react-router-dom';
import useNoDis from '../Hooks/useNoDis';
const { confirm } = Modal;

const { Header, Content, Sider } = Layout;

function AdminPage() {
    const { data } = useProducts();
    const { dataNoDis } = useNoDis();
    const [dataNoDis2, setDataNoDis2] = useState();
    const [popUpOpenDetails, setPopUpOpenDetails] = useState(false);
    const [popUpOpenEdit, setPopUpOpenEdit] = useState(false);
    const [popUpOpenCreate, setPopUpOpenCreate] = useState(false);
    const [categoria, setCategoria] = useState("all")
    const [itemSelect, setItemSelect] = useState();
    const [base, setBase] = useState("comidas");
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate()
    const categoriasData = [...new Set(dataNoDis2?.map((item) => item.categoria))];
    
    const handleDetails = (item) => {
        setPopUpOpenDetails(true)
        setItemSelect(item)
    }

    const handleEdit = (item) => {
        setPopUpOpenEdit(true)
        setItemSelect(item)
    }

    const handleCreate = (item) => {
        setPopUpOpenCreate(true)
        setItemSelect(item)
    }

    useEffect(()=>{
        setDataNoDis2(data)
    },[data])

    const showDeleteConfirm = (c) => {
        confirm({
            title: '¿Estas seguro de eliminar este producto?',
            icon: <WarningOutlined />,
            content: `Borraras ${c.nombre_completo} con la ID: ${c.id}`,
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (base === "comidas") {
                    console.log("dsasdasd")
                    DeleteCopyDataUsersCarts(urlComida, c.id, c)
                }else if(base === "discount"){
                    DeleteDataUsersCarts(urlCopias, c.id)
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

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
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <Menu.Item style={{ backgroundColor: "#FA4A0C" }} key={0} onClick={() => { navigate("/home") }}>
                        <span style={{ textTransform: "capitalize" }} >HOME</span>
                    </Menu.Item>
                    <Menu.Item key={1} onClick={() => { setDataNoDis2(data); setBase("comidas")}}>
                        <span style={{ textTransform: "capitalize" }} >Productos</span>
                    </Menu.Item>
                    <Menu.Item key={2} onClick={() => { setDataNoDis2(dataNoDis); setBase("discount") }}>
                        <span style={{ textTransform: "capitalize" }} >Descontinuados</span>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <span style={{ textTransform: "capitalize" }} >Usuarios(falta)</span>
                    </Menu.Item>
                    <Menu.Item key={4}>
                        <span style={{ textTransform: "capitalize" }} >Carritos(falta)</span>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        <Menu.Item style={{ backgroundColor: "green" }} key={1} onClick={() => { handleCreate()}}>
                            <span style={{ textTransform: "capitalize" }} >Crear Producto</span>
                        </Menu.Item>
                        <Menu.Item key={0} onClick={() => { setCategoria("all"); }}>
                            <span style={{ textTransform: "capitalize" }} >all</span>
                        </Menu.Item>
                        {categoriasData?.map((a, index) => (
                            <Menu.Item key={index+3} onClick={() => { setCategoria (a)}}> 
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
                                dataNoDis2?.map((item, index) => (
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
                                                <EyeOutlined onClick={() => handleDetails(item)} key="ellipsis" />,
                                                <EditOutlined style={{ backgroundColor: "#faea0c" }} onClick={() => handleEdit(item)} key="edit" />,
                                                <DeleteOutlined style={{ backgroundColor: "red" }} onClick={() => showDeleteConfirm(item)} key="setting" />,
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
                            {dataNoDis2?.filter((product) => product.categoria === categoria).map((item, index) => (
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
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            />
                                        }
                                        actions={[
                                            <EyeOutlined onClick={() => handleDetails(item)} key="ellipsis" />,
                                            <EditOutlined style={{ backgroundColor: "#faea0c" }} onClick={() => handleEdit(item)} key="edit" />,
                                            <DeleteOutlined style={{ backgroundColor: "red" }} onClick={() => showDeleteConfirm(item)} key="setting" />,
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
                            {popUpOpenEdit && <PopUpEdit item={itemSelect} baseData={base} cats={categoriasData} onClose={() => setPopUpOpenEdit(false)} />}
                            {popUpOpenCreate && <PopUpCreate item={itemSelect} baseData={base} cats={categoriasData} onClose={() => setPopUpOpenCreate(false)} />}
                        </Row>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AdminPage