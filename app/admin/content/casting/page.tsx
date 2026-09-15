"use client";

import { useState } from "react";

export default function CastingManagement() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "35px",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.8px",
            }}
          >
            Casting Management
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              color: "#777",
              fontSize: "15px",
            }}
          >
            Manage model and creator applications.
          </p>
        </div>

        {saved && (
          <div
            style={{
              padding: "10px 16px",
              background: "#e9f7ef",
              color: "#16794c",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          >
            Saved successfully
          </div>
        )}
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "28px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Casting Settings
        </h2>

        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          Configure the model and creator casting section of the website.
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "28px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Section Title
        </label>

        <input
          defaultValue="Casting"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px 14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <label
          style={{
            display: "block",
            marginTop: "22px",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Description
        </label>

        <textarea
          defaultValue="Chitrokotha is building a growing collection of models, creators and people for upcoming visual projects."
          rows={5}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px 14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            resize: "vertical",
            outline: "none",
          }}
        />

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={handleSave}
            style={{
              border: "none",
              background: "#111",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}