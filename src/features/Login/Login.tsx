import React from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {loginTC} from './auth-reducer'
import {AppRootStateType} from '../../app/store'
import {Navigate} from 'react-router-dom';
import {Button, View} from 'react-native';

export const Login = () => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }

        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            //@ts-ignore
            dispatch(loginTC(values));
        },
    })

    // if (isLoggedIn) {
    //     return <Navigate to={"/"} />
    // }


    return <View>
        <View>
            <form onSubmit={formik.handleSubmit}>
                {/*<View>*/}
                {/*    <View>*/}
                {/*        <p>*/}
                {/*            To log in get registered <a href={'https://social-network.samuraijs.com/'}*/}
                {/*                                        target={'_blank'}>here</a>*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            or use common test account credentials:*/}
                {/*        </p>*/}
                {/*        <p> Email: free@samuraijs.com*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Password: free*/}
                {/*        </p>*/}
                {/*    </View>*/}
                {/*    <View>*/}
                {/*        <View*/}
                {/*            label="Email"*/}
                {/*            margin="normal"*/}
                {/*            {...formik.getFieldProps("email")}*/}
                {/*        />*/}
                {/*        {formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}
                {/*        <View*/}
                {/*            type="password"*/}
                {/*            label="Password"*/}
                {/*            margin="normal"*/}
                {/*            {...formik.getFieldProps("password")}*/}
                {/*        />*/}
                {/*        {formik.errors.password ? <div>{formik.errors.password}</div> : null}*/}
                {/*        <View*/}
                {/*            label={'Remember me'}*/}
                {/*            control={<Checkbox*/}
                {/*                {...formik.getFieldProps("rememberMe")}*/}
                {/*                checked={formik.values.rememberMe}*/}
                {/*            />}*/}
                {/*        />*/}
                {/*        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </form>
        </View>
    </View>
}
