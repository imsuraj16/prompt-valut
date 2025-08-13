import React from "react";
import { useSelector } from "react-redux";

const MyVault = () => {
  const prompts = useSelector((state) => state.prompt.userPrompts);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        My <span className="text-yellow-500">Vault</span>
      </h1>

      {/* If no prompts */}
      {(!prompts || prompts.length === 0) && (
        <div className="text-center text-gray-400 text-lg">
          No prompts saved yet.
        </div>
      )}

      {/* Prompts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {prompts?.map((prompt) => (
          <div
            key={prompt._id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold mb-3 text-yellow-500">
                {prompt.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {prompt.promptText}
              </p>
              <div>
                {prompt.tags[0]?.split("\n").map((tag, i) => (
                  <span
                    key={i}
                    className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs mr-2 mb-2 inline-block w-fit"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400 transition-colors text-sm">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition-colors text-sm">
                Delete
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 transition-colors text-sm">
                Make Public
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVault;
