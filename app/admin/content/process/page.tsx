"use client";

import { useEffect, useState } from "react";

type ProcessItem = {
  no: string;
  title: string;
  text: string;
};

const defaultProcess: ProcessItem[] = [
  {
    no: "01",
    title: "Discover",
    text: "We understand the brand, product, audience and the reason behind the project.",
  },
  {
    no: "02",
    title: "Define",
    text: "The idea becomes a clear visual direction, treatment and production plan.",
  },
  {
    no: "03",
    title: "Create",
    text: "Production begins — camera, light, people, movement and details come together.",
  },
  {
    no: "04",
    title: "Refine",
    text: "Editing, sound, color and design shape the final story.",
  },
  {
    no: "05",
    title: "Deliver",
    text: "The final content is prepared for the exact platforms and purposes it needs to serve.",
  },
];

const emptyProcessItem: ProcessItem = {
  no: "",
  title: "",
  text: "",
};

export default function ProcessAdminPage() {
  const [items, setItems] = useState<ProcessItem[]>([]);
  const [form, setForm] = useState<ProcessItem>(emptyProcessItem);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-process");

    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems(defaultProcess);
      }
    } else {
      setItems(defaultProcess);
    }
  }, []);

  const saveItems = (updatedItems: ProcessItem[]) => {
    setItems(updatedItems);

    localStorage.setItem(
      "chitrokotha-process",
      JSON.stringify(updatedItems)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const getNextNumber = () => {
    const numbers = items
      .map((item) => parseInt(item.no, 10))
      .filter((number) => !Number.isNaN(number));

    const highest = numbers.length ? Math.max(...numbers) : 0;

    return String(highest + 1).padStart(2, "0");
  };

  const createNew = () => {
    setEditingIndex(null);

    setForm({
      ...emptyProcessItem,
      no: getNextNumber(),
    });

    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const editItem = (index: number) => {
    setEditingIndex(index);
    setForm({ ...items[index] });
    setShowForm(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingIndex(null);
    setForm(emptyProcessItem);
  };

  const handleChange = (
    field: keyof ProcessItem,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      alert("Please enter a process title.");
      return;
    }

    if (!form.text.trim()) {
      alert("Please enter a process description.");
      return;
    }

    const itemToSave = {
      ...form,
      no: form.no.trim() || getNextNumber(),
    };

    if (editingIndex === null) {
      saveItems([...items, itemToSave]);
    } else {
      saveItems(
        items.map((item, index) =>
          index === editingIndex ? itemToSave : item
        )
      );
    }

    cancelForm();
  };

  const deleteItem = (index: number) => {
    const item = items[index];

    const confirmed = window.confirm(
      `Delete "${item.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    saveItems(
      items.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const resetProcess = () => {
    const confirmed = window.confirm(
      "Reset the Process section to the original default steps?"
    );

    if (!confirmed) return;

    setItems(defaultProcess);

    localStorage.setItem(
      "chitrokotha-process",
      JSON.stringify(defaultProcess)
    );

    cancelForm();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: "1150px" }}>
      <div style={headerStyle}>
        <div>
          <p style={eyebrowStyle}>Website Content</p>

          <h1 style={headingStyle}>Our Process</h1>

          <p style={descriptionStyle}>
            Manage the steps shown in the Our Process section.
          </p>
        </div>

        <button onClick={createNew} style={primaryButtonStyle}>
          + Create New Step
        </button>
      </div>

      {saved && (
        <div style={successStyle}>
          ✓ Changes saved successfully.
        </div>
      )}

      {showForm && (
        <div style={cardStyle}>
          <div style={formHeaderStyle}>
            <div>
              <h2 style={formHeadingStyle}>
                {editingIndex === null
                  ? "Create New Process Step"
                  : "Edit Process Step"}
              </h2>

              <p style={formDescriptionStyle}>
                Add or update a step in the production process.
              </p>
            </div>

            <button
              onClick={cancelForm}
              style={closeButtonStyle}
            >
              Cancel
            </button>
          </div>

          <div style={{ display: "grid", gap: "20px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "20px",
              }}
            >
              <Field
                label="Number"
                value={form.no}
                onChange={(value) => handleChange("no", value)}
              />

              <Field
                label="Step Title"
                value={form.title}
                onChange={(value) =>
                  handleChange("title", value)
                }
              />
            </div>

            <Field
              label="Description"
              type="textarea"
              value={form.text}
              onChange={(value) => handleChange("text", value)}
            />
          </div>

          <div style={formActionsStyle}>
            <button
              onClick={cancelForm}
              style={secondaryButtonStyle}
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              style={primaryButtonStyle}
            >
              {editingIndex === null
                ? "Create Step"
                : "Update Step"}
            </button>
          </div>
        </div>
      )}

      <div style={listHeaderStyle}>
        <div>
          <h2 style={listTitleStyle}>Process Steps</h2>

          <p style={listCountStyle}>
            {items.length} step{items.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={resetProcess}
          style={secondaryButtonStyle}
        >
          Reset to Defaults
        </button>
      </div>

      {items.length === 0 ? (
        <div style={emptyStateStyle}>
          <h3 style={{ margin: "0 0 8px" }}>
            No process steps yet
          </h3>

          <p
            style={{
              margin: "0 0 20px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Create the first step.
          </p>

          <button onClick={createNew} style={primaryButtonStyle}>
            + Create New Step
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {items.map((item, index) => (
            <div key={`${item.no}-${index}`} style={itemStyle}>
              <div style={numberStyle}>{item.no}</div>

              <div>
                <h3 style={itemTitleStyle}>{item.title}</h3>

                <p style={itemTextStyle}>{item.text}</p>
              </div>

              <div style={itemActionsStyle}>
                <button
                  onClick={() => editItem(index)}
                  style={secondaryButtonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteItem(index)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={noteStyle}>
        <strong>Note:</strong> Changes are currently stored in this
        browser using localStorage.
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "input",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "input" | "textarea";
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span style={labelStyle}>{label}</span>

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          style={inputStyle}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}
    </label>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "25px",
  marginBottom: "30px",
};

const eyebrowStyle = {
  margin: "0 0 8px",
  color: "#777",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
};

const headingStyle = {
  margin: 0,
  fontSize: "32px",
  fontWeight: 600,
};

const descriptionStyle = {
  margin: "10px 0 0",
  color: "#777",
  fontSize: "14px",
};

const successStyle = {
  marginBottom: "20px",
  padding: "12px 15px",
  borderRadius: "6px",
  background: "#edf8f1",
  color: "#167a42",
  border: "1px solid #cfe9d8",
  fontSize: "13px",
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #dcdcdc",
  borderRadius: "10px",
  padding: "30px",
  marginBottom: "30px",
};

const formHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
};

const formHeadingStyle = {
  margin: 0,
  fontSize: "21px",
  fontWeight: 600,
};

const formDescriptionStyle = {
  margin: "6px 0 0",
  color: "#888",
  fontSize: "13px",
};

const formActionsStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "30px",
  paddingTop: "25px",
  borderTop: "1px solid #eee",
};

const listHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
};

const listTitleStyle = {
  margin: 0,
  fontSize: "19px",
  fontWeight: 600,
};

const listCountStyle = {
  margin: "5px 0 0",
  color: "#888",
  fontSize: "13px",
};

const itemStyle = {
  background: "#fff",
  border: "1px solid #e2e2e2",
  borderRadius: "10px",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "60px 1fr auto",
  gap: "20px",
  alignItems: "center",
};

const numberStyle = {
  fontSize: "13px",
  color: "#888",
};

const itemTitleStyle = {
  margin: "0 0 7px",
  fontSize: "18px",
  fontWeight: 600,
};

const itemTextStyle = {
  margin: 0,
  color: "#777",
  fontSize: "13px",
  lineHeight: 1.5,
};

const itemActionsStyle = {
  display: "flex",
  gap: "8px",
};

const emptyStateStyle = {
  background: "#fff",
  border: "1px dashed #ccc",
  borderRadius: "10px",
  padding: "60px 30px",
  textAlign: "center" as const,
};

const noteStyle = {
  marginTop: "25px",
  padding: "15px",
  borderRadius: "7px",
  background: "#f0f0f0",
  color: "#666",
  fontSize: "12px",
  lineHeight: 1.6,
};

const labelStyle = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#333",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  border: "1px solid #d8d8d8",
  borderRadius: "6px",
  padding: "12px 13px",
  fontSize: "14px",
  color: "#111",
  background: "#fff",
};

const primaryButtonStyle = {
  border: "none",
  borderRadius: "6px",
  padding: "11px 18px",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 600,
};

const secondaryButtonStyle = {
  border: "1px solid #d5d5d5",
  borderRadius: "6px",
  padding: "10px 15px",
  background: "#fff",
  color: "#333",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
};

const deleteButtonStyle = {
  border: "1px solid #e2baba",
  borderRadius: "6px",
  padding: "10px 15px",
  background: "#fff",
  color: "#b42318",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
};

const closeButtonStyle = {
  border: "none",
  background: "transparent",
  color: "#777",
  cursor: "pointer",
  fontSize: "13px",
};