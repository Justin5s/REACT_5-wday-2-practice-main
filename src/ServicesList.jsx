import Card from './ServiceCard';

function ServicesList({ data }) {
  console.log('data ===', data);
  return (
    <div className='container'>
      {data.map((dataObj) => (
        <Card 
        key = {dataObj.id}
        icon = {dataObj.icon}
        title = {dataObj.title}
        text = {dataObj.summary}
        />
      ))}
    </div>
  );
}

export default ServicesList;
