import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import DevicesIcon from '@material-ui/icons/Devices';
import SchoolIcon from '@material-ui/icons/School';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';


const items = [
    {name: 'About Me', path: '/', key:'about-me'},
    {name: 'Projects', path: '/projects', key:'projects'},
    {name: 'Work', path: '/work', key:'work'},
    {name: 'Education', path: '/education', key:'education'},
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
            background: theme.palette.background.sidebar,
            color: '#fff',
            width: '220px'
    },
    link: {
        textDecoration: 'none'
    }, 
  }),
);

const Sidebar = () => {
    const styles = useStyles();
    const location = useLocation();

	return (
        <Drawer variant='permanent' anchor='left' classes={{ paper: styles.paper }}>
            <List>
                {items.map(i => (
                    <MenuItem 
                    component={Link}
                    to={i.path}
                    key={i.key} 
                    selected={location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path}>
                        <ListItemIcon style={{color: '#fff', minWidth:'40px'}}>{iconSelector(i.key)}</ListItemIcon>
                        <ListItemText primary={i.name} />
                    </MenuItem>
                ))}
            </List>
        </Drawer>
	);
};

function iconSelector(iconName) {
    switch(iconName) {
        case 'about-me':
            return <AccountBoxIcon></AccountBoxIcon>;
        case 'projects':
            return <DevicesIcon></DevicesIcon>;
        case 'work':
            return <WorkIcon></WorkIcon>;
        case 'education':
            return <SchoolIcon></SchoolIcon>;
        default:
            return <RadioButtonCheckedIcon></RadioButtonCheckedIcon>;
    }
}


export default Sidebar;