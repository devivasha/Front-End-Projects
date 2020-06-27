import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/icons/Menu";
import classNames from "classnames";
import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { fetchUser } from "../../store/actions";
import styles from "./HeaderStyle";


const useStyles = makeStyles(styles);
let loaded = false;
function Header(props) {
    let location = useLocation();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    if (localStorage.getItem('Authorization') && !loaded) {
        loaded = true
        props.fetchUser()
    } else if (props.user.plan && !loaded) {
        localStorage.clear();
        window.location.replace('/');
    } else {
        loaded = true
    }


    const { color, rightLinks, leftLinks, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });

    const brandComponent = <NavLink className={classes.linkStyle} to="/"><div className={classes.logoMain}> <img src={location.pathname === '/edit-images' || location.pathname === '/projects' ? '/images/logempty.png' : '/images/logo.svg'} alt="cropman logo" /></div></NavLink>

    return (
        <div>
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.container}>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className={classes.flex}>
                        {leftLinks !== undefined ? (
                            <Hidden mdDown implementation="css">
                                {leftLinks}
                            </Hidden>
                        ) : (
                                brandComponent
                            )}
                    </div>
                    <div className={classes.hambur}>
                        <Hidden mdDown implementation="css">
                            {rightLinks}
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </div>
                </Toolbar>
                <Hidden mdUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <div className={classes.appResponsive}>
                            {leftLinks}
                            {rightLinks}
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser(true))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)