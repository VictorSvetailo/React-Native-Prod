import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm'
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan'
import {Task} from './Task/Task'
import {TaskStatuses, TaskType} from '../../../api/todolists-api'
import {FilterValuesType, TodolistDomainType} from '../todolists-reducer'
import {useDispatch} from 'react-redux'
import {fetchTasksTC} from '../tasks-reducer'
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type PropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    demo?: boolean
}

export const Todolist = React.memo(function ({demo = false, ...props}: PropsType) {

    const dispatch = useDispatch<any>()
    useEffect(() => {
        if (demo) {
            return
        }
        dispatch(fetchTasksTC(props.todolist.id))
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todolist.id)
    }, [props.addTask, props.todolist.id])

    const removeTodolist = () => {
        // props.removeTodolist(props.todolist.id)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.todolist.id, title)
    }, [props.todolist.id, props.changeTodolistTitle])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.todolist.id), [props.todolist.id, props.changeFilter])


    let tasksForTodolist = props.tasks

    if (props.todolist.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.todolist.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle}/>
            <TouchableOpacity style={{paddingLeft: 10}} onPress={removeTodolist}>
                <MaterialCommunityIcons name="delete" size={15} color="black"/>
            </TouchableOpacity>
        </View>


        {/*<IconButton onClick={removeTodolist} disabled={props.todolist.entityStatus === 'loading'}>*/}
        {/*    <Delete/>*/}
        {/*</IconButton>*/}
        <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === 'loading'}/>
        <View style={{paddingVertical: 10}}>
            {
                tasksForTodolist.map(t => <Task key={t.id} task={t} todolistId={props.todolist.id}
                                                removeTask={props.removeTask}
                                                changeTaskTitle={props.changeTaskTitle}
                                                changeTaskStatus={props.changeTaskStatus}
                />)
            }
        </View>
        <View>
            {/*<Button variant={props.todolist.filter === 'all' ? 'outlined' : 'text'}*/}
            {/*        onClick={onAllClickHandler}*/}
            {/*        color={'default'}*/}
            {/*>All*/}
            {/*</Button>*/}
            {/*<Button variant={props.todolist.filter === 'active' ? 'outlined' : 'text'}*/}
            {/*        onClick={onActiveClickHandler}*/}
            {/*        color={'primary'}>Active*/}
            {/*</Button>*/}
            {/*<Button variant={props.todolist.filter === 'completed' ? 'outlined' : 'text'}*/}
            {/*        onClick={onCompletedClickHandler}*/}
            {/*        color={'secondary'}>Completed*/}
            {/*</Button>*/}
        </View>
    </View>;

})


