import './App.css';
import Col from './component/Col/col';
import Customer from './component/Customer/customer';
import Sumary from './component/sumary/sumary';
const styleApp = {

  backgroundColor: "rgba(255,255,255,0.2)",
}
function App() {
  return (
    <>
      <div className='container-fluid' style={{ "backgroundImage": "url(./bgmovie.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" }}>
        <h1 className='text-center text-white' >MOVIE SEAT SELECTION</h1>
        <div className='container py-3 rounded shadow' style={styleApp}>
          <Customer />
          
          <Col />
          <Sumary />
        </div>
      </div>
    </>
  );
}

export default App;
