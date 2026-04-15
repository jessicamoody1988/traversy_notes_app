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
  const [formData, setFormData] = useState({
    title: "",
    priority: PRIORITIES.MEDIUM,
    category: CATEGORIES.WORK,
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const addNote = () => null;

  return (
    <form
      id="note-form"
      className="mb-6"
    >
      <TextInput
        id="title"
        label="Title"
        value={formData.title}
        onChange={onChange}
      />
      <SelectInput
        id="priority"
        label="Priority"
        value={formData.priority}
        onChange={onChange}
        options={Object.values(PRIORITIES)}
      />
      <SelectInput
        id="category"
        label="Category"
        value={formData.category}
        onChange={onChange}
        options={Object.values(CATEGORIES)}
      />
      <TextareaInput
        id="description"
        label="Description"
        value={formData.description}
        onChange={onChange}
      />
      <SubmitButton
        label="Add Note"
        onClick={addNote}
        disabled={loading}
      />
    </form>
  );
}
