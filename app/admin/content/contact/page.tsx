"use client";

import { useEffect, useState } from "react";

type ContactContent = {
  sectionNumber: string;
  label: string;
  headingLineOne: string;
  headingLineTwo: string;
  description: string;
  email: string;
};

const defaultContent: ContactContent = {
  sectionNumber: "10",
  label: "Start something",
  headingLineOne: "Let's make",
  headingLineTwo: "it visible.",
  description:
    "Tell us what you are building, launching or imagining. We'll take it from there.",
  email: "hello@chitrokotha.com",
};

const STORAGE_KEY = "chitrokotha-contact";

export default function ContactPage() {
  const [content, setContent] = useState<ContactContent>(defaultContent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        setContent({
          ...defaultContent,
          ...parsed,
        });
      } catch {
        setContent(defaultContent);
      }
    }
  }, []);

  const updateField = (field: keyof ContactContent, value: string) => {
    setContent((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    if (!content.email.trim()) {
      alert("Please enter an email address.");
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    setSaved(true);
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset Contact content to the original default values?"
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
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
          <h1 style={{ margin: 0, fontSize: "32px" }}>Contact</h1>

          <p style={{ color: "#666", marginTop: "8px" }}>
            Manage the final contact and project inquiry section.
          </p>
        </div>

        {saved && (
          <span
            style={{
              background: "#e8f7ed",
              color: "#16733b",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          >
            Changes saved
          </span>
        )}
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "28px",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "19px" }}>Section Content</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <Field
            label="Section Number"
            value={content.sectionNumber}
            onChange={(value) => updateField("sectionNumber", value)}
          />

          <Field
            label="Section Label"
            value={content.label}
            onChange={(value) => updateField("label", value)}
          />

          <Field
            label="Heading Line One"
            value={content.headingLineOne}
            onChange={(value) => updateField("headingLineOne", value)}
          />

          <Field
            label="Heading Line Two"
            value={content.headingLineTwo}
            onChange={(value) => updateField("headingLineTwo", value)}
          />

          <TextArea
            label="Description"
            value={content.description}
            onChange={(value) => updateField("description", value)}
          />

          <Field
            label="Contact Email"
            value={content.email}
            onChange={(value) => updateField("email", value)}
            type="email"
          />
        </div>
      </div>

      <div
        style={{
          background: "#f7f7f7",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Email Preview</h3>

        <a
          href={`mailto:${content.email}`}
          style={{
            color: "#111",
            fontSize: "20px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {content.email}
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button type="button" onClick={handleReset} style={secondaryButton}>
          Reset
        </button>

        <button type="button" onClick={handleSave} style={primaryButton}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span style={labelStyle}>{label}</span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span style={labelStyle}>{label}</span>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        style={{
          ...inputStyle,
          resize: "vertical",
          fontFamily: "inherit",
        }}
      />
    </label>
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