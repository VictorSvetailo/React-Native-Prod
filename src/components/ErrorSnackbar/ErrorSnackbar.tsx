import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../app/store'
import {setAppErrorAC} from '../../app/app-reducer'
import {Animated} from 'react-native';
import View = Animated.View;

// function Alert(props: AlertProps) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />
// }

export function ErrorSnackbar() {
    //const [open, setOpen] = React.useState(true)
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppErrorAC(null));
    }


    const isOpen = error !== null;

    return (
        <View>
            {error}
        </View>
        // <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        //     <Alert onClose={handleClose} severity="error">
        //         {error}
        //     </Alert>
        // </Snackbar>
    )
}
