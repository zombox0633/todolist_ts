function App() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-eerieBlack/50">
        <form className="relative flex w-96 flex-col justify-between gap-y-5 rounded-lg bg-white p-6 drop-shadow-xl">
          <div className="absolute right-3 top-3 z-[2]">
            <button
              type="button"
              className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-lg border border-solid border-charcoal/25 transition-all hover:shadow-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-12 w-12 rounded-lg border border-solid border-charcoal/50 p-2.5 drop-shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold">To do list</h2>
            <p className="text-sm text-charcoal">Please enter a task name to do.</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="New Task"
              className="w-full rounded-lg border border-solid border-charcoal/50 p-2.5 drop-shadow-md hover:border-charcoal"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="flex touch-manipulation items-center gap-2 rounded-lg bg-mediumSlateBlue px-4 py-2 text-base font-semibold text-white transition-all hover:shadow-md active:scale-95">
              Add task <span className="text-xl">+</span>
            </button>
          </div>
        </form>
      </div>
      <div className="z-0 flex flex-col gap-y-4 px-2 sm:px-0">
        <div className="flex justify-end">
          <button className="flex touch-manipulation items-center gap-2 rounded-lg bg-eerieBlack px-4 py-2 text-base font-semibold text-white transition-all hover:shadow-md active:scale-95">
            Add task <span className="text-xl">+</span>
          </button>
        </div>
        <div className="flex min-h-[24rem] min-w-[18.5rem] max-w-[30.5rem] items-center justify-center rounded-xl bg-white p-6 drop-shadow-xl sm:min-w-[30.5rem]">
          <ul className="flex flex-col gap-y-4">
            <li className="flex items-start gap-x-3">
              <div className="pt-[1px]">
                <input id="1" type="checkbox" />
              </div>
              <label htmlFor="1">launch madbeku - to do list on producthunt 🚀</label>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="pt-[1px]">
                <input id="2" type="checkbox" />
              </div>
              <label htmlFor="2">schedule a zoom call with design team</label>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="pt-[1px]">
                <input id="3" type="checkbox" />
              </div>
              <label htmlFor="3">push latest plooto OCR visual to zeplin</label>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="pt-[1px]">
                <input id="4" type="checkbox" />
              </div>
              <label htmlFor="4">UI cards animation for website</label>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="pt-[1px]">
                <input id="5" type="checkbox" />
              </div>
              <label htmlFor="5">reply to emails</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
