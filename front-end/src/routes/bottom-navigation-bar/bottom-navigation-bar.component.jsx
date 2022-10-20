import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import {Helmet} from "react-helmet";

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import NavigatorPane from './Components/NavigatorPane';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 800px)": {
        minWidth: "auto",
        padding: "6px 0",
        color: "white",
      },
    },
    "& .Mui-selected": {
      "@media (max-width: 800px)": {
        // color: "red",
      }}}});

const BottomNavigationBar = () => {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            
                {/* <NavigatorPane></NavigatorPane> */}
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    className={classes.root}
                >
                    <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} to="/favorites" label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction component={Link} to="/add" label="Add" icon={<AddCircleOutlineIcon />} />
                    <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchOutlinedIcon />} />
                    <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<PersonIcon />} />
                </BottomNavigation>
          
        </div>
    )}

export default BottomNavigationBar;