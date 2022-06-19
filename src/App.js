import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집2';
  let [titles, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '기타']);
  let likeList = [];
  titles.map(() => {
    likeList.push(0);
  });
  let [like, setLike] = useState(likeList);
  let [modal, setModal] = useState(false);
  let [modelTitle, setModelTitle] = useState(0);
  let [input, setInput] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임ㅋㅋ</h4>
      </div>
      {titles.map((post, index) => {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModelTitle(index);
              }}
            >
              {post}
              <span
                onClick={e => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  let copy = [...like];
                  copy[index] += 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              {like[index]}
            </h4>
            <p>5월 27일 발행</p>
            <button
              onClick={() => {
                let copy = [...titles];
                copy.splice(index, 1); // 배열 중간에서 삭제하기, index번째부터 1개 삭제
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/*<input*/}
      {/*  onChange={e => {*/}
      {/*    setInput(e.target.value); // 비동기함수라 최초 1개 입력했을땐 아무것도 나오지 않고 2개부터 1개씩 차이나게 나, 즉 이거 완료되기 전에*/}
      {/*    console.log(input); // 이거부터 처리됨*/}
      {/*  }}*/}
      {/*/>*/}

      {/* 글 새로 발행하기 */}
      {/* input태그로 받아서 input state에 넣어줌 */}
      <input
        onChange={e => {
          setInput(e.target.value); // 비동기함수라 최초 1개 입력했을땐 아무것도 나오지 않고 2개부터 1개씩 차이나게 나, 즉 이거 완료되기 전에
          console.log(input); // 이거부터 처리됨
        }}
      />

      {/* input state를 글목록 state에 넣어줌 */}
      <button
        onClick={() => {
          let copy = [...titles];
          copy.unshift(input);
          setTitle(copy);
        }}
      >
        글발행
      </button>
      {modal ? <Modal setTitle={setTitle} titles={titles} modelTitle={modelTitle} /> : null}
    </div>
  );
}

const Modal = props => {
  return (
    <div className="modal">
      <h4>{props.titles[props.modelTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setTitle(['여자 코트 추천', '여자 코트 추천', '기타']);
        }}
      >
        글수정
      </button>
    </div>
  );
};

export default App;
