import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { useState } from 'react'

const HeaderContainer = styled.header`
    background-color: #FFF;
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
`

const HeaderWrapper = styled.div`
    width: 100%;
`

const HeaderContent = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 900px) {
        min-height: 72px;
        gap: 16px;
    }
`

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 12px;
`

const MenuButton = styled.button`
    display: none;
    border: 0;
    background: transparent;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    color: #002F52;

    @media (max-width: 900px) {
        display: block;
    }
`

const MobileMenuContainer = styled.nav`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 16px;
    box-sizing: border-box;
`

function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderContent>
                    <Logo/>
                    <OpcoesHeader/>
                    <HeaderActions>
                        <IconesHeader/>
                        <MenuButton
                            aria-label="Abrir menu"
                            aria-expanded={menuAberto}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            ☰
                        </MenuButton>
                    </HeaderActions>
                </HeaderContent>

                {menuAberto && (
                    <MobileMenuContainer>
                        <OpcoesHeader mobile onSelect={() => setMenuAberto(false)} />
                    </MobileMenuContainer>
                )}
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header