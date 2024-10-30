import Accordion from "./components/Acordion";

const items = [
  { title: "Section 1", content: "Content of Section 1" },
  { title: "Section 2", content: "Content of Section 2" },
  { title: "Section 3", content: "Content of Section 3" },
  { title: "Section 4", content: "Content of Section 4" },
  { title: "Section 5", content: "Content of Section 5" },
  { title: "Section 6", content: "Content of Section 6" },
  { title: "Section 7", content: "Content of Section 7" },
  { title: "Section 8", content: "Content of Section 8" },
  { title: "Section 9", content: "Content of Section 9" },
  { title: "Section 10", content: "Content of Section 10" },
];

function App() {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion items={items} />
      <p>Funcionando</p>
      <h1>FUNCIONANDOOOOOOOOOOOOOOOOOOOOOOOO</h1>
    </div>
  );
}

export default App;
