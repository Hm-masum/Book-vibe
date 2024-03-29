import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="lg:p-10 p-4 flex bg-base-200 rounded-2xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-4">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/Kq2Jxsx/karen-zhao-2bq-Xqr4-Ge-Cg-unsplash.jpg"
              className="rounded-lg "
            />
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <div className="space-y-3 lg:space-y-8">
              <h1 className="text-2xl lg:text-5xl font-semibold">
                Books to freshen up your bookshelf
              </h1>
              <NavLink to={"/listedBooks"} className="btn bg-green-400">
                View The List
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
