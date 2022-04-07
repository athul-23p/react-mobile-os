

function App() {
  let os = ['Android','Blackberry','iPhone','Windows Phone'];
  let manfacturers = ['Samsung','HTC','Micromax','Apple'];

  return (
    <div className="App">
      <StaticCard title="Mobile Operating Systems" listItems = {os} />
      <StaticCard title="Mobile Manfacturers" listItems = {manfacturers} />
    </div>
  );
}

function StaticCard(props){
  return <div>
      <h2>{props.title}</h2>
      <ul>{props.listItems.map(el => <li>{el}</li>)}</ul>
  </div>;
}
export default App;
