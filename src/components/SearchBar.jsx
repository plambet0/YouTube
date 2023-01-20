import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Paper } from '@mui/material';

const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit= {()=> {}}
        sx={{
            borderRadius: '20px',
            border: '1px solid #e3e3e3',
            pl: '2px',
            boxShadow: 'none',
            mr: { sm: '5px'}
        }}
        >
    <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={()=>{}}
        />  
        <IconButton type="submit" sx={{p: '10px', color:'red'}}>
            <Search/>
        </IconButton>
         
    </Paper>
  )
}

export default SearchBar