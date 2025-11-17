import React from "react";

function App() {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
        <div className="w-[70%] sm:w-120 border rounded-2xl border-gray-200 shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">로그인</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet wkjfkd</p>
          </div>
          <div className="mb-6">
            <button className=" w-full flex justify-center items-center gap-3 p-2 rounded border text-sm border-gray-300">
              {/* <button className="w-full flex justify-center items-center gap-3 p-2 rounded border border-gray-300 text-sm"> */}
              <svg className="size-5" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303C33.915 31.658 29.323 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.139 29.748 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.818C14.297 15.097 18.789 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.139 29.748 3 24 3 16.318 3 9.656 7.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 43c5.251 0 10.053-2.007 13.682-5.289l-6.312-5.338C29.358 33.798 26.846 35 24 35c-5.298 0-9.874-3.317-11.289-7.946l-6.55 5.046C9.472 39.556 16.178 43 24 43z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a11.996 11.996 0 01-4.089 5.662l.003-.002 6.312 5.338C36.94 39.229 44 35 44 23c0-1.341-.138-2.651-.389-3.917z"
                />
              </svg>
              Google로 계속하기
            </button>
          </div>

          <div className="mb-6">
            <form className="mb-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  이메일
                </label>
                <input
                  type="text"
                  className="border w-full rounded-lg border-gray-300 py-2 px-2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-2">
                  password
                </label>
                <input
                  type="text"
                  className="border w-full rounded-lg border-gray-300 py-2 px-2"
                />
              </div>
              <button className="w-full flex justify-center items-center rounded-lg bg-info text-white funt-bold py-2 hover:text-gray-700 transition gap-2">
                <div className="w-3 h-3 bg-amber-300 animate-spin "></div>
                로그인
              </button>
            </form>
            <p className="text-sm text-center text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
