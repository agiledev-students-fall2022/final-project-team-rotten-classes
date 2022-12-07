import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "black",
    position: "fixed",
    bottom: 0,
    paddingTop: "10px",
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 800px)": {
        minWidth: "auto",
        padding: "6px 0",
        color: "white",
      },},
    "& .Mui-selected": {
      "@media (max-width: 800px)": {
      }}}});

const BottomNavigationBar = () => {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className={classes.root}
            >
                <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="/AddReview" label="Add" icon={<AddCircleOutlineIcon />} />
                <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<HelpOutlineIcon />} />
            </BottomNavigation>
        </div>
    )}

export default BottomNavigationBar;