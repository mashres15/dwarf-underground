import React, { Component } from 'react'
import './Header.css'
import HeaderNavs from './HeaderNavs'
import HeaderTitle from './HeaderTitle'

class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <div className="clearfix">
          <div className="float-left logo">
            <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
          </div>
        
          <HeaderNavs />
        
        </div>
        <HeaderTitle />
      </div>
    )
  }
}

export default Header