function Header({ onOpenWatchlist, isDarkMode, setIsDarkMode }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 text-center shadow-lg">
      <h1 className="text-4xl font-bold">Watchlist App</h1>
      <div className="mt-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={onOpenWatchlist}
        >
          Ver mi lista
        </button>
        <label className="ml-4 inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={isDarkMode}
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
          <span className="ml-2 text-sm text-white">Modo Oscuro</span>
        </label>
      </div>
    </header>
  );
}

export default Header;
