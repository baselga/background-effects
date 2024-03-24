import { Container, Stack } from '@mui/material'
import Header from './components/Header'
import UiControlers from './components/UiControlers'

function App() {

  return (    
    <Container maxWidth="lg" sx={{
      padding: (theme) => theme.spacing(2,0)
    }}>
      <Stack gap={4}>
        <Header />      
        <UiControlers />      
      </Stack>
    </Container>
  )
}

export default App
