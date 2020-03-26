import React, {useContext,} from 'react'
import { AuthContext, } from "../providers/AuthProvider";
import { Menu, Icon, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import { useWindowWidth } from "../hooks/useWindowWidth"


const Navbar = (props) => {
  
  const auth = useContext(AuthContext);
  const width = useWindowWidth();

  const rightNavItems = () => {
    const { location, history} = props;
    
    if (auth.user) {
      return (
        <Menu inverted vertical style={{height: "100"}}>
           <h3 style={{color: "white" }}><Icon name="users" size="big" inverted color="white"/>myspace</h3>
          <br/>
           <Link to='/'>
            <Menu.Item 
              id='home'
              name='home'
              active={location.pathname === '/'}
            />
            </Link>
            <Link to='/my_friends'>
            <Menu.Item 
              id='my friends'
              name='my friends'
              active={location.pathname === '/my_friends'}
            />
            <br/>
            <br/>
            <br/>
            </Link>
          <Menu.Item
            name='logout'
            onClick={ () => auth.handleLogout(history) }
          />
        </Menu>
      )
    } else {
      return (
        <Menu inverted vertical>
          <h3 style={{color: "white" }}><Icon name="users" size="big" inverted color="white"/>myspace</h3>
          <br/>
            <Link to='/'>
            <Menu.Item
              id='home'
              name='home'
              active={location.pathname === '/'}
            />
            </Link>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu>
      )
    }
  }
  
    return (
      <>
        <Menu inverted vertical>
          {/* <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link> */}
            { rightNavItems() }
        </Menu>
      </>
    )
  
}

export default withRouter(Navbar);