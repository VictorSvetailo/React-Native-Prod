import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function({addItem, disabled = false}: AddItemFormPropsType) {
    console.log("AddItemForm called")

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeH = (value: string) => {
        setTitle(value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <View style={{flexDirection: 'row'}}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeH}
            value={title}
        />
        <View>
            <TouchableOpacity>
                <Ionicons name="add" size={28} color="black" />
            </TouchableOpacity>
        </View>
        {/*<TextField variant="outlined"*/}
        {/*           disabled={disabled}*/}
        {/*           error={!!error}*/}
        {/*           value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           label="Title"*/}
        {/*           helperText={error}*/}
        {/*/>*/}
        {/*<IconButton color="primary" onClick={addItemHandler} disabled={disabled}>*/}
        {/*    <AddBox />*/}
        {/*</IconButton>*/}
    </View>
})

const styles = StyleSheet.create({
    text: {
        color: '#a786df',
        fontSize: 20,
    },
    // input__wrap: {
    //     width: 350,
    //     height: 80,
    //     // backgroundColor: '#000',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
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
    // button: {
    //     backgroundColor: '#a786df',
    //     borderStyle: 'solid',
    //     borderColor: '#333',
    //     borderWidth: 2,
    //     borderRadius: 15,
    //     color: '#fff',
    //     marginBottom: 20,
    // },
    // container: {
    //     flex: 1,
    //     color: '#fff',
    //     backgroundColor: '#fec7d7',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // task: {
    //     width: 250,
    //     backgroundColor: '#fffffe',
    //     borderRadius: 15,
    //     color: '#000',
    //     borderStyle: 'solid',
    //     borderColor: '#a786df',
    //     borderWidth: 2,
    // },
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
});