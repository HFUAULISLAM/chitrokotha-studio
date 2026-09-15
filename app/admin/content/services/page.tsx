"use client";

import { useEffect, useState } from "react";

type Service = {
  no: string;
  title: string;
  text: string;
};

const defaultServices: Service[] = [
  {
    no: "01",
    title: "Film & Video",
    text: "Commercials, brand films, social campaigns, reels, documentaries and cinematic promotional content.",
  },
  {
    no: "02",
    title: "Photography",
    text: "Automotive, products, portraits, lifestyle, fashion and campaign photography.",
  },
  {
    no: "03",
    title: "Creative Direction",
    text: "From the first idea to the final frame — concept, visual direction, storytelling and execution.",
  },
  {
    no: "04",
    title: "Post Production",
    text: "Editing, color, sound, motion graphics and final delivery built around the story.",
  },
  {
    no: "05",
    title: "Social Content",
    text: "Short-form content designed for Instagram, Facebook, TikTok and modern brand communication.",
  },
  {
    no: "06",
    title: "Design",
    text: "Campaign banners, promotional graphics and visual assets that keep the brand language consistent.",
  },
];

const emptyService: Service = {
  no: "",
  title: "",
  text: "",
};

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState<Service>(emptyService);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-services");

    if (stored) {
      try {
        setServices(JSON.parse(stored));
      } catch {
        setServices(defaultServices);
      }
    } else {
      setServices(defaultServices);
    }
  }, []);

  const saveServices = (updatedServices: Service[]) => {
    setServices(updatedServices);

    localStorage.setItem(
      "chitrokotha-services",
      JSON.stringify(updatedServices)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const getNextNumber = () => {
    const numbers = services
      .map((service) => parseInt(service.no, 10))
      .filter((number) => !Number.isNaN(number));

    const highest = numbers.length ? Math.max(...numbers) : 0;

    return String(highest + 1).padStart(2, "0");
  };

  const createNew = () => {
    setEditingIndex(null);

    setForm({
      ...emptyService,
      no: getNextNumber(),
    });

    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const editService = (index: number) => {
    setEditingIndex(index);
    setForm({ ...services[index] });
    setShowForm(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingIndex(null);
    setForm(emptyService);
  };

  const handleChange = (
    field: keyof Service,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      alert("Please enter a service title.");
      return;
    }

    if (!form.text.trim()) {
      alert("Please enter a service description.");
      return;
    }

    const serviceToSave = {
      ...form,
      no: form.no.trim() || getNextNumber(),
    };

    if (editingIndex === null) {
      saveServices([...services, serviceToSave]);
    } else {
      const updatedServices = services.map((service, index) =>
        index === editingIndex ? serviceToSave : service
      );

      saveServices(updatedServices);
    }

    cancelForm();
  };

  const deleteService = (index: number) => {
    const service = services[index];

    const confirmed = window.confirm(
      `Delete "${service.title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmed) return;

    const updatedServices = services.filter(
      (_, serviceIndex) => serviceIndex !== index
    );

    saveServices(updatedServices);
  };

  const resetServices = () => {
    const confirmed = window.confirm(
      "Reset all Services to the original default services?"
    );

    if (!confirmed) return;

    setServices(defaultServices);

    localStorage.setItem(
      "chitrokotha-services",
      JSON.stringify(defaultServices)
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

          <h1 style={headingStyle}>Services</h1>

          <p style={descriptionStyle}>
            Manage all services displayed in the Services section.
          </p>
        </div>

        <button onClick={createNew} style={primaryButtonStyle}>
          + Create New Service
        </button>
      </div>

      {/* Status */}
      {saved && (
        <div style={successStyle}>
          ✓ Changes saved successfully.
        </div>
      )}

      {/* Create / Edit */}
      {showForm && (
        <div style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <div>
              <h2 style={formHeadingStyle}>
                {editingIndex === null
                  ? "Create New Service"
                  : "Edit Service"}
              </h2>

              <p style={formDescriptionStyle}>
                Add or update the service information below.
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
                label="Service Title"
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
                ? "Create Service"
                : "Update Service"}
            </button>
          </div>
        </div>
      )}

      {/* List Header */}
      <div style={listHeaderStyle}>
        <div>
          <h2 style={listTitleStyle}>Services</h2>

          <p style={listCountStyle}>
            {services.length} service
            {services.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={resetServices}
          style={secondaryButtonStyle}
        >
          Reset to Defaults
        </button>
      </div>

      {/* List */}
      {services.length === 0 ? (
        <div style={emptyStateStyle}>
          <h3 style={{ margin: "0 0 8px" }}>
            No services yet
          </h3>

          <p
            style={{
              margin: "0 0 20px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Create your first service to add it to the website.
          </p>

          <button onClick={createNew} style={primaryButtonStyle}>
            + Create New Service
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "12px" }}>
          {services.map((service, index) => (
            <div key={`${service.no}-${index}`} style={itemStyle}>
              <div style={numberStyle}>{service.no}</div>

              <div style={{ minWidth: 0 }}>
                <h3 style={itemTitleStyle}>{service.title}</h3>

                <p style={itemTextStyle}>{service.text}</p>
              </div>

              <div style={itemActionsStyle}>
                <button
                  onClick={() => editService(index)}
                  style={secondaryButtonStyle}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteService(index)}
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
        <strong>Note:</strong> Changes are currently saved in this
        browser using localStorage. Database/backend integration
        can be connected later.
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
      <span style={fieldLabelStyle}>{label}</span>

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
  fontWeight: 500,
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

const fieldLabelStyle = {
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