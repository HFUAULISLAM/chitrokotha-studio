"use client";

import { useEffect, useState } from "react";

type Need = {
  no: string;
  title: string;
  text: string;
};

const defaultNeeds: Need[] = [
  {
    no: "01",
    title: "Launching something new?",
    text: "Build a visual campaign around your product, service or announcement.",
  },
  {
    no: "02",
    title: "Need social content?",
    text: "Reels, short films, photography and campaign assets designed for modern platforms.",
  },
  {
    no: "03",
    title: "Need a stronger identity?",
    text: "Create a consistent visual language across film, photography and design.",
  },
  {
    no: "04",
    title: "Have an idea?",
    text: "Bring us the idea. We can help turn it into something people can see and feel.",
  },
];

const emptyNeed: Need = {
  no: "",
  title: "",
  text: "",
};

export default function BrandNeedsAdminPage() {
  const [needs, setNeeds] = useState<Need[]>([]);
  const [form, setForm] = useState<Need>(emptyNeed);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "chitrokotha-brand-needs"
    );

    if (stored) {
      try {
        setNeeds(JSON.parse(stored));
      } catch {
        setNeeds(defaultNeeds);
      }
    } else {
      setNeeds(defaultNeeds);
    }
  }, []);

  const saveNeeds = (updatedNeeds: Need[]) => {
    setNeeds(updatedNeeds);

    localStorage.setItem(
      "chitrokotha-brand-needs",
      JSON.stringify(updatedNeeds)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const getNextNumber = () => {
    const numbers = needs
      .map((need) => parseInt(need.no, 10))
      .filter((number) => !Number.isNaN(number));

    const highest = numbers.length ? Math.max(...numbers) : 0;

    return String(highest + 1).padStart(2, "0");
  };

  const createNew = () => {
    setEditingIndex(null);

    setForm({
      ...emptyNeed,
      no: getNextNumber(),
    });

    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const editNeed = (index: number) => {
    setEditingIndex(index);
    setForm({ ...needs[index] });
    setShowForm(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingIndex(null);
    setForm(emptyNeed);
  };

  const handleChange = (
    field: keyof Need,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (!form.text.trim()) {
      alert("Please enter a description.");
      return;
    }

    const itemToSave = {
      ...form,
      no: form.no.trim() || getNextNumber(),
    };

    if (editingIndex === null) {
      saveNeeds([...needs, itemToSave]);
    } else {
      saveNeeds(
        needs.map((need, index) =>
          index === editingIndex ? itemToSave : need
        )
      );
    }

    cancelForm();
  };

  const deleteNeed = (index: number) => {
    const need = needs[index];

    const confirmed = window.confirm(
      `Delete "${need.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    saveNeeds(
      needs.filter((_, needIndex) => needIndex !== index)
    );
  };

  const resetNeeds = () => {
    const confirmed = window.confirm(
      "Reset all Brand Needs to the original defaults?"
    );

    if (!confirmed) return;

    setNeeds(defaultNeeds);

    localStorage.setItem(
      "chitrokotha-brand-needs",
      JSON.stringify(defaultNeeds)
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

          <h1 style={headingStyle}>Brand Needs</h1>

          <p style={descriptionStyle}>
            Manage the different ways Chitrokotha can help brands.
          </p>
        </div>

        <button onClick={createNew} style={primaryButtonStyle}>
          + Create New
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
                  ? "Create New Brand Need"
                  : "Edit Brand Need"}
              </h2>

              <p style={formDescriptionStyle}>
                Add or update the content below.
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
                label="Title"
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
              {editingIndex === null ? "Create" : "Update"}
            </button>
          </div>
        </div>
      )}

      <div style={listHeaderStyle}>
        <div>
          <h2 style={listTitleStyle}>Brand Needs</h2>

          <p style={listCountStyle}>
            {needs.length} item{needs.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={resetNeeds}
          style={secondaryButtonStyle}
        >
          Reset to Defaults
        </button>
      </div>

      {needs.length === 0 ? (
        <div style={emptyStateStyle}>
          <h3 style={{ margin: "0 0 8px" }}>
            No brand needs yet
          </h3>

          <p
            style={{
              margin: "0 0 20px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Create your first item.
          </p>

          <button onClick={createNew} style={primaryButtonStyle}>
            + Create New
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {needs.map((need, index) => (
            <div key={`${need.no}-${index}`} style={itemStyle}>
              <div style={numberStyle}>{need.no}</div>

              <div>
                <h3 style={itemTitleStyle}>{need.title}</h3>

                <p style={itemTextStyle}>{need.text}</p>
              </div>

              <div style={itemActionsStyle}>
                <button
                  onClick={() => editNeed(index)}
                  style={secondaryButtonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteNeed(index)}
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