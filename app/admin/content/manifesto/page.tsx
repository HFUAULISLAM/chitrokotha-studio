"use client";

import { useEffect, useState } from "react";

const defaultManifesto = {
  quote:
    "We believe the best visual stories are not the loudest.",
  highlight:
    "They are the ones people remember.",
  studioName: "Chitrokotha Studio",
  focus: "Film / Photo / Design",
};

export default function ManifestoAdminPage() {
  const [manifesto, setManifesto] = useState(defaultManifesto);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-manifesto");

    if (stored) {
      try {
        setManifesto(JSON.parse(stored));
      } catch {
        setManifesto(defaultManifesto);
      }
    }
  }, []);

  const handleChange = (
    field: keyof typeof manifesto,
    value: string
  ) => {
    setManifesto((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const saveChanges = () => {
    localStorage.setItem(
      "chitrokotha-manifesto",
      JSON.stringify(manifesto)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetChanges = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the Manifesto section?"
    );

    if (!confirmed) return;

    setManifesto(defaultManifesto);

    localStorage.setItem(
      "chitrokotha-manifesto",
      JSON.stringify(defaultManifesto)
    );

    setSaved(false);
  };

  return (
    <div style={{ maxWidth: "1100px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "30px",
          marginBottom: "35px",
        }}
      >
        <div>
          <p style={eyebrowStyle}>Website Content</p>

          <h1 style={headingStyle}>Manifesto</h1>

          <p style={descriptionStyle}>
            Manage the main belief statement displayed between the
            Work and Services sections.
          </p>
        </div>

        <span style={badgeStyle}>Single Content</span>
      </div>

      {/* Editor */}
      <div style={cardStyle}>
        <div style={{ display: "grid", gap: "24px" }}>
          <Field
            label="Main Quote"
            type="textarea"
            value={manifesto.quote}
            onChange={(value) =>
              handleChange("quote", value)
            }
          />

          <Field
            label="Highlighted Sentence"
            type="textarea"
            value={manifesto.highlight}
            onChange={(value) =>
              handleChange("highlight", value)
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
              label="Studio Name"
              value={manifesto.studioName}
              onChange={(value) =>
                handleChange("studioName", value)
              }
            />

            <Field
              label="Focus"
              value={manifesto.focus}
              onChange={(value) =>
                handleChange("focus", value)
              }
            />
          </div>
        </div>

        {/* Preview */}
        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            background: "#d8d5ce",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              margin: "0 0 15px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#666",
            }}
          >
            Preview
          </p>

          <div
            style={{
              fontSize: "25px",
              lineHeight: 1.25,
              color: "#111",
              maxWidth: "750px",
            }}
          >
            {manifesto.quote}{" "}
            <span
              style={{
                display: "block",
                marginTop: "8px",
              }}
            >
              {manifesto.highlight}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "30px",
              paddingTop: "15px",
              borderTop: "1px solid rgba(0,0,0,0.15)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#666",
            }}
          >
            <span>{manifesto.studioName}</span>
            <span>{manifesto.focus}</span>
          </div>
        </div>

        {/* Actions */}
        <div style={actionsStyle}>
          <span
            style={{
              fontSize: "13px",
              color: saved ? "#167a42" : "#999",
            }}
          >
            {saved ? "✓ Changes saved" : "Changes are stored locally."}
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={resetChanges}
              style={secondaryButtonStyle}
            >
              Reset
            </button>

            <button
              onClick={saveChanges}
              style={primaryButtonStyle}
            >
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
  padding: "11px 18px",
  background: "#fff",
  color: "#333",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
};