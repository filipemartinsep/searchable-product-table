import "./App.css";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function App() {
  return <p>Hello, world!</p>;
}

export default App;
