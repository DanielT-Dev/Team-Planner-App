function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Tailwind is Working! 🎉
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          If you see styled content below, Tailwind is configured correctly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Card 1</h3>
            <p>Blue gradient</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Card 2</h3>
            <p>Green gradient</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Card 3</h3>
            <p>Purple gradient</p>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg">
          Test Button
        </button>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>If everything looks styled, you're good to go!</p>
          <p className="mt-2 font-mono">Check DevTools → Elements → Styles for Tailwind classes</p>
        </div>
      </div>
    </div>
  );
}

export default App;