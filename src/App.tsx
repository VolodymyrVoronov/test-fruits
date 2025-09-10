import { useGetAllFruitsQuery } from "./services/fruitApi";

import { Button } from "./components/ui/button";

const App = () => {
  const { data, error, isLoading } = useGetAllFruitsQuery();

  if (isLoading) return <p>Loading fruits...</p>;
  if (error) return <p>Oops! Something went wrong.</p>;

  console.log(data);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default App;

