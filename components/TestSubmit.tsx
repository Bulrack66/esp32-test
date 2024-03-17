"use client"
export default function TestSubmit()  {
  return (
    <form className="rounded px-8 pt-6 pb-8 mb-4 max-w-md">
      <div className="flex">
        <input
          className="grow mr-1 transition ease-out delay-75 focus-within:border-2 focus-within:border-purple-600 items-center h-14 pr-0.5 border border-purple-600 rounded caret-purple-700 outline-none px-4 disabled:border-slate-400"
          type="email"
          placeholder="What is your email address?"
        />
        <button
          className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

