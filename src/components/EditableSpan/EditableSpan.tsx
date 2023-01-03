import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../features/TodolistsList/GlobalStyles';
import {Ionicons} from '@expo/vector-icons';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (value: string) => {
        setTitle(value)
    }

    return editMode
        ? <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><TextInput style={[globalStyles.input]} onChangeText={changeTitle} value={title}/>
            <View><Ionicons onPress={activateViewMode} name="checkmark" size={24} color="black"/></View>
        </View>
        : <Text
            style={{fontSize: 17, fontWeight: '600'}}
            onLongPress={activateEditMode}
        >{props.value}</Text>
});

// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />