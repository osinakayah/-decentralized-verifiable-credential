import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './redux';

const DashboardScreen = lazy(() => import('./pages/DashboardScreen'));
const NewCertificateScreen = lazy(() => import('./pages/NewCertificateScreen'));
const NewPresentationScreen = lazy(() => import('./pages/NewPresentationScreen'));
const drawerWidth = 0;
const { store, persistor, } = createStore();


function App(props) {


    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <Box sx={{display: 'flex'}}>
                        <CssBaseline/>
                        <AppBar
                            position="fixed"
                            sx={{
                                width: {sm: `calc(100% - ${drawerWidth}px)`},
                                ml: {sm: `${drawerWidth}px`},
                            }}
                        >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{mr: 2, display: {sm: 'none'}}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h6" noWrap component="div">
                                    Digital certificates
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Box
                            component="main"
                            sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
                        >

                            <Toolbar/>

                            <BrowserRouter>
                                <Suspense fallback={null}>
                                    <Routes>
                                        <Route path="/" element={<DashboardScreen/>}/>
                                        <Route path="/certificate" element={<NewCertificateScreen/>}/>
                                        <Route path="/presentation/:index" element={<NewPresentationScreen/>}/>
                                    </Routes>
                                </Suspense>
                            </BrowserRouter>

                        </Box>
                    </Box>
                </PersistGate>

            </Provider>

        </>
    );
}

export default App;
