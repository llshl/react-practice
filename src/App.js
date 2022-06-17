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
                onClick={() => {
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
          </div>
        );
      })}
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
