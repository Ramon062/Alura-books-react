import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import ModalBoasVindas from './componentes/ModalBoasVindas'
import styled from 'styled-components'
import { useState } from 'react'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  const [modalAberto, setModalAberto] = useState(true)

  return (
    <AppContainer>
      {modalAberto && <ModalBoasVindas onClose={() => setModalAberto(false)} />}
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App
