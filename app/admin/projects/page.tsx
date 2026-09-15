"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  status: "Planning" | "Production" | "Completed";
  description: string;
};

const STORAGE_KEY = "chitrokotha-project-management";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch {
        setProjects([]);
      }
    }
  }, []);

  const save = (items: Project[]) => {
    setProjects(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const addProject = () => {
    setEditing({
      id: crypto.randomUUID(),
      title: "",
      client: "",
      category: "",
      status: "Planning",
      description: "",
    });
  };

  const saveProject = () => {
    if (!editing?.title.trim()) {
      alert("Please enter project title.");
      return;
    }

    const exists = projects.some(
      (project) => project.id === editing.id
    );

    const next = exists
      ? projects.map((project) =>
          project.id === editing.id ? editing : project
        )
      : [...projects, editing];

    save(next);
    setEditing(null);
  };

  const removeProject = (id: string) => {
    if (!confirm("Delete this project?")) return;

    save(projects.filter((project) => project.id !== id));
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
          <h1 style={{ margin: 0 }}>Projects</h1>

          <p style={{ color: "#666" }}>
            Manage studio projects and production work.
          </p>
        </div>

        <button
          onClick={addProject}
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          + Add Project
        </button>
      </div>

      {projects.length === 0 ? (
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
            No projects yet
          </h3>

          <p>
            Create your first studio project.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {projects.map((project) => (
            <div
              key={project.id}
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
                <strong>{project.title}</strong>

                <div style={{ color: "#666", marginTop: "6px" }}>
                  {project.client || "No client"} ·{" "}
                  {project.category || "No category"}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "13px",
                  }}
                >
                  {project.status}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setEditing(project)}
                  style={{
                    padding: "8px 12px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => removeProject(project.id)}
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
            {projects.some((p) => p.id === editing.id)
              ? "Edit Project"
              : "Add Project"}
          </h2>

          <div style={{ display: "grid", gap: "15px" }}>
            <label>
              Project Title

              <input
                value={editing.title}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    title: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </label>

            <label>
              Client

              <input
                value={editing.client}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    client: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </label>

            <label>
              Category

              <input
                value={editing.category}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    category: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </label>

            <label>
              Status

              <select
                value={editing.status}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    status:
                      e.target.value as Project["status"],
                  })
                }
                style={inputStyle}
              >
                <option>Planning</option>
                <option>Production</option>
                <option>Completed</option>
              </select>
            </label>

            <label>
              Description

              <textarea
                value={editing.description}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    description: e.target.value,
                  })
                }
                rows={5}
                style={inputStyle}
              />
            </label>

            <div>
              <button
                onClick={saveProject}
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
                Save Project
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