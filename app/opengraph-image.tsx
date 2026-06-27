import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Load the brand logo and inline it as a data URI (Satori needs this for
  // local images).
  const logoData = await readFile(join(process.cwd(), "public", "logo-graph.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={520} height={347} />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 980,
            color: "#0f172a",
          }}
        >
          Professional Tax Preparation Service
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#475569",
            maxWidth: 900,
          }}
        >
          Tax filing · SECP compliance · Company registration · Licensing
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            color: "#b8860b",
            fontWeight: 600,
          }}
        >
          {`${site.phone} · ${site.country}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
