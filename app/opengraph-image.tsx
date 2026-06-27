import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            fontWeight: 600,
            color: "#5eead4",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#0ea5e9,#14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "white",
            }}
          >
            BT
          </div>
          <span>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Professional Tax Preparation Service
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#cbd5e1",
            maxWidth: 820,
          }}
        >
          Tax filing · SECP compliance · Company registration · Licensing
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#94a3b8",
          }}
        >
          {`${site.phone} · ${site.country}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
