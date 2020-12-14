import React from 'react';
import clsx from "clsx";
import {mainTheme} from "./Themes/mainTheme";
// ======= MUI IMPORTS =======
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import AppDrawer from "./Components/AppDrawer";
// ==========
import './App.css';

const useStyles = makeStyles((mainTheme) => ({

    mainContent: {
        margin: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4em',
    }
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/> {/* Used to normalize styles to MUI across the app */}
            <AppDrawer/>
            <main className={classes.mainContent}>
                <Typography h1>
                    This page is under development.
                    Check back soon for logli updates.
                </Typography>
            </main>

        </React.Fragment>
    );
}

export default App;
