import React, {ChangeEvent} from 'react'
import {Checkbox} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import {EditableSpan} from '../../../../EditableSpan/EditableSpan'
import {RemoveButton} from '../../../../Buttons/RemoveButton/RemoveButton'
import {TaskStatuses} from '../../../../../api/api'

export type TaskPropsType = {
    changeTaskStatus: (e: ChangeEvent<HTMLInputElement>) => void,
    changeTaskTitle: (newTitle: string) => void,
    removeTask: () => void,
    title: string,
    status: TaskStatuses
}

export const Task: React.FC<TaskPropsType> = React.memo(({
                                                             title,
                                                             status,
                                                             changeTaskStatus,
                                                             changeTaskTitle,
                                                             removeTask
                                                         }) => (
        <div style={status === TaskStatuses.Completed ? {opacity: '0.5'} : {opacity: '1'}}>

            <Checkbox onChange={changeTaskStatus}
                      checked={status === TaskStatuses.Completed}
                      size="small"
                      icon={<BookmarkBorderIcon/>}
                      checkedIcon={<BookmarkIcon/>}/>

            <EditableSpan title={title} onChange={changeTaskTitle}/>

            <RemoveButton tooltip={'Remove task'} onClick={removeTask}/>

        </div>
    )
)