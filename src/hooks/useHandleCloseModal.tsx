import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { getVisibleModalSelector } from '@src/redux/selectors';
import { hideModal } from '@src/redux/ui/uiReducer';

type useHandleCloseModalType = false | (() => void);

const useHandleCloseModal = (type: string): useHandleCloseModalType => {
    const modal = useAppSelector((state: RootState) => getVisibleModalSelector(state));
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(hideModal());
    };

    return type === modal && closeModal;
};

export default useHandleCloseModal;
