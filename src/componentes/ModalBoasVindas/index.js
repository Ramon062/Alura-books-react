import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 1000;
`

const Modal = styled.div`
    width: 100%;
    max-width: 520px;
    background: #FFF;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 28px 24px;
    position: relative;
    text-align: center;

    @media (max-width: 600px) {
        padding: 22px 16px;
        border-radius: 12px;
    }
`

const FecharTopo = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    border: 0;
    background: transparent;
    color: #002F52;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    &:hover {
        color: #EB9B00;
    }
`

const Titulo = styled.h2`
    margin: 0 0 12px;
    color: #002F52;
    font-size: 30px;

    @media (max-width: 600px) {
        font-size: 24px;
    }
`

const Texto = styled.p`
    margin: 0 0 24px;
    color: #326589;
    font-size: 16px;
`

const BotaoFechar = styled.button`
    border: 0;
    border-radius: 8px;
    background: #002F52;
    color: #FFF;
    padding: 12px 18px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`

function ModalBoasVindas({ onClose }) {
    return (
        <Overlay>
            <Modal role="dialog" aria-modal="true" aria-label="Boas-vindas Alura Books">
                <FecharTopo aria-label="Fechar modal" onClick={onClose}>×</FecharTopo>
                <Titulo>Seja bem-vindo ao Alura Books</Titulo>
                <Texto>Descubra novas leituras e aproveite nossa estante digital.</Texto>
                <BotaoFechar onClick={onClose}>Fechar</BotaoFechar>
            </Modal>
        </Overlay>
    )
}

export default ModalBoasVindas
