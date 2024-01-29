import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, InputNumber, Modal, Typography, Upload } from 'antd';
import React, { useState } from 'react'
import { uploadFile } from '../../helpers/uploadFiles';

function PopUpEdit(props) {

    const { item, onClose } = props;
    const [produc, setProduct] = useState(props.item);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(item.imagen);


    const handleUpload = (e) => {
        console.warn(e.file.originFileObj)
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
            onOk={onClose}
            onCancel={onClose} //cambiarlo por editar y agregvar otro boton para eliminar
            width={1000}
            maskClosable={false}
        >
            <Typography.Title level={5}>Nombre completo del producto:</Typography.Title>
            <Input
                count={{
                    show: true,
                    max: 30,
                }}
                defaultValue={item.nombre_completo}
            />
            <Typography.Title level={5}>Nombre corto:</Typography.Title>
            <Input
                count={{
                    show: true,
                    max: 15,
                }}
                defaultValue={item.nombre}
            />

            <Typography.Title level={5}>Precio:</Typography.Title>
            <InputNumber prefix="$" defaultValue={item.precio} />

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
            
            <Typography.Title level={5}>Foto final:</Typography.Title>
            <img style={{width: 150, height: 150, objectFit: "contain",}} alt="imagen producto" src={imageUrl}></img>
        </Modal>
    );
}

export default PopUpEdit