import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import ParentComponent from './components/ParentComponent';
import PropsComponent from './components/PropsComponent';
import ChildrenComponent from './components/ChildrenComponent';
import StateComponent from './components/StateComponent';
import RefComponent from './components/RefComponent';
import LifeCycleComponent from './components/LifeCycleComponent';

/*
  날짜 : 2024-04-30
  이름 : 이승윤
  내용 : ch03.리액트 컴포넌트 실습

  컴포넌트
   - 화면 UI 또는 기능을 독립적인 구조의 모듈
   - 클래스형과 함수형 컴포넌트가 있지만 최신 리액트에서는 함수형 컴포넌트만 사용
  
  프로퍼티(props)
   - 상위 컴포넌트에서 하위 컴포넌트로 전달하는 데이터
   - {children}은 컴포넌트 사이 내용을 자식 컴포넌트로 전달할 때 사용하는 특수 props
  
  상태(state)
   - state는 컴포넌트 내부의 데이터
   - 함수형 컴포넌트에서는 useState() Hook 사용
  
  컴포넌트 생명주기(lifecycle)
   - 컴포넌트 생명주기는 컴포넌트가 생성되고 화면에 출력된 후 제거되기 까지의 일련의 단계
   - 컴포넌트 mount, update, unmount 단계의 각 생명주기 함수가 호출
   - 컴포넌트 상태값이 업데이트 되면 update 단계의 shouldComponentUpdate, render, componentDidUpdate 발생

*/

function App() {
  return (
    <div className="App">
      <h3>ch03. React component</h3>
      <ClassComponent/>
      <FunctionComponent/>
      <ParentComponent/>
      <PropsComponent subject="props 컴포넌트" message="속성을 갖는 컴포넌트" />
      <ChildrenComponent>
        <p>ChildComponent 내용 입니다.</p>
      </ChildrenComponent>
      <StateComponent/>
      <RefComponent/>
      <LifeCycleComponent/>
    </div>
  );
}

export default App;
