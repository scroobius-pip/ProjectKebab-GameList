import { Modal, ModalBody } from 'react-bootstrap';

interface Props {
    visible: boolean
    close: () => any
    // children: React.ElementType
}

export default (Content: React.ElementType) => ({ visible, close }: Props) => {

    return (
        <>
            <Modal onHide={close} show={visible}>
                <ModalBody>
                    <Content close={close} />
                </ModalBody>
            </Modal>
            <style>
                {
                    `
         .modal-body {
             max-width:600px !important;
             padding:0px;
         }

         .modal-content {
             border-radius:0px !important;

         }
         `
                }
            </style>

        </>
    )

}