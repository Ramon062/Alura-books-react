import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 24px;
    width: 25px;

    @media (max-width: 900px) {
        margin-right: 12px;
        width: 22px;
    }

    &:last-child {
        margin-right: 0;
    }

    img {
        display: block;
        width: 100%;
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`

const icones = [perfil, sacola]
const altIcones = ['Perfil', 'Sacola']

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone, index) => (
              <Icone key={altIcones[index]}><img src={icone} alt={altIcones[index]} /></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader