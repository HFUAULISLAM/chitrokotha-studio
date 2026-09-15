"use client";

import { useEffect, useState } from "react";

type Model = {
  id: string;
  name: string;
  category: string;
  location: string;
  contact: string;
  portfolio: string;
  status: "Pending" | "Approved" | "Rejected";
};

const STORAGE_KEY = "chitrokotha-models";

const defaultModels: Model[] = [];

export default function ModelsPage() {
  const [models, setModels] = useState<Model[]>(defaultModels);
  const [editing, setEditing] = useState<Model | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setModels(JSON.parse(stored));
      } catch {
        setModels(defaultModels);
      }
    }
  }, []);

  const saveModels = (nextModels: Model[]) => {
    setModels(nextModels);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextModels));
    setSaved(true);

    setTimeout(() => setSaved(false), 1800);
  };

  const deleteModel = (id: string) => {
    if (!confirm("Delete this model?")) return;

    saveModels(models.filter((model) => model.id !== id));
  };

  const createModel = () => {
    const newModel: Model = {
      id: crypto.randomUUID(),
      name: "",
      category: "Model",
      location: "",
      contact: "",
      portfolio: "",
      status: "Pending",
    };

    setEditing(newModel);
  };

  const updateField = (
    field: keyof Model,
    value: string
  ) => {
    if (!editing) return;

    setEditing({
      ...editing,
      [field]: value,
    });
  };

  const saveModel = () => {
    if (!editing?.name.trim()) {
      alert("Please enter model name.");
      return;
    }

    const exists = models.some((model) => model.id === editing.id);

    const nextModels = exists
      ? models.map((model) =>
          model.id === editing.id ? editing : model
        )
      : [...models, editing];

    saveModels(nextModels);
    setEditing(null);
  };

  return (
    <main
      style={{
        padding: "32px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "30px" }}>
            Models
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#666",
            }}
          >
            Manage models, creators and casting profiles.
          </p>
        </div>

        <button
          onClick={createModel}
          style={{
            border: "none",
            background: "#111",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          + Add Model
        </button>
      </div>

      {saved && (
        <div
          style={{
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            padding: "12px 16px",
            borderRadius: "7px",
            marginBottom: "20px",
          }}
        >
          Changes saved.
        </div>
      )}

      {models.length === 0 ? (
        <div
          style={{
            border: "1px dashed #ccc",
            borderRadius: "10px",
            padding: "60px 20px",
            textAlign: "center",
            color: "#777",
          }}
        >
          <h3 style={{ color: "#111" }}>
            No models yet
          </h3>

          <p>
            Add models or creators from the button above.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {models.map((model) => (
            <div
              key={model.id}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                <strong>{model.name}</strong>

                <div
                  style={{
                    color: "#666",
                    marginTop: "6px",
                  }}
                >
                  {model.category} ·{" "}
                  {model.location || "Location not added"}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "13px",
                  }}
                >
                  Status: {model.status}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <button
                  onClick={() => setEditing(model)}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteModel(model.id)}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    color: "#b91c1c",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div
          style={{
            marginTop: "30px",
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            {models.some((m) => m.id === editing.id)
              ? "Edit Model"
              : "Add Model"}
          </h2>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <label>
              Name
              <input
                value={editing.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                style={inputStyle}
              />
            </label>

            <label>
              Category
              <input
                value={editing.category}
                onChange={(e) =>
                  updateField("category", e.target.value)
                }
                style={inputStyle}
              />
            </label>

            <label>
              Location
              <input
                value={editing.location}
                onChange={(e) =>
                  updateField("location", e.target.value)
                }
                style={inputStyle}
              />
            </label>

            <label>
              Contact
              <input
                value={editing.contact}
                onChange={(e) =>
                  updateField("contact", e.target.value)
                }
                style={inputStyle}
              />
            </label>

            <label>
              Portfolio
              <input
                value={editing.portfolio}
                onChange={(e) =>
                  updateField("portfolio", e.target.value)
                }
                style={inputStyle}
              />
            </label>

            <label>
              Status
              <select
                value={editing.status}
                onChange={(e) =>
                  updateField(
                    "status",
                    e.target.value
                  )
                }
                style={inputStyle}
              >
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </label>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={saveModel}
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  padding: "11px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Save Model
              </button>

              <button
                onClick={() => setEditing(null)}
                style={{
                  padding: "11px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  marginTop: "7px",
  padding: "11px 12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
};