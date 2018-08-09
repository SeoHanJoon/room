import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const LOGIN_USER = 'user/LOGIN_USER'; // 로그인 시, 유저 정보 저장
export const LOGOUT_USER = 'user/LOGOUT_USER'; // 로그아웃 시, 유저 정보 초기화

// 액션 생성자
export const loginUser = createAction(LOGIN_USER, id => id);
export const logoutUser = createAction(LOGOUT_USER, id => id);

// 초기 상태
const initialSatate = {
  mainBoard: [
    {
      id: 1,
      title: '코끼리 아저씨는 코가 손이래?',
      content:
        '코끼리는 정말 코를 손처럼 자유자재로 써요.<br />노래 가사처럼 과자도 집어먹고, 물건을 움직이기도 하고,<br />또 물을 뿌려 목욕을 하기도 해요. 심지어 사랑 고백도 한대요!<br /><br />코끼리 코는 정말 만능이군요!',
      img:
        'https://postfiles.pstatic.net/MjAxODAyMDdfMTEy/MDAxNTE3OTg3MzAwMTQ5.YQXnRQQ-sWZMne7nC6smFkKhgdY94na668XVoq0o1wcg.NkoINIW7FRNlsTdO0QyMvzTiwvJb4RBxp98tTxQ80p4g.JPEG.naverschool/photo-1503889678302-211ae988b095.jpg?type=w773',
    },
    {
      id: 2,
      title: '[해외 테마 마을] 여름방학 해외여행 대신 국내에서 즐기는 해외 테마 마을!',
      content:
        '곧 다가올 여름방학! 어디론가 훌쩍 떠날 여행 계획이 있으신가요? 가까운 중국부터 머나먼 유럽까지 당장 떠나고 싶은 해외 여행지가 수두룩하지만 현실은 ‘#해외여행’ 만 열심히 검색하는 나 자신을 볼 수 있을 텐데요. ㅠ.ㅠ<br /><br />비용적으로나 시간적으로나 가기 어려운 해외 여행지를 국내에서 즐길 수 있다는 사실! 알고 계신가요? 오늘은 해외 여행을 떠나지 못하는 여러분을 위해 한국인지, 해외인지 헷갈릴 정도로 이색적인 해외 테마 마을들을 소개해 볼게요!',
      img:
        'https://postfiles.pstatic.net/MjAxODA3MTNfMjAg/MDAxNTMxNDQ0MDcyOTc2.7MK2vDr9hp8WcwuixfqIfOvmTh0sEC8IJQzuP_X5n28g.MRIewItUOWHXPMVHNNjqTdsIOoO6I1rhig4IbnUxbjsg.PNG.igseacademy/%ED%91%9C%EC%A7%80.png?type=w966',
    },
    {
      id: 3,
      title: '[스쿨잼 프렌즈 2기] 프랑스의 급식은 어떻게 다를까?',
      content:
        "Salut! (쌀뤼! 안녕!)<br /><br />이 말은 프랑스어로 만났을 때 하는 다양한 인사 중 하나야.<br />흔히들 아는 인사 'Bonjour'는 모르는 사람끼리도 가볍게 하는 인사지만,<br />Salut는 가까운 사람들끼리만 하는 인사야.",
      img:
        'https://postfiles.pstatic.net/MjAxODA3MTZfNjUg/MDAxNTMxNzA1MTQxODY1.DwXe7JqTTl48f5DJYLMtHa9QrCxY3Usk17chKiuQ-iQg.Ki2Z8yutxHecs2vWG4eTCFpapnx7S4OPPShPikhXW8Ig.JPEG.naverschool/%ED%94%841.jpg?type=w773',
    },
    {
      id: 4,
      title: '프로그래밍으로 간단한 미디어 아트 만들기',
      content:
        '이번 시간에는 미디어 아트 프로그램을 만들어보려 해요.<br />마우스 클릭만으로 꾸밀 수 있게요!<br /><br />처음 소프트웨어를 접한 사람들도 쉽게 다룰 수 있는 블록형 프로그래밍 언어,<br />엔트리(playentry.org)를 이용해 프로그램을 만들어 보겠습니다.',
      img:
        'https://post-phinf.pstatic.net/MjAxODA3MTFfMTYg/MDAxNTMxMjgzNzI3ODcy.Ii3roVNlTHDYRa65ZYd07hJWiMhBV9BoHsV20x-ui98g.c8wdiEuIYBQpUbmDviqVomzTOFIbH3Wh6P-HuHE6j_Mg.PNG/%EB%AF%B8%EB%94%94%EC%96%B4_%EC%95%84%ED%8A%B8_1_%ED%99%94%EB%A9%B4.PNG?type=w1200',
    },
  ],
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
