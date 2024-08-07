import { useState, useMemo } from "react";
import { useDebounce } from "react-customs";
import data from "../data";

function Content() {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 1000);

  const filteredItems = useMemo(() => {
    return data.filter((item) => item.toLowerCase().includes(debouncedValue.toLowerCase()));
  }, [debouncedValue]);

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6 flex flex-col gap-8">
          <div className="w-full">
            <input
              placeholder="Search fruits.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 ring-1 ring-inset ring-zinc-800 bg-transparent placeholder:text-zinc-400 rounded-md outline-none transition focus:bg-zinc-900 text-zinc-50"
            />
          </div>
          <div className="w-full">
            <span className="text-sm text-zinc-400">Searching for: {debouncedValue}</span>
            <ul className="mt-2 w-full flex flex-col">
              {filteredItems.map((item, index) => (
                <li key={index} className="w-full py-3 border-b border-zinc-800 text-sm text-emerald-400 last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
