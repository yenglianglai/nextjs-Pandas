import Header from "../components/header";
import Grid from "../components/grid";
import SearchIcon from "../public/search-icon.png";
import Image from "next/image";

function Order() {
  return (
    <div className="flex flex-col">
      <Header />
      <label className="relative block w-1/3 self-center py-4">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="h-4 w-4 self-center justify-self-center">
            <Image className="object-contain" src={SearchIcon} alt=""></Image>
          </div>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
      <Grid></Grid>
    </div>
  );
}

export default Order;
