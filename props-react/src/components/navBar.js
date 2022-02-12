import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


function NavBar() {
    const logoStyle = {width:"7%"}
    const Nav = {display:"flex",justifyContent:"space-between",backgroundColor:" rgb(88, 85, 82)",position:"relative"}
    const searchStyle ={height: "27%", position:"absolute",bottom:"17%",right:"2%"}
    const titleStyle = {position:"absolute",right:"41%",top:"18%",fontFamily: "Rowdies",color:"rgb(163, 162, 162)"}
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    return (
      <>
      <div style={Nav}>
      <img style={logoStyle} src="/imgs/myLogo2.png"/>
      <h1 style={titleStyle}>WATCH ME.COM</h1>
      <div><Search style = {searchStyle}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      </Search></div>
      </div>
      </>
    );
  }
  
  export default NavBar;
  