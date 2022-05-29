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

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임ㅋㅋ</h4>
      </div>
      {/*<div className="list">*/}
      {/*  <h4>*/}
      {/*    {글제목[0]}{' '}*/}
      {/*    <span*/}
      {/*      onClick={() => {*/}
      {/*        따봉변경(따봉 + 1);*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      👍*/}
      {/*    </span>{' '}*/}
      {/*    {따봉}*/}
      {/*  </h4>*/}
      {/*  <p>5월 27일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>{글제목[1]}</h4>*/}
      {/*  <p>5월 27일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4*/}
      {/*    onClick={() => {*/}
      {/*      setModal(!modal);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {글제목[2]}*/}
      {/*  </h4>*/}
      {/*  <p>5월 27일 발행</p>*/}
      {/*</div>*/}
      {/*{modal ? <Modal /> : null}*/}

      {titles.map((post, index) => {
        return (
          <div className="list" key={index}>
            <h4>
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
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
