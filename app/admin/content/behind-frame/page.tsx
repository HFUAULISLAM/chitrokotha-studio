"use client";

import { useEffect, useState } from "react";

const defaultBehindFrame = {
  sectionNumber: "04",
  label: "Behind the frame",
  eyebrow: "The process behind the picture",
  headingLineOne: "The frame is only",
  headingLineTwo: "the beginning.",
  description:
    "A great image doesn't happen by accident. It starts with an idea, grows through preparation and becomes real through people, light, movement, timing and attention to detail.",
  buttonText: "How we work",
};

export default function BehindFrameAdminPage() {
  const [content, setContent] = useState(defaultBehindFrame);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "chitrokotha-behind-frame"
    );

    if (stored) {
      try {
        setContent(JSON.parse(stored));
      } catch {
        setContent(defaultBehindFrame);
      }
    }
  }, []);

  const handleChange = (
    field: keyof typeof content,
    value: string
  ) => {
    setContent((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const saveChanges = () => {
    localStorage.setItem(
      "chitrokotha-behind-frame",
      JSON.stringify(content)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetChanges = () => {
    const confirmed = window.confirm(
      "Reset Behind the Frame to the default content?"
    );

    if (!confirmed) return;

    setContent(defaultBehindFrame);

    localStorage.setItem(
      "chitrokotha-behind-frame",
      JSON.stringify(defaultBehindFrame)
    );

    setSaved(false);
  };

  return (
    <div style={{ maxWidth: "1100px" }}>
      <div style={headerStyle}>
        <div>
          <p style={eyebrowStyle}>Website Content</p>

          <h1 style={headingStyle}>Behind the Frame</h1>

          <p style={descriptionStyle}>
            Manage the content displayed in the Behind the Frame
            section.
          </p>
        </div>

        <span style={badgeStyle}>Single Content</span>
      </div>

      <div style={cardStyle}>
        <div style={{ display: "grid", gap: "22px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Section No."
              value={content.sectionNumber}
              onChange={(value) =>
                handleChange("sectionNumber", value)
              }
            />

            <Field
              label="Section Label"
              value={content.label}
              onChange={(value) =>
                handleChange("label", value)
              }
            />
          </div>

          <Field
            label="Small Eyebrow"
            value={content.eyebrow}
            onChange={(value) =>
              handleChange("eyebrow", value)
            }
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Heading — Line 1"
              value={content.headingLineOne}
              onChange={(value) =>
                handleChange("headingLineOne", value)
              }
            />

            <Field
              label="Heading — Line 2"
              value={content.headingLineTwo}
              onChange={(value) =>
                handleChange("headingLineTwo", value)
              }
            />
          </div>

          <Field
            label="Description"
            type="textarea"
            value={content.description}
            onChange={(value) =>
              handleChange("description", value)
            }
          />

          <Field
            label="Button Text"
            value={content.buttonText}
            onChange={(value) =>
              handleChange("buttonText", value)
            }
          />
        </div>

        <div style={actionsStyle}>
          <span style={{ color: saved ? "#167a42" : "#999", fontSize: "13px" }}>
            {saved ? "✓ Changes saved" : "Changes are stored locally."}
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={resetChanges} style={secondaryButtonStyle}>
              Reset
            </button>

            <button onClick={saveChanges} style={primaryButtonStyle}>
              Save Changes
            </button>
          </div>
        </div>
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
  gap: "30px",
  marginBottom: "35px",
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

const badgeStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  background: "#fff",
  border: "1px solid #ddd",
  color: "#777",
  fontSize: "12px",
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #e2e2e2",
  borderRadius: "10px",
  padding: "30px",
};

const actionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  marginTop: "35px",
  paddingTop: "25px",
  borderTop: "1px solid #eee",
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
  padding: "11px 18px",
  background: "#fff",
  color: "#333",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
};