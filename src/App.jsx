/** @jsxImportSource theme-ui */
/* 上方的註解，讓 sx 屬性生效：https://theme-ui.com/sx-prop */
import {Flex, Label, Input, Button} from 'theme-ui'
import MyDialog from "./MyDialog";
import Dialog from "./Dialog";

function App() {

  return (
    <div className="App">
      <Flex>
        <Label htmlFor="search">Search</Label>
        <Input id="search" name="search"/>
        <Button>Go</Button>
      </Flex>
      <h1
        sx={{
          color: 'primary',
          fontFamily: 'heading',
        }}>
        Hello Vite + React!
      </h1>
      <Dialog>
        <MyDialog/>
      </Dialog>
    </div>
  )
}

export default App
