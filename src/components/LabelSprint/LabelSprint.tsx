import React, { ReactElement } from 'react';
import { format } from 'date-fns';
import { SprintItemType } from '@src/redux/sprint/sprintReducer';

interface ILabelSprint {
    sprint: SprintItemType;
    isBacklog: boolean;
    numberSprint: string;
}

const LabelSprint = (props: ILabelSprint): ReactElement => {
    const { sprint, isBacklog, numberSprint } = props;
    const from = sprint.dates[0];
    const to = sprint.dates[1];

    const LabelSprint = isBacklog
        ? `№${numberSprint}`
        : `№${numberSprint} / ${format(new Date(from), 'dd.MM.yyy')} - ${format(
              new Date(to),
              'dd.MM.yyy'
          )}`;

    return <>{LabelSprint}</>;
};

export default LabelSprint;