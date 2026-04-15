import NoteForm from "./components/NoteForm";

import { NotepadText } from "lucide-react";

export default function App() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-center items-center gap-2 text-2xl font-bold mb-4 text-center">
        <NotepadText />
        <h2>Notes App</h2>
      </div>

      <NoteForm />
    </div>
  );
}
