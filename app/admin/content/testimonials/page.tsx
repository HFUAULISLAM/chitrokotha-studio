"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Good visuals don't just show a product. They change the way people feel about it.",
    name: "Your Client",
    role: "Brand / Business",
  },
  {
    id: "2",
    quote:
      "The goal is not to make something look expensive. The goal is to make it feel intentional.",
    name: "Your Client",
    role: "Creative Project",
  },
];

const STORAGE_KEY = "chitrokotha-testimonials";

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>(defaultTestimonials);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    quote: "",
    name: "",
    role: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      } catch {
        setItems(defaultTestimonials);
      }
    }
  }, []);

  const saveItems = (nextItems: Testimonial[]) => {
    setItems(nextItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
    setSaved(true);
  };

  const startCreate = () => {
    setEditingId("new");
    setForm({
      quote: "",
      name: "",
      role: "",
    });
    setSaved(false);
  };

  const startEdit = (item: Testimonial) => {
    setEditingId(item.id);
    setForm({
      quote: item.quote,
      name: item.name,
      role: item.role,
    });
    setSaved(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({
      quote: "",
      name: "",
      role: "",
    });
  };

  const handleSave = () => {
    if (!form.quote.trim() || !form.name.trim() || !form.role.trim()) {
      alert("Please fill in all testimonial fields.");
      return;
    }

    if (editingId === "new") {
      const newItem: Testimonial = {
        id: Date.now().toString(),
        quote: form.quote.trim(),
        name: form.name.trim(),
        role: form.role.trim(),
      };

      saveItems([...items, newItem]);
    } else if (editingId) {
      const nextItems = items.map((item) =>
        item.id === editingId
          ? {
              ...item,
              quote: form.quote.trim(),
              name: form.name.trim(),
              role: form.role.trim(),
            }
          : item
      );

      saveItems(nextItems);
    }

    cancelEdit();
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmed) return;

    saveItems(items.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all testimonials to the original default values?"
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);
    setItems(defaultTestimonials);
    cancelEdit();
    setSaved(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "32px" }}>Testimonials</h1>
          <p style={{ color: "#666", marginTop: "8px" }}>
            Manage client quotes and testimonials displayed on the website.
          </p>
        </div>

        <button type="button" onClick={startCreate} style={primaryButton}>
          + Create New Testimonial
        </button>
      </div>

      {saved && (
        <div
          style={{
            display: "inline-block",
            background: "#e8f7ed",
            color: "#16733b",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "13px",
            marginBottom: "20px",
          }}
        >
          Changes saved
        </div>
      )}

      {editingId && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            {editingId === "new"
              ? "Create New Testimonial"
              : "Edit Testimonial"}
          </h2>

          <div style={{ display: "grid", gap: "18px" }}>
            <label style={{ display: "grid", gap: "8px" }}>
              <span style={labelStyle}>Quote</span>
              <textarea
                value={form.quote}
                onChange={(e) =>
                  setForm({ ...form, quote: e.target.value })
                }
                rows={5}
                placeholder="Enter testimonial quote"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </label>

            <label style={{ display: "grid", gap: "8px" }}>
              <span style={labelStyle}>Name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Client name"
                style={inputStyle}
              />
            </label>

            <label style={{ display: "grid", gap: "8px" }}>
              <span style={labelStyle}>Role / Company</span>
              <input
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Brand / Business"
                style={inputStyle}
              />
            </label>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-end",
              marginTop: "24px",
            }}
          >
            <button type="button" onClick={cancelEdit} style={secondaryButton}>
              Cancel
            </button>

            <button type="button" onClick={handleSave} style={primaryButton}>
              Save Testimonial
            </button>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gap: "16px" }}>
        {items.length === 0 ? (
          <div
            style={{
              background: "#fff",
              border: "1px dashed #ccc",
              borderRadius: "10px",
              padding: "50px",
              textAlign: "center",
              color: "#777",
            }}
          >
            No testimonials yet.
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  TESTIMONIAL {String(index + 1).padStart(2, "0")}
                </span>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => startEdit(item)}
                    style={editButton}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    style={deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <blockquote
                style={{
                  margin: "20px 0",
                  fontSize: "20px",
                  lineHeight: 1.5,
                  color: "#222",
                }}
              >
                “{item.quote}”
              </blockquote>

              <strong>{item.name}</strong>

              <div
                style={{
                  color: "#777",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >
                {item.role}
              </div>
            </div>
          ))
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "24px",
        }}
      >
        <button type="button" onClick={handleReset} style={secondaryButton}>
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #ddd",
  borderRadius: "7px",
  fontSize: "14px",
  boxSizing: "border-box" as const,
  outline: "none",
};

const primaryButton = {
  border: "none",
  background: "#111",
  color: "#fff",
  padding: "11px 16px",
  borderRadius: "7px",
  cursor: "pointer",
  fontSize: "14px",
};

const secondaryButton = {
  border: "1px solid #ddd",
  background: "#fff",
  color: "#333",
  padding: "11px 16px",
  borderRadius: "7px",
  cursor: "pointer",
  fontSize: "14px",
};

const editButton = {
  border: "1px solid #ddd",
  background: "#fff",
  color: "#333",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};

const deleteButton = {
  border: "1px solid #e0baba",
  background: "#fff",
  color: "#b42318",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};