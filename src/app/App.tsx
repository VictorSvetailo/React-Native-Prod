import React, {useCallback, useEffect} from 'react'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import {BrowserRouter, Route} from 'react-router-dom'
import {Login} from '../features/Login/Login'
import {logoutTC} from '../features/Login/auth-reducer'
import {View} from 'react-native';
import {Text} from 'react-native';

type PropsType = {
    demo?: boolean
}

export function MainApp({demo = false}: PropsType) {
    // const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    // const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    // const dispatch = useDispatch<any>()
    //
    // useEffect(() => {
    //     dispatch(initializeAppTC())
    // }, [])

    // const logoutHandler = useCallback(() => {
    //     dispatch(logoutTC())
    // }, [])

    // if (!isInitialized) {
    //     return <View>
    //         <Text></Text>
    //     </View>
    // }

    return (
            <View style={{flex: 1}}>
                {/*<AppBar position="static">*/}
                {/*    <Toolbar>*/}
                {/*        <IconButton edge="start" color="inherit" aria-label="menu">*/}
                {/*            <Menu/>*/}
                {/*        </IconButton>*/}
                {/*        <Typography variant="h6">*/}
                {/*            News*/}
                {/*        </Typography>*/}
                {/*        {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}*/}
                {/*    </Toolbar>*/}
                {/*    {status === 'loading' && <LinearProgress/>}*/}
                {/*</AppBar>*/}
                <View style={{flex: 1}}>
                    <TodolistsList/>
                </View>
            </View>
    )
}

