import React from 'react'

function SubMenuItem(props) {
  const { item } = props

  const onClick = (e) => {
    e.stopPropagation()
    if (item?.action) {
      item.action()
    }
  }

  return (
    <li>
      <a class="sub-link" onClick={onClick}>{item.text}</a>
    </li>
  )
}

export default SubMenuItem
