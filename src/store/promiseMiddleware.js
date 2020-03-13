// import { push } from '@/store/router-helper';
import * as type from '@/store/action-types';
// import RouterPath from '@/store/router-path';

const SUCCESS = 'success';
const FAILURE = 'failure';
const PENDING = 'pending';
function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

function isAction(obj) {
  return !!(obj && obj.type) || typeof obj === 'function';
}

// let requestCount = 0;
// function requestPending(count) {
//   requestCount += count;
//   return {
//     type: type.showGlobalLoading,
//     payload: {
//       globalLoading: requestCount > 0,
//     },
//   };
// }
const resubmitWarn=(resubmit)=>{
    return {
        type:type.resubmitWarn,
        resubmit
    }
}

export default function promiseMiddleware({ dispatch }) {
  return (next) => (action) => {
    const { payload, nextAction, ...otherAttr } = action;
    if (!isPromise(payload)) {
      // 如果不是promise直接交给下一个中间件处理
      return next(action);
    }

    dispatch({ ...action, payload: { loading: true, status: PENDING } });
    // if (process.env.NODE_ENV !== 'production') dispatch(requestPending(1));
    action.payload
      .then(
        (result) => {
          let ret = {
            loading: false,
            status: SUCCESS,
            result,
          };
          dispatch({
            ...otherAttr,
            payload: ret,
          });
          if (isAction(nextAction)) {
            dispatch(nextAction);
          }
        },
        (error) => {
          if(error&&error.alert){ 
              dispatch(resubmitWarn(true))
          }else{
            dispatch({
                ...otherAttr,
                payload: {
                loading: false,
                status: FAILURE,
                error,
                },
            });
          }
        },
      )
      .finally(() => {
        // if (process.env.NODE_ENV !== 'production') dispatch(requestPending(-1));
        dispatch(resubmitWarn(false))
      });

    return null;
  };
}
