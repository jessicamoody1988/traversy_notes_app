import { useState } from "react";
import { TextInput, SelectInput, TextareaInput, SubmitButton } from "./form_fields";

const PRIORITIES = {
  HIGH: "🔴 High",
  MEDIUM: "🟠 Medium",
  LOW: "🟡 Low",
  NONE: "⚪ None",
};

const CATEGORIES = {
  WORK: "Work",
  PERSONAL: "Personal",
  IDEAS: "Ideas",
  SHOPPING: "Shopping",
};

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(PRIORITIES.MEDIUM);
  const [category, setCategory] = useState(CATEGORIES.WORK);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const addNote = () => null;

  return (
    <form
      id="note-form"
      className="mb-6"
    >
      <TextInput
        id="title"
        label="Title"
        value={title}
        onChange={setTitle}
      />
      <SelectInput
        id="priority"
        label="Priority"
        value={priority}
        onChange={setPriority}
        options={Object.values(PRIORITIES)}
      />
      <SelectInput
        id="category"
        label="Category"
        value={category}
        onChange={setCategory}
        options={Object.values(CATEGORIES)}
      />
      <TextareaInput
        id="description"
        label="Description"
        value={description}
        onChange={setDescription}
      />
      <SubmitButton
        label="Add Note"
        onClick={addNote}
        disabled={loading}
      />
    </form>
  );
}
