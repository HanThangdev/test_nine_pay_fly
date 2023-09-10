import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useConversations = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {  } = useSelector((state: RootState) => state.buildChatBot, shallowEqual);
  // const onStreamingDataTesting = useCallback(
  //   async (payload: GetChatStreamingRequest) => {
  //     const { message } = payload
  //     dispatch(setNewChatIntoListHistory(message))
  //     const callBack = (data: string) => {
  //       dispatch(setGenerateChatIntoListHistory(data))
  //     }
  //      await dispatch(getChatStreamingTransaction({payload, callBack}));
  //   },
  //   [dispatch],
  // );

  return {
    
  };
};
