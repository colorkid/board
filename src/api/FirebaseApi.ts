import { getTasksRequest, postTasksRequest } from '@src/api/task';
import { getColumnsRequest, postColumnsRequest } from '@src/api/column';
import {
    getActiveSprintsRequest,
    getSprintsRequest,
    postActiveSprintsRequest,
    postSprintsRequest,
} from '@src/api/sprint';
import { signInFireBase, signOutFireBase, signUpFireBase } from '@src/api/auth';

export const FirebaseApi = {
    getTasksRequest,
    postTasksRequest,
    getColumnsRequest,
    postColumnsRequest,
    getActiveSprintsRequest,
    getSprintsRequest,
    postActiveSprintsRequest,
    postSprintsRequest,
    signInFireBase,
    signOutFireBase,
    signUpFireBase,
};