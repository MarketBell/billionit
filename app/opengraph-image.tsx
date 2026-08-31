import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.brand} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background:
            "radial-gradient(1000px 600px at 50% -10%, #E0A81E 0%, #05070E 62%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#E0A81E",
              color: "#0B1120",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <span>Billionit Wealth</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Learn Today. Trade Tomorrow.</span>
          <span>Grow Forever.</span>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {`${siteConfig.tagline} · Trading education & community`}
        </div>
      </div>
    ),
    { ...size }
  );
}
