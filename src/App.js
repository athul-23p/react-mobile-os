import Card from "./components/Card";

function App() {
  let os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  let manfacturers = ["Samsung", "HTC", "Micromax", "Apple"];

  let data = [
    {
      title: "Mobile Operating System",
      items: [
        { content: "Android" },
        { content: "Blackberry" },
        { content: "iPhone" },
        { content: "Windows Phone" },
      ],
    },
    {
      title: "Mobile Manfacturers",
      items: [
        { content: "Samsung", listStyle: "square" },
        { content: "HTC", listStyle: "square" },
        { content: "Micromax" },
        { content: "Apple", listStyle: "circle" },
      ],
    },
  ];

  return (
    <div className="App">
      { data.map(el => <Card data={el}/>)}
    </div>
  );
}

export default App;
