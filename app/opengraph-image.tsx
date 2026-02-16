import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Ketan Verma — Senior Full-Stack Developer"
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = "image/png"

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a0a0a",
                    padding: "60px",
                }}
            >
                {/* Name */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                        color: "#e8e8e8",
                        letterSpacing: "0.04em",
                        fontFamily: "serif",
                        marginBottom: "8px",
                    }}
                >
                    KETAN VERMA
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: 22,
                        fontWeight: 400,
                        color: "#b0b0b0",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: "36px",
                    }}
                >
                    Senior Full-Stack Developer
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "420px",
                        height: "1px",
                        backgroundColor: "#333",
                        marginBottom: "36px",
                    }}
                />

                {/* Tech Stack */}
                <div
                    style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#888",
                        letterSpacing: "0.08em",
                    }}
                >
                    React  •  Node.js  •  Python  •  SQL  •  NoSQL
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
