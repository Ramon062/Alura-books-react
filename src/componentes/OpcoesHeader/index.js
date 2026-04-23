import styled from 'styled-components'
import { css } from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    min-width: 110px;

    p {
        margin: 0;
    }

    ${({ $mobile }) => $mobile && css`
        min-width: auto;
        width: 100%;
        justify-content: flex-start;
        padding: 14px 12px;
        border-bottom: 1px solid #E6E6E6;
    `}
`

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    ${({ $mobile }) => $mobile ? css`
        flex: initial;
        width: 100%;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        border: 1px solid #E6E6E6;

        @media (min-width: 901px) {
            display: none;
        }
    ` : css`
        @media (max-width: 900px) {
            display: none;
        }
    `}
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader({ mobile = false, onSelect }) {
    return (
        <Opcoes $mobile={mobile}>
            { textoOpcoes.map( (texto) => (
                <Opcao key={texto} $mobile={mobile} onClick={onSelect}><p>{texto}</p></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader