import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, InputNumber, Modal, Popconfirm, Select, Typography, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../helpers/uploadFiles';
import { DivFlexSpaceA } from './StyledComponents/Components';
import { PatchDataUsersCarts } from '../../Peticiones/axios';
import { urlBase } from '../../helpers/urls';

function PopUpEdit(props) {

    const { item, baseData , cats, onClose } = props;
    const [produc, setProduct] = useState(props.item);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(item.imagen);
    const [imagePlatoUrl, setImagePlatoUrl] = useState(item.plato);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [base, setBase] = useState();

    useEffect(()=>{
        setBase(baseData)
    }, [baseData])
    
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Producto editado con exito',
            duration: 4,
        });
    };

    const showPopconfirm = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(async () => {
            setOpen(false);
            setConfirmLoading(false);
            onClose();
            await PatchDataUsersCarts(`${urlBase}${base}`, produc.id, produc)
            success()
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleUpload = (e) => {
        setLoading(true)
        const file = e.file.originFileObj
        uploadFile(file)
            .then(resp => handleChangeImagen(resp))
    }

    const handleChangeImagen = (url) => {
        setProduct({
            ...produc,
            imagen: url,
        })
        setImageUrl(url)
        setLoading(false)
    };

    const handleOnChange = ({ target }) => {
        setProduct({
            ...produc,
            [target.name]: target.value,
        });
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <Modal
            title={item.nombre_completo}
            centered
            open
            onOk={showPopconfirm}
            onCancel={onClose} //cambiarlo por editar y agregvar otro boton para eliminar
            width={800}
            maskClosable={false}
        >
            {contextHolder}
            <DivFlexSpaceA style={{justifyContent: "space-between"}}>
                <div>
                    <Typography.Title level={5}>Nombre completo del producto:</Typography.Title>
                    <Input
                        count={{
                            show: true,
                            max: 30,
                        }}
                        defaultValue={item.nombre_completo}
                        name='nombre_completo'
                        onChange={handleOnChange}
                    />
                    <Typography.Title level={5}>Nombre corto:</Typography.Title>
                    <Input
                        count={{
                            show: true,
                            max: 15,
                        }}
                        defaultValue={item.nombre}
                        name='nombre'
                        onChange={handleOnChange}
                    />
                </div>
                    <div>
                        <Typography.Title level={5}>Categoria:</Typography.Title>
                        <select
                            name="categoria"
                            defaultValue={produc.categoria}
                            onChange={handleOnChange}
                        >
                            {cats?.map((a, index) => (
                                <option key={index} value={a}>
                                    {a}
                                </option>
                            ))}
                        </select>
                    </div>
                <div>

                </div>

                <div>
                    <Typography.Title level={5}>Precio:</Typography.Title>
                    <input
                        type="number"
                        name="precio"
                        defaultValue={item.precio}
                        onChange={handleOnChange}
                        placeholder="$"
                    />

                    <Typography.Title level={5}>En stock:</Typography.Title>
                    <input
                        type="number"
                        name="stock"
                        defaultValue={item.stock}
                        onChange={handleOnChange}
                    />
                </div>
            </DivFlexSpaceA>


            <DivFlexSpaceA>
                <div>
                    <Typography.Title level={5}>Fotografia:</Typography.Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}          
                        onChange={handleUpload}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div>
                    <Typography.Title level={5}>Plato: (no funciona)</Typography.Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        // onChange={handleUpload}
                    >
                        {imagePlatoUrl ? (
                            <img
                                src={imagePlatoUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div>
                    <Typography.Title level={5}>Foto final:</Typography.Title>
                    <img style={{
                        width: 100,
                        height: 100,
                        objectFit: "contain",
                        backgroundImage: `url(${item.plato})`,
                        backgroundPosition: "center 40px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }} alt="imagen producto" src={imageUrl}></img>
                </div>
            </DivFlexSpaceA>

            <Popconfirm
                title="Editar producto"
                description="Estas seguro de editar este producto?"
                open={open}
                onConfirm={handleOk}
                okButtonProps={{
                    loading: confirmLoading,
                }}
                onCancel={handleCancel}
            >
            </Popconfirm>

        </Modal>
    );
}

export default PopUpEdit