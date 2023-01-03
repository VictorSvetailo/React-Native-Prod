// import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/app-reducer'
import {ResponseType} from '../api/todolists-api'
import {Dispatch} from 'redux'

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<any | any>) => {
    // if (data.messages.length) {
    //     dispatch(setAppErrorAC(data.messages[0]))
    // } else {
    //     dispatch(setAppErrorAC('Some error occurred'))
    // }
    // dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<any | any>) => {
    // dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
    // dispatch(setAppStatusAC('failed'))
}
