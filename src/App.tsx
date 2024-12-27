import { useState } from "react";

function App() {
  const [first, setfirst] = useState<string[]|null>(null)
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-eerieBlack/50">
        <div className="h-96 w-96 rounded-lg bg-white">
          <button>
          </button>
        </div>
      </div>
      <div className="z-0 flex flex-col gap-y-4 px-2 sm:px-0">
        <div className="flex justify-end">
          <button className="flex touch-manipulation items-center gap-2 rounded-lg bg-eerieBlack px-4 py-2.5 font-semibold text-white transition-all hover:shadow-md active:scale-95">
            Add task <span className="text-2xl">+</span>
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
