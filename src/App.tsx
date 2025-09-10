import { useGetAllFruitsQuery } from "./services/fruitApi";

import Loader from "./components/Loader";
import ErrorBlock from "./components/ErrorBlock";
import { Button } from "./components/ui/button";

const App = () => {
  const { data, error, isLoading, ...rest } = useGetAllFruitsQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorBlock />;

  console.log(data, rest);

  return (
    <div className="max-w-xl mx-auto">
      <Button>Click me</Button>
    </div>
  );
};

export default App;

