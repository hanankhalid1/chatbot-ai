import Chat from "./components/chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="py-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to My ChatBot</h1>
        <p className="text-lg text-gray-600">Start chatting with our AI assistant below.</p>
      </header>
      <main className="mt-8">
        <Chat />
      </main>
      <footer className="mt-8 text-gray-600">
        <p>© 2024 My ChatBot AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
