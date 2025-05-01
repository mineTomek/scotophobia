function Cover() {
    return (
      <div className="w-[512px] relative h-[256px] bg-gradient-to-b from-emerald-50 to-emerald-100 flex flex-col items-center justify-center gap-5 m-5">
        <h1 className="text-4xl font-bold mb-4 title">Scotophobia</h1>
        <span className="opacity-70 max-w-1/2 text-center text-sm">
          "Helping" people with scotophobia since... not that long ago
        </span>

        <div className="absolute h-64 w-64 border-2 border-black hidden" />
      </div>
    );
}

export default Cover;
