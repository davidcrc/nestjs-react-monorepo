const App = () => {
  const handleClick = async () => {
    const response = await fetch("/api");

    const data = await response.text();

    alert(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
