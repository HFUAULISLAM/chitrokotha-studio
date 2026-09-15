"use client";

import { useEffect, useState } from "react";

type Client = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  project: string;
  status: "Lead" | "Active" | "Completed";
};

const STORAGE_KEY = "chitrokotha-clients";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [editing, setEditing] = useState<Client | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setClients(JSON.parse(stored));
      } catch {
        setClients([]);
      }
    }
  }, []);

  const save = (items: Client[]) => {
    setClients(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const addClient = () => {
    setEditing({
      id: crypto.randomUUID(),
      name: "",
      company: "",
      email: "",
      phone: "",
      project: "",
      status: "Lead",
    });
  };

  const saveClient = () => {
    if (!editing?.name.trim()) {
      alert("Please enter client name.");
      return;
    }

    const exists = clients.some(
      (client) => client.id === editing.id
    );

    const next = exists
      ? clients.map((client) =>
          client.id === editing.id ? editing : client
        )
      : [...clients, editing];

    save(next);
    setEditing(null);
  };

  const removeClient = (id: string) => {
    if (!confirm("Delete this client?")) return;

    save(clients.filter((client) => client.id !== id));
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
          <h1 style={{ margin: 0 }}>Clients</h1>
          <p style={{ color: "#666" }}>
            Manage Chitrokotha clients and project contacts.
          </p>
        </div>

        <button
          onClick={addClient}
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          + Add Client
        </button>
      </div>

      {clients.length === 0 ? (
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
            No clients yet
          </h3>

          <p>
            Add your first client from the button above.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {clients.map((client) => (
            <div
              key={client.id}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong>{client.name}</strong>

                <div style={{ color: "#666", marginTop: "5px" }}>
                  {client.company || "Company not added"}
                </div>

                <div style={{ marginTop: "7px", fontSize: "13px" }}>
                  {client.email || "No email"} ·{" "}
                  {client.status}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setEditing(client)}
                  style={{
                    padding: "8px 12px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => removeClient(client.id)}
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
            padding: "24px",
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
          }}
        >
          <h2>
            {clients.some((c) => c.id === editing.id)
              ? "Edit Client"
              : "Add Client"}
          </h2>

          <div style={{ display: "grid", gap: "15px" }}>
            {(
              [
                ["name", "Name"],
                ["company", "Company"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["project", "Project"],
              ] as const
            ).map(([field, label]) => (
              <label key={field}>
                {label}

                <input
                  value={editing[field]}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      [field]: e.target.value,
                    })
                  }
                  style={inputStyle}
                />
              </label>
            ))}

            <label>
              Status

              <select
                value={editing.status}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    status: e.target.value as Client["status"],
                  })
                }
                style={inputStyle}
              >
                <option>Lead</option>
                <option>Active</option>
                <option>Completed</option>
              </select>
            </label>

            <div>
              <button
                onClick={saveClient}
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  padding: "11px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                Save Client
              </button>

              <button
                onClick={() => setEditing(null)}
                style={{
                  padding: "11px 18px",
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