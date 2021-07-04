import { it } from '@jest/globals';
import { SPRINT_MODAL } from '@src/constants';
import { showModal, UiReducer, hideModal } from '@src/redux/ui/uiReducer';

describe('ui ', () => {
    it('Show modal', () => {
        const initialState = {
            isModalVisible: '',
        };

        const payload = SPRINT_MODAL;

        const action = {
            type: showModal,
            payload,
        };

        const expectedState = {
            isModalVisible: SPRINT_MODAL,
        };

        const state = UiReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Hide modal', () => {
        const initialState = {
            isModalVisible: SPRINT_MODAL,
        };

        const action = {
            type: hideModal,
        };

        const expectedState = {
            isModalVisible: '',
        };

        const state = UiReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
