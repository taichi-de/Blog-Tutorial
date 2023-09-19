import { NextPage } from "next";
import RightSidebar from "../components/RightSidebar";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 px-0 md:p-8 lg:w-4/5 w-full h-full text-left mx-auto">
      <div className="lg:col-span-8 col-span-12 bg-main pt-4 px-2 rounded-sm">
        <div className="grid md:grid-cols-2 gap-4 m-4">
          <p className="text-xl font-bold">Latest Posts</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:block h-full">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
