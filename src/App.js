import './App.css';
import SectionTitle from './SectionTitle';
import ServicesList from './ServicesList'
import ServiceCard from './ServiceCard';
import ServicesData from './_uzduotys/1 ourServices/services.json'

function App() {
  return (
    <div className='App'>
      <SectionTitle />
      <ServicesList data={ServicesData} />
    </div>
  );
}

export default App;
