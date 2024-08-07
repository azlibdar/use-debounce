import githubMarkWhite from "../assets/img/github-mark-white.svg";

function Header() {
  return (
    <header className="w-full p-4 md:p-6 flex justify-between items-center border-b border-zinc-800">
      <h1 className="text-base text-zinc-100 font-semibold">useDebounce</h1>
      <a href="https://github.com/azlibdar/use-debounce" title="Get Source Code" className=" no-underline flex justify-center items-center">
        <img src={githubMarkWhite} alt="GitHub logo" className="w-6 md:w-8" />
      </a>
    </header>
  );
}

export default Header;
