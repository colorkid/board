import { it } from '@jest/globals';
import { addTask, deleteTask, TaskReducer, updateTask } from '@src/redux/task/taskReducer';

describe('taskReducer ', () => {
    it('Create task', () => {
        const initialState = {};

        const payload = {
            id: 'TASK_ID_8822781',
            title: 'title',
            description: 'description',
            state: '1',
            estimation: '4h',
            range: 'low',
            sprints: '12',
        };

        const action = {
            type: addTask,
            payload,
        };

        const expectedState = {
            TASK_ID_8822781: {
                title: 'title',
                description: 'description',
                state: '1',
                estimation: '4h',
                range: 'low',
                sprints: '12',
            },
        };

        const state = TaskReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Update task', () => {
        const initialState = {
            TASK_ID_8822781: {
                title: 'title',
                description: 'description',
                state: '1',
                estimation: '4h',
                range: 'low',
                sprints: '12',
            },
        };

        const payload = {
            id: 'TASK_ID_8822781',
            body: {
                title: 'newTitle',
                state: '2',
            },
        };

        const action = {
            type: updateTask,
            payload,
        };

        const expectedState = {
            TASK_ID_8822781: {
                title: 'newTitle',
                description: 'description',
                state: '2',
                estimation: '4h',
                range: 'low',
                sprints: '12',
            },
        };

        const state = TaskReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Delete task', () => {
        const initialState = {
            TASK_ID_8822781: {
                title: 'title',
                description: 'description',
                state: '1',
                estimation: '4h',
                range: 'low',
                sprints: '12',
            },
            TASK_ID_7887899: {
                title: 'title2',
                description: 'description2',
                state: '2',
                estimation: '2h',
                range: 'middle',
                sprints: '212',
            },
        };

        const payload = {
            id: 'TASK_ID_8822781',
        };

        const action = {
            type: deleteTask,
            payload,
        };

        const expectedState = {
            TASK_ID_7887899: {
                title: 'title2',
                description: 'description2',
                state: '2',
                estimation: '2h',
                range: 'middle',
                sprints: '212',
            },
        };

        const state = TaskReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
