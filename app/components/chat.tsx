"use client"
import { useChat } from 'ai/react';

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="p-6 bg-gray-100 rounded-lg">
        {/* ChatBot title */}
        <h1 className="text-xl font-bold mb-4 text-center">My ChatBot</h1>

        <ul className="mb-4">
          {messages.map((m, index) => (
            <li key={index} className="mb-2">
              <span className={m.role === 'user' ? 'text-blue-600 font-semibold' : 'text-green-600 font-semibold'}>
                {m.role === 'user' ? 'You: ' : 'ChatBot: '}
              </span>
              <span className="text-gray-800">{m.content}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2">
            <span className="block text-sm font-medium text-gray-700">Say something...</span>
            <input 
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              value={input} 
              onChange={handleInputChange} 
            />
          </label>
          <button 
            type="submit" 
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

