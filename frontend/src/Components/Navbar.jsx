import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) {
      setSearchMessage("Please enter something to search.");
      return;
    }

    const sections = document.querySelectorAll(
      "main section, body > section, #root section"
    );

    const matchingSection = Array.from(sections).find((section) =>
      section.textContent.toLowerCase().includes(query)
    );

    if (matchingSection) {
      matchingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setSearchMessage("");
    } else {
      setSearchMessage("No matching section found on this page.");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Main navigation row */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3 sm:px-6">
        {/* Website brand */}
        <Link
          to="/"
          className="shrink-0 text-xl font-extrabold text-gray-900"
        >
          DEV<span className="text-blue-600">@</span>Deakin
        </Link>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex min-w-0 flex-1 items-center gap-2"
        >
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchMessage("");
            }}
            placeholder="Search projects, tutorials..."
            aria-label="Search this page"
            className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Post button */}
<Link
  to="/post"
  className="rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
>
  Post
</Link>

        {/* Login button */}
        <Link
          to="/login"
          className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </Link>

        {/* Signup button */}
        <Link
          to="/signup"
          className="rounded-md border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Sign Up
        </Link>
      </div>

      {/* Homepage navigation links */}
      <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 bg-gray-900 px-4 py-3 text-white">
        <a href="/#about" className="transition hover:text-blue-400">
          About
        </a>

        <a href="/#work" className="transition hover:text-blue-400">
          Work
        </a>

        <a href="/#gallery" className="transition hover:text-blue-400">
          Gallery
        </a>

        <a href="/#subscribe" className="transition hover:text-blue-400">
          Subscribe
        </a>

        <a href="/#contact" className="transition hover:text-blue-400">
          Contact
        </a>
      </nav>

      {/* Search feedback */}
      {searchMessage && (
        <p
          role="status"
          className="bg-blue-50 px-4 py-2 text-center text-sm text-blue-800"
        >
          {searchMessage}
        </p>
      )}
    </header>
  );
}

export default Navbar;