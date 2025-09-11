import { AppleIcon } from "lucide-react";

const NoContent = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex flex-col gap-2 py-4 px-8 bg-white dark:bg-primary rounded-full justify-center items-center text-primary border-2">
        <AppleIcon className="text-rose-500" />
        <h1 className="text-3xl font-bold">No fruits found!</h1>
        <p className="text-lg">Maybe try again later.</p>
      </div>
    </div>
  );
};

export default NoContent;
