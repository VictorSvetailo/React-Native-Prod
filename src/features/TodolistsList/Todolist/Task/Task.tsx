import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import {MaterialCommunityIcons} from '@expo/vector-icons';

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const onClickH = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onChangeH = useCallback((value: boolean) => {
        props.changeTaskStatus(props.task.id, value ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId]);

    return <View
        style={props.task.status === TaskStatuses.Completed ? {...styles.task, opacity: 0.5} : {...styles.task,}}>
        <View style={{flexDirection: 'row',}}>
            <Checkbox
                value={props.task.status === TaskStatuses.Completed}
                onValueChange={onChangeH}
                style={{marginHorizontal: 10}}
            />
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </View>


        <TouchableOpacity style={{paddingLeft: 10}} onPress={onClickH}>
            <MaterialCommunityIcons name="delete" size={15} color="black"/>
        </TouchableOpacity>
    </View>;
});

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'
    }
})

