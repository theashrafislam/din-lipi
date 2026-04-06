import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 text-white p-6 relative">
      
      {/* AR আইকন */}
      <div className="bg-white/10 rounded-full p-6 mb-8 animate-bounce shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
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
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center">
        দুঃখিত!
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-md">
        অভিজ্ঞতা চালু করার সময় কিছু সমস্যা হয়েছে। 
        তুমি পেজ রিফ্রেশ করতে পারো অথবা হোম পেজে ফিরতে পারো।
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white/90 transition"
        >
          আবার চেষ্টা করো
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          হোমে ফিরে যাও
        </button>
      </div>

      {/* AR-style Decorative Dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-ping opacity-50" style={{ top: "10%", left: "20%" }} />
        <div className="absolute w-3 h-3 bg-white rounded-full animate-ping opacity-50" style={{ top: "70%", left: "80%" }} />
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-70" style={{ top: "50%", left: "50%" }} />
      </div>
    </div>
  );
};

export default ErrorPage;