import { addDays } from 'date-fns';
import { SPRINT_BACKLOG } from '@src/constants';

export const DEMO_COLUMN_BACKLOG = { title: 'Backlog', id: 'Backlog', order: 0 };

export const DEMO_STATE_LIST = [
    { title: 'To do', id: 'todo', order: 0 },
    { title: 'In process', id: 'inprocess', order: 1 },
    { title: 'Review', id: 'review', order: 2 },
    { title: 'Done', id: 'done', order: 3 },
];

export const DEMO_ACTIVE_SPRINT = 'id01';

export const DEFAULT_SPRINT_BACKLOG = {
    [SPRINT_BACKLOG]: {
        number: SPRINT_BACKLOG,
        dates: [''],
    },
};

export const DEMO_SPRINTS = {
    ...DEFAULT_SPRINT_BACKLOG,
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
        description:
            "Design the store's shopping cart taking into account the technical task No. 1 and the customer's edits",
        state: 'inprocess',
        estimation: '8 days',
        priority: 'low',
        sprints: [SPRINT_BACKLOG],
    },
    id04: {
        title: 'Check the operation of the authorization widget',
        description:
            'It must authorize through a google account. There should be email validation, if authorization failed, a valid error message should be sent.',
        state: 'review',
        estimation: '1 day',
        priority: 'middle',
        sprints: [SPRINT_BACKLOG],
    },
};
