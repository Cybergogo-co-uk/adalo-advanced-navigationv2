import React from 'react'
import { Icon } from '@protonapp/react-native-material-ui'

import '../Shared/iconLoader'

function MenuItem(props) {
  const { subItems, item, action, icon, subMenuIcon } = props

  const onClick = () => {
    if (
      (!Array.isArray(subItems) ||
        (Array.isArray(subItems) && !subItems.length)) &&
      !!action
    ) {
      action()
    }
  }

  return (
    <li onClick={onClick}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          height: "100%"
        }}
      >
        {!!icon && !!icon?.enable && (
          <Icon name={icon.name} size={icon.size} color={icon.color} />
        )}
        <span>{item}</span>
        {Array.isArray(subItems) && !!subItems.length && !!subMenuIcon && !!subMenuIcon?.enable && (
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
              <li>
                <a href={subItem.link} onClick={(e) => e.stopPropagation()}>
                  {subItem.label}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default MenuItem
