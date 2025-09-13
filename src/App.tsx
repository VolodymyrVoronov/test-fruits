import { useEffect } from "react";

import { useGetAllFruitsQuery } from "./services/fruitApi";

import ButtonScrollToTop from "./components/ButtonScrollToTop";
import ErrorBlock from "./components/ErrorBlock";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NoContent from "./components/NoContent";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

const App = () => {
  const { data, error, isLoading } = useGetAllFruitsQuery();

  useEffect(() => {
    if (data) {
      toast.success(
        <div className="flex items-center gap-2">
          <span>{data?.length} fruits have been loaded</span>
          <span className="font-bold">🍓</span>
        </div>
      );
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorBlock />;
  if (!data) return <NoContent />;

  return (
    <>
      <div className="max-w-7xl mx-auto p-2 md:p-3 lg:p-5">
        <Main fruits={data} />
      </div>

      <ButtonScrollToTop />

      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;

