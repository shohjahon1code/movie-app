import { Button, Menu, MenuItem } from '@mui/material'
import React, { MouseEvent, useState } from 'react'

const NavMenu = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const open = Boolean(anchor)

  const handleOpen = (evt: MouseEvent<HTMLButtonElement>) => {
    setAnchor(evt.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  return (
    <div className='md:!hidden'>
      <Button id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen} className='!capitalize !text-white'>
        Browse
      </Button>
      <Menu className='menu' 
      id="basic-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Movies</MenuItem>
        <MenuItem>TV Show</MenuItem>
        <MenuItem>New</MenuItem>
        <MenuItem>Series</MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
