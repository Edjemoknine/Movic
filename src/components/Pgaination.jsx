const Pgaination = ({ setPage, page }) => {
  return (
    <div className="flex justify-center items-center gap-3 py-6">
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className="text-white disabled:bg-red-950 disabled:cursor-not-allowed font-bold bg-red-500 px-3 py-1.5 hover:bg-red-600"
      >
        Prev
      </button>
      <p className="px-4 font-black">{page}</p>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="text-white font-bold bg-red-500 px-3 py-1.5 hover:bg-red-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pgaination;
