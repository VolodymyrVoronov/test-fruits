import { useGetAllFruitsQuery } from "./services/fruitApi";

import ErrorBlock from "./components/ErrorBlock";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NoContent from "./components/NoContent";
import ButtonScrollToTop from "./components/ButtonScrollToTop";

const App = () => {
  const { data, error, isLoading } = useGetAllFruitsQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorBlock />;
  if (!data) return <NoContent />;

  return (
    <>
      <div className="max-w-7xl mx-auto p-2 md:p-3 lg:p-5">
        <Main fruits={data} />
      </div>

      <ButtonScrollToTop />
    </>
  );
};

export default App;

