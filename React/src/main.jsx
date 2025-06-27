import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CountBtn from './Counter.jsx'
import ToggleBtn from './toggleBtn.jsx'
import Parent from './Parent.jsx'
import GrandParent from './GrandParent.jsx'
import ArrayComponent from './ArrayComponent.jsx'
import CheckBox from './CheckBox.jsx'
import ControlledComponent from './ControlledComponent.jsx'
import InputParentComponent from './InputParentComponent.jsx'
import LoginForm from './LoginForm.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountBtn />
    <ToggleBtn />
    <GrandParent/>
    <ArrayComponent/>
    <CheckBox />
    <ControlledComponent />
    <InputParentComponent/>
    <LoginForm />
  
  </StrictMode>,
)
