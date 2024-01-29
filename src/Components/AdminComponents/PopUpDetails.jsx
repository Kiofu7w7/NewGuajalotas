import { Modal, Typography } from 'antd'
import { DivFlexSpaceA } from './StyledComponents/Components';

function PopUpDetails(props) {
    const { item, onClose } = props;

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
            <DivFlexSpaceA>
                <div>
                    <Typography.Title level={5}>ID:</Typography.Title>
                    <p>{item.id}</p>
                    <Typography.Title level={5}>Nombre corto:</Typography.Title>
                    <p>{item.nombre}</p>
                    <Typography.Title level={5}>Nombre completo:</Typography.Title>
                    <p>{item.nombre_completo}</p>
                </div>
                <div>
                    <Typography.Title level={5}>Precio:</Typography.Title>
                    <p>${item.precio} MXN</p>
                    <Typography.Title level={5}>Categoria:</Typography.Title>
                    <p style={{ textTransform: "capitalize" }} >{item.categoria}</p>
                    <Typography.Title level={5}>En stock:</Typography.Title>
                    <p style={{ textTransform: "capitalize" }} >{item.stock}</p>
                </div>
            </DivFlexSpaceA>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{
                    width: 150, height: 150, objectFit: "contain", backgroundImage: `url(${item.plato})`,
                    backgroundPosition: "center 60px",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                    }} alt="imagen producto" src={item.imagen}></img>
            </div>
        </Modal>
    );
}

export default PopUpDetails