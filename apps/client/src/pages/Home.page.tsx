import { Button, TextInput } from "../shared/ui";

const HomePage = () => {
  const handleClick = async () => {
    console.log("call me");
    const response = await fetch("/api");

    const data = await response.text();

    alert(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4 bg-slate-200">
        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenido a Mi Proyecto de Pruebas
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Este es un proyecto de pruebas donde puedes realizar diversas pruebas
          y experimentos.
        </p>

        <div>
          <Button onClick={handleClick} size="sm">
            Click me
          </Button>

          <TextInput label="intro" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
