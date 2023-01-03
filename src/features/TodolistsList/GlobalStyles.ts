import {StyleSheet}  from 'react-native'

export const globalStyles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#333',
    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: 'rgb(234,233,238)',
        borderRadius: 10,
        padding: 10,
        color: '#a786df',
        fontSize: 15,
        fontWeight: '700',
    },
})

const styles = StyleSheet.create({
    boxTask: {},
    checkbox: {
        backgroundColor: '#fec7d7',
    },
    button: {
        backgroundColor: '#a786df',
        borderStyle: 'solid',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 15,
        color: '#fff',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        color: '#fff',
        backgroundColor: '#fec7d7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    task: {
        width: 250,
        backgroundColor: '#fffffe',
        borderRadius: 15,
        color: '#000',
        borderStyle: 'solid',
        borderColor: '#a786df',
        borderWidth: 2,
    },
    block__tasks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    title: {
        fontSize: 35,
        color: '#a786df',
        fontWeight: '700',
    },
    subtitle: {
        color: '#fff',
        fontSize: 25,
    },
    text: {
        color: '#a786df',
        fontSize: 20,
    },
    input__wrap: {
        width: 350,
        height: 80,
        // backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: 'rgb(234,233,238)',
        borderRadius: 10,
        padding: 10,
        color: '#a786df',
        fontSize: 20,
        fontWeight: '700',
    },
});

const globalStyle = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderColor: '#333',
        borderWidth: 2,
    }
})

// const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// )