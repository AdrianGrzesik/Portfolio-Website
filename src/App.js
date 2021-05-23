import { Route, Switch, } from 'react-router'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import PortfoliosPage from './Pages/PortfoliosPage'
import ResumePage from './Pages/ResumePage'
import { useState, useEffect } from 'react'
import { IconButton } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import DarkMode from '@material-ui/icons/Brightness4'
import Switcher from '@material-ui/core/Switch'


function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="light-dark-mode">
        <div className="left-content">
          <DarkMode />
        </div>
        <div className="right-content">
          <Switcher
            value=""
            checked={checked}
            //onChange={}
            inputProps={{ 'aria-label': '' }}
            onClick={themeToggler}
          />
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton
          onClick={() => setNavToggle(!navToggle)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>

        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>



        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>

      </MainContentStyled>
    </div>
  );
}


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1100px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      z-index: -1;
    }
  }

`;
export default App;
