"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const defaultProjects: Project[] = [
  {
    number: "01",
    category: "Automotive",
    title: "Motion that makes machines feel alive.",
    description:
      "Cinematic automotive films built around movement, atmosphere, detail and character.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    category: "Brand Film",
    title: "Stories people remember.",
    description:
      "Visual storytelling designed to give brands a stronger identity and a human point of view.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    category: "Portrait / Fashion",
    title: "People are the story.",
    description:
      "Editorial portraits, model films and social content with a natural cinematic language.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
  },
];

const emptyProject: Project = {
  number: "",
  category: "",
  title: "",
  description: "",
  image: "",
};

export default function WorkAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<Project>(emptyProject);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-work");

    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch {
        setProjects(defaultProjects);
      }
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem(
      "chitrokotha-work",
      JSON.stringify(updatedProjects)
    );
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const getNextNumber = () => {
    const numbers = projects
      .map((project) => parseInt(project.number, 10))
      .filter((number) => !Number.isNaN(number));

    const highest = numbers.length ? Math.max(...numbers) : 0;

    return String(highest + 1).padStart(2, "0");
  };

  const createNew = () => {
    setEditingIndex(null);
    setForm({
      ...emptyProject,
      number: getNextNumber(),
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const editProject = (index: number) => {
    setEditingIndex(index);
    setForm({ ...projects[index] });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingIndex(null);
    setForm(emptyProject);
  };

  const handleChange = (
    field: keyof Project,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      alert("Please enter a project title.");
      return;
    }

    if (!form.category.trim()) {
      alert("Please enter a project category.");
      return;
    }

    if (!form.description.trim()) {
      alert("Please enter a project description.");
      return;
    }

    if (!form.image.trim()) {
      alert("Please enter an image URL.");
      return;
    }

    if (editingIndex === null) {
      const newProject = {
        ...form,
        number: form.number.trim() || getNextNumber(),
      };

      saveProjects([...projects, newProject]);
    } else {
      const updatedProjects = projects.map((project, index) =>
        index === editingIndex ? form : project
      );

      saveProjects(updatedProjects);
    }

    cancelForm();
  };

  const deleteProject = (index: number) => {
    const project = projects[index];

    const confirmed = window.confirm(
      `Delete "${project.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    const updatedProjects = projects.filter(
      (_, projectIndex) => projectIndex !== index
    );

    saveProjects(updatedProjects);
  };

  const resetProjects = () => {
    const confirmed = window.confirm(
      "Reset all Work projects to the original default projects?"
    );

    if (!confirmed) return;

    setProjects(defaultProjects);
    localStorage.setItem(
      "chitrokotha-work",
      JSON.stringify(defaultProjects)
    );

    cancelForm();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: "1150px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "25px",
          marginBottom: "30px",
        }}
      >
        <div>
          <p style={eyebrowStyle}>Website Content</p>

          <h1 style={headingStyle}>Selected Work</h1>

          <p style={descriptionStyle}>
            Manage the projects displayed in the Selected Work section.
          </p>
        </div>

        <button onClick={createNew} style={primaryButtonStyle}>
          + Create New Project
        </button>
      </div>

      {/* Status */}
      {saved && (
        <div
          style={{
            marginBottom: "20px",
            padding: "12px 15px",
            borderRadius: "6px",
            background: "#edf8f1",
            color: "#167a42",
            border: "1px solid #cfe9d8",
            fontSize: "13px",
          }}
        >
          ✓ Changes saved successfully.
        </div>
      )}

      {/* Create / Edit Form */}
      {showForm && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #dcdcdc",
            borderRadius: "10px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "21px",
                  fontWeight: 600,
                }}
              >
                {editingIndex === null
                  ? "Create New Project"
                  : "Edit Project"}
              </h2>

              <p
                style={{
                  margin: "6px 0 0",
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Add or update the project information below.
              </p>
            </div>

            <button
              onClick={cancelForm}
              style={closeButtonStyle}
            >
              Cancel
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "20px",
              }}
            >
              <Field
                label="Number"
                value={form.number}
                onChange={(value) =>
                  handleChange("number", value)
                }
              />

              <Field
                label="Category"
                value={form.category}
                onChange={(value) =>
                  handleChange("category", value)
                }
              />
            </div>

            <Field
              label="Title"
              value={form.title}
              onChange={(value) =>
                handleChange("title", value)
              }
            />

            <Field
              label="Description"
              type="textarea"
              value={form.description}
              onChange={(value) =>
                handleChange("description", value)
              }
            />

            <Field
              label="Image URL"
              value={form.image}
              onChange={(value) =>
                handleChange("image", value)
              }
            />

            {form.image && (
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Image Preview
                </p>

                <div
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "250px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#eee",
                  }}
                >
                  <img
                    src={form.image}
                    alt="Project preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "30px",
              paddingTop: "25px",
              borderTop: "1px solid #eee",
            }}
          >
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
                ? "Create Project"
                : "Update Project"}
            </button>
          </div>
        </div>
      )}

      {/* Project List */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "19px",
              fontWeight: 600,
            }}
          >
            Projects
          </h2>

          <p
            style={{
              margin: "5px 0 0",
              color: "#888",
              fontSize: "13px",
            }}
          >
            {projects.length} project
            {projects.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={resetProjects}
          style={secondaryButtonStyle}
        >
          Reset to Defaults
        </button>
      </div>

      {projects.length === 0 ? (
        <div
          style={{
            background: "#fff",
            border: "1px dashed #ccc",
            borderRadius: "10px",
            padding: "60px 30px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "18px",
            }}
          >
            No projects yet
          </h3>

          <p
            style={{
              margin: "0 0 20px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Create your first project to add it to the website.
          </p>

          <button onClick={createNew} style={primaryButtonStyle}>
            + Create New Project
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "15px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={`${project.number}-${index}`}
              style={{
                background: "#fff",
                border: "1px solid #e2e2e2",
                borderRadius: "10px",
                padding: "20px",
                display: "grid",
                gridTemplateColumns: "110px 1fr auto",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: "110px",
                  height: "80px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#eee",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "7px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    {project.number}
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#777",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 7px",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <button
                  onClick={() => editProject(index)}
                  style={secondaryButtonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(index)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Note */}
      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          borderRadius: "7px",
          background: "#f0f0f0",
          color: "#666",
          fontSize: "12px",
          lineHeight: 1.6,
        }}
      >
        <strong>Note:</strong> Changes are currently saved in this
        browser using localStorage. The website database/backend will
        be connected later.
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
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        {label}
      </span>

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={5}
          style={inputStyle}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          style={inputStyle}
        />
      )}
    </label>
  );
}

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

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  border: "1px solid #d8d8d8",
  borderRadius: "6px",
  padding: "12px 13px",
  fontSize: "14px",
  color: "#111",
  background: "#fff",
  outline: "none",
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