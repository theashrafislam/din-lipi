import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      
      {/* Icon */}
      <div className="bg-gray-200 rounded-full p-5 mb-6 shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L15 12l-5.25-5"
          />
        </svg>
      </div>

      {/* Error Message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        দুঃখিত!
      </h1>
      <p className="text-base md:text-lg mb-6 text-center max-w-md text-gray-600">
        কিছু সমস্যা হয়েছে। তুমি পেজ রিফ্রেশ করতে পারো অথবা হোম পেজে ফিরে যেতে পারো।
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        <button
          onClick={() => window.location.reload()}
          className="bg-gray-800 text-white px-5 text-nowrap py-2 rounded-md hover:bg-gray-700 transition"
        >
          আবার চেষ্টা করো
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-white border border-gray-300 px-5 text-nowrap py-2 rounded-md hover:bg-gray-100 transition"
        >
          হোমে ফিরে যাও
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;