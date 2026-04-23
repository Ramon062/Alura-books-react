import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    white-space: nowrap;

    p {
        margin: 0;
    }

    @media (max-width: 900px) {
        font-size: 24px;
    }
`

const LogoImage = styled.img`
    display: block;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Alura</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo