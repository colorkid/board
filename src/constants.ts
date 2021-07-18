import { addDays } from 'date-fns';

export const SIGN_IN = 'Sign In';
export const SIGN_UP = 'Sign Up';
export const LOG_OUT = 'Log Out';

export const SPRINT_BACKLOG = 'Backlog';

export const SPRINT_MODAL = 'sprint_modal';
export const TASK_MODAL = 'task_modal';
export const SETTINGS_MODAL = 'settings_modal';

export const PRIORITY_LIST = [
    { title: 'Low', id: 'low', order: 0 },
    { title: 'Middle', id: 'middle', order: 1 },
    { title: 'High', id: 'high', order: 2 },
];

export const ORDER_KEY = 'order';
export const TITLE_KEY = 'title';

export const DEFAULT_VALUE_PRIORITY = PRIORITY_LIST[0];

export const AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON = 7;
export const AFTER_COUNT_SPRINTS_SHOW_SCROLL_TASK_FORM = 4;

export const DRAWER_WIDTH = 290;
export const COMMON_PADDING = 15;

export const REMOVE_SPRINT_CONFIRM_MESSAGE = 'Are you sure you want to delete the sprint?';
export const CLEAR_PERIOD_CONFIRM_MESSAGE = 'Are you sure you want to clear the selected period?';
export const CLEAR_TASK_CONFIRM_MESSAGE =
    'Are you sure you want to clear all the entered and selected fields?';
export const REMOVE_TASK_CONFIRM_MESSAGE = 'Are you sure you want to delete the task?';


export const TASK_FORM_TITLE_CREATE = 'Create a new task';
export const TASK_FORM_TITLE_UPDATE = 'Update the task';
export const SPRINT_FORM_TITLE_CREATE = 'Create a new sprint';
export const CLEAR_BTN_TXT = 'Clear';
export const CREATE_BTN_TXT = 'Create';
export const UPDATE_BTN_TXT = 'Update';
export const SETTINGS_BTN_TXT = 'Settings';
export const ADD_COLUMN_BTN_TXT = 'Add column';

export const MAX_TITLE_TASK_LENGTH = 50;
export const MAX_DESCRIPTION_TASK_LENGTH = 200;
export const MAX_ESTIMATION_TASK_LENGTH = 10;

export const DEMO_STATE_LIST = [
    { title: 'To do', id: 'todo', order: 0 },
    { title: 'In process', id: 'inprocess', order: 1 },
    { title: 'Review', id: 'review', order: 2 },
    { title: 'Done', id: 'done', order: 3 },
];

export const COLUMN_BACKLOG = { title: 'Backlog', id: 'Backlog', order: 0 };

export const DEMO_ACTIVE_SPRINT = 'id01';

export const DEMO_SPRINTS = {
    [SPRINT_BACKLOG]: {
        number: SPRINT_BACKLOG,
        dates: [''],
    },
    [DEMO_ACTIVE_SPRINT]: {
        number: '1',
        dates: [`${new Date()}`, `${addDays(new Date(), 14)}`],
    },
};

export const DEMO_TASKS = {
    id01: {
        title: 'Take a dog for a walk',
        description:
            "To walk the dog along a route that I don't like, but my dog really likes. And do not forget to take an umbrella, because it may rain.",
        state: 'todo',
        estimation: '30 m',
        priority: 'high',
        sprints: [SPRINT_BACKLOG, DEMO_ACTIVE_SPRINT],
    },
    id02: {
        title: 'Work out in the gym',
        description:
            'Work out in the gym. Four approaches to the barbell, fifty sit-ups and an hour of cardio training. Do not forget to take a razor with you to shave in the shower after class.',
        state: 'done',
        estimation: '2 h',
        priority: 'middle',
        sprints: [SPRINT_BACKLOG, DEMO_ACTIVE_SPRINT],
    },
    id03: {
        title: 'Design a shopping cart',
        description:'Design the store\'s shopping cart taking into account the technical task No. 1 and the customer\'s edits',
        state: 'inprocess',
        estimation: '8 days',
        priority: 'low',
        sprints: [SPRINT_BACKLOG],
    },
    id04: {
        title: 'Check the operation of the authorization widget',
        description:'It must authorize through a google account. There should be email validation, if authorization failed, a valid error message should be sent.',
        state: 'review',
        estimation: '1 day',
        priority: 'middle',
        sprints: [SPRINT_BACKLOG],
    },
};
