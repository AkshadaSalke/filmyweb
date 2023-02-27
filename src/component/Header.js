import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='sticky z-10 header text-2xl flex justify-between items-center font-bold text-red-500 p-3 border-b-2 border-gray-500'>
       <Link to={'/'}><span>Filmy<span className='text-white'>Web</span></span></Link>
       <Link to={'/addmovie'}><h1 className='text-lg text-white cursor-pointer flex items-center'>
        <Button ><AddIcon className='mr-1' color='secondary'/><span className='text-white'>Add New</span></Button></h1></Link>
    </div>
  )
}

export default Header;