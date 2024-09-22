import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../componenets/utils/constants'

const SideBar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        minWidth : '220px'
      }}
    >
      {categories.map((category) => (
        <button style={{ backgroundColor: selectedCategory === category.name ? '#FC1503' : '' }}
          className="category-btn flex gap-7 ml-2 "
          key={category.name}
          onClick={()=>{setselectedCategory(category.name)}}
        >
          <span >{category.icon}</span>
          <span >{category.name}</span>
        </button>
      ))}
    </Stack>

  )
}

export default SideBar