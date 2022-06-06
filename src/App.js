import { useState, useEffect } from 'react';
import './App.css';
import SectionTitle from './SectionTitle';
import ServicesList from './ServicesList';
import ServiceCard from './ServiceCard';
import HeaderBtn from './ServicesSection';
// import ServicesData from './_uzduotys/1 ourServices/services.json';
// import ServicesData from '/services.json';



function getData() {
  return fetch('services.json');
}

function App() {
  const [dataStore, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setData(data))
  }, []);

  return (
    <div className='App'>
      <SectionTitle />
      <ServicesList data={dataStore} />
      <HeaderBtn>Tekstas</HeaderBtn>
    </div>
  );
}

export default App;
