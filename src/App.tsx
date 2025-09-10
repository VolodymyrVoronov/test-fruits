import { useGetAllFruitsQuery } from "./services/fruitApi";

import ConstellationLoader from "./components/ConstellationLoader";
import ErrorBlock from "./components/ErrorBlock";
import { Button } from "./components/ui/button";

const App = () => {
  const { data, error, isLoading } = useGetAllFruitsQuery();

  if (isLoading) return <ConstellationLoader />;
  if (error) return <ErrorBlock />;

  console.log(data);

  return (
    <div className="max-w-xl mx-auto">
      <Button>Click me</Button>
    </div>
  );
};

export default App;

