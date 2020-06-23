import React from 'react'

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import MenuConfig  from '../../config/menuConfig'

const { SubMenu } = Menu;



export default class NavLeft extends React.Component{
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({menuTreeNode})
  }

  renderMenu =(data)=>{
    return data.map(item => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
    return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render(){
    return (
      <div>
        <Menu
          theme='dark'
        >
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}