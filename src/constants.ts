export const SIGN_IN = 'Sign In';
export const SIGN_UP = 'Sign Up';
export const LOG_OUT = 'Log Out';

export const SPRINT_BACKLOG = 'Backlog';

export const SPRINT_MODAL = 'sprint_modal';
export const TASK_MODAL = 'task_modal';

export const STATE_LIST = [
    { title: 'To do', value: 'todo' },
    { title: 'In process', value: 'inprocess' },
    { title: 'Review', value: 'review' },
    { title: 'Done', value: 'done' },
];

export const PRIORITY_LIST = [
    { title: 'Low', value: 'low' },
    { title: 'Middle', value: 'middle' },
    { title: 'High', value: 'high' },
];

export const DEFAULT_VALUE_STATE = STATE_LIST[0];
export const DEFAULT_VALUE_PRIORITY = PRIORITY_LIST[0];

export const AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON = 7;
export const AFTER_COUNT_SPRINTS_SHOW_SCROLL_TASK_FORM = 4;

export const DRAWER_WIDTH = 290;
export const COMMON_PADDING = 15;

export const REMOVE_SPRINT_CONFIRM_MESSAGE = 'Are you sure you want to delete the sprint?';
export const CLEAR_PERIOD_CONFIRM_MESSAGE = 'Are you sure you want to clear the selected period?';
export const CLEAR_TASK_CONFIRM_MESSAGE =
    'Are you sure you want to clear all the entered and selected fields?';

export const TASK_FORM_TITLE_CREATE = 'Create a new task';
export const TASK_FORM_TITLE_UPDATE = 'Update the task';
export const SPRINT_FORM_TITLE_CREATE = 'Create a new sprint';
export const CLEAR_BTN_TXT = 'Clear';
export const CREATE_BTN_TXT = 'Create';
export const UPDATE_BTN_TXT = 'Update';

export const MAX_TITLE_TASK_LENGTH = 50;
export const MAX_DESCRIPTION_TASK_LENGTH = 200;

export const DEMO_TASKS = {
    'id01': {
        title: 'Take a dog for a walk',
        description:
            "To walk the dog along a route that I don't like, but my dog really likes. And do not forget to take an umbrella, because it may rain.",
        state: 'todo',
        estimation: '30 m',
        priority: 'high',
        sprints: [SPRINT_BACKLOG],
    },
    'id02': {
        title: 'Work out in the gym',
        description: 'Work out in the gym. Four approaches to the barbell, fifty sit-ups and an hour of cardio training. Do not forget to take a razor with you to shave in the shower after class.',
        state: 'done',
        estimation: '2 h',
        priority: 'middle',
        sprints: [SPRINT_BACKLOG],
    },
}
