import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const LOGIN_USER = 'user/LOGIN_USER'; // 로그인 시, 유저 정보 저장
export const LOGOUT_USER = 'user/LOGOUT_USER'; // 로그아웃 시, 유저 정보 초기화

// 액션 생성자
export const loginUser = createAction(LOGIN_USER, id => id);
export const logoutUser = createAction(LOGOUT_USER, id => id);

// 초기 상태
const initialSatate = {
  user: { id: null, nick: null, loginTime: null },
};

// 리듀서
export default handleActions(
  {
    [LOGIN_USER]: (state, action) => produce(state, (draft) => {
      draft.list.push({
        id: action.payload.id,
        nick: action.payload.nick,
        loginTime: action.payload.logintime,
      });
    }),
    [LOGOUT_USER]: state => produce(state, (draft) => {
      draft.list.push({
        id: null,
        nick: null,
        loginTime: null,
      });
    }),
  },
  initialSatate,
);
