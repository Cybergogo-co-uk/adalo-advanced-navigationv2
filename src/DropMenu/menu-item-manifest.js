import React from 'react'
import { Icon } from '@protonapp/react-native-material-ui'
import '../Shared/iconLoader'
import SubMenuItem from './sub-menu-item'

function MenuItemManifest(props) {
  const { item, subMenuIcon, subItems } = props
  const { action, url, label, iconEnable, iconName, iconSize, iconColor } = item

  const onClick = () => {
    if (
      !Array.isArray(subItems) ||
      (Array.isArray(subItems) && !subItems.length)
    ) {
      if (action) {
        action()
      } else if (url) {
        window.navigator.href = url
      }
    }
  }

  return (
    <li onClick={onClick}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          height: '100%',
        }}
      >
        {!!iconEnable && (
          <Icon name={iconName} size={iconSize} color={iconColor} />
        )}
        <span>{label}</span>
        {Array.isArray(subItems) &&
          !!subItems.length &&
          !!subMenuIcon &&
          !!subMenuIcon?.enable && (
            <Icon
              name={subMenuIcon.name}
              size={subMenuIcon.size}
              color={subMenuIcon.color}
            />
          )}
      </div>
      {Array.isArray(subItems) && !!subItems.length && (
        <ul className="sub-menu">
          {subItems.map((subItem) => {
            return (
              <SubMenuItem item={subItem} />
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default MenuItemManifest
