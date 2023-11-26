
import Navbar from './components/NavBar';

function App() {
  let x=" great stack";
  let array=[1,2,3,4,5];
  const eventHan =()=>{
    console.log("hi");
  }
  return (
    <div>
      Learning
      {x}
      {
        array.map((arr)=>{
          return <><h4 key={arr}>{arr}</h4></>
        })
      }
      <button onClick={eventHan}>hi</button>
      <br/>
      <br/>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />

    </div>
  );
}

export default App;
