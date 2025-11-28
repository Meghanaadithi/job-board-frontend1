export default function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search jobs…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded border shadow-sm"
      />
    );
  }
  