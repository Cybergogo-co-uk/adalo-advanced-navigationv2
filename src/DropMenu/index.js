import React from 'react'
import MenuItemManifest from './menu-item-manifest'
import './style.css'

const DropMenu = (props) => {
  const {
    //_fonts,
    subMenuIconEnable,
    iconName,
    iconColor,
    iconSize,
    // Menu Item 0
    menuItem0,
    subItem_0_1,
    subItem_0_2,
    subItem_0_3,
    subItem_0_4,
    subItem_0_5,
    subItem_0_6,
    subItem_0_7,
    subItem_0_8,
    subItem_0_9,
    subItem_0_10,
    // Menu Item 1
    menuItem1,
    subItem_1_1,
    subItem_1_2,
    subItem_1_3,
    subItem_1_4,
    subItem_1_5,
    subItem_1_6,
    subItem_1_7,
    subItem_1_8,
    subItem_1_9,
    subItem_1_10,

    // Menu Items 2
    menuItem2,
    subItem_2_1,
    subItem_2_2,
    subItem_2_3,
    subItem_2_4,
    subItem_2_5,
    subItem_2_6,
    subItem_2_7,
    subItem_2_8,
    subItem_2_9,
    subItem_2_10,
    //menu items 3

    menuItem3,
    subItem_3_1,
    subItem_3_2,
    subItem_3_3,
    subItem_3_4,
    subItem_3_5,
    subItem_3_6,
    subItem_3_7,
    subItem_3_8,
    subItem_3_9,
    subItem_3_10,
    //menu item 4

    menuItem4,
   

    menuItem5,
    // subItem_5_1,
    // subItem_5_2,
    // subItem_5_3,
    // subItem_5_4,
    // subItem_5_5,
    // subItem_5_6,
    // subItem_5_7,
    // subItem_5_8,
    // subItem_5_9,
    // subItem_5_10,

    menuItem6,
    // subItem_6_1,
    // subItem_6_2,
    // subItem_6_3,
    // subItem_6_4,
    // subItem_6_5,
    // subItem_6_6,
    // subItem_6_7,
    // subItem_6_8,
    // subItem_6_9,
    // subItem_6_10,

    menuItem7,
    // subItem_7_1,
    // subItem_7_2,
    // subItem_7_3,
    // subItem_7_4,
    // subItem_7_5,
    // subItem_7_6,
    // subItem_7_7,
    // subItem_7_8,
    // subItem_7_9,
    // subItem_7_10,

    menuItem8,
    // subItem_8_1,
    // subItem_8_2,
    // subItem_8_3,
    // subItem_8_4,
    // subItem_8_5,
    // subItem_8_6,
    // subItem_8_7,
    // subItem_8_8,
    // subItem_8_9,
    // subItem_8_10,

  } = props

  const submenuIcon = {
    enable: subMenuIconEnable,
    name: iconName,
    color: iconColor,
    size: iconSize,
  }
  return (
    <div className="navigation-menu">
      <ul>
        <MenuItemManifest
          subItems={[
            subItem_0_1,
            subItem_0_2,
            subItem_0_3,
            subItem_0_4,
            subItem_0_5,
            subItem_0_6,
            subItem_0_7,
            subItem_0_8,
            subItem_0_9,
            subItem_0_10,
          ]}
          item={menuItem0}
          subMenuIcon={submenuIcon}
        />
        <MenuItemManifest
          subItems={[
            subItem_1_1,
            subItem_1_2,
            subItem_1_3,
            subItem_1_4,
            subItem_1_5,
            subItem_1_6,
            subItem_1_7,
            subItem_1_8,
            subItem_1_9,
            subItem_1_10,
          ]}
          item={menuItem1}
          subMenuIcon={submenuIcon}
        />
          <MenuItemManifest
          subItems={[
            subItem_2_1,
            subItem_2_2,
            subItem_2_3,
            subItem_2_4,
            subItem_2_5,
            subItem_2_6,
            subItem_2_7,
            subItem_2_8,
            subItem_2_9,
            subItem_2_10,
          ]}
          item={menuItem2}
          subMenuIcon={submenuIcon}
        />
        <MenuItemManifest
          subItems={[
            subItem_3_1,
            subItem_3_2,
            subItem_3_3,
            subItem_3_4,
            subItem_3_5,
            subItem_3_6,
            subItem_3_7,
            subItem_3_8,
            subItem_3_9,
            subItem_3_10,
          ]}
          item={menuItem3}
          subMenuIcon={submenuIcon}
        />

         <MenuItemManifest
          subItems={[
           
          ]}
          item={menuItem4}
          subMenuIcon={submenuIcon}
        />

        <MenuItemManifest
          subItems={[
            
          ]}
          item={menuItem5}
          subMenuIcon={submenuIcon}
        />
        <MenuItemManifest
          subItems={[
            
          ]}
          item={menuItem6}
          subMenuIcon={submenuIcon}
        />
        <MenuItemManifest
          subItems={[
            
          ]}
          item={menuItem7}
          subMenuIcon={submenuIcon}
        />
        <MenuItemManifest
          subItems={[
            
          ]}
          item={menuItem8}
          subMenuIcon={submenuIcon}
        />
      </ul>
    </div>
  )
}

export default DropMenu
