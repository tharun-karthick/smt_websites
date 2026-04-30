import { useEffect, useRef, useState } from "react";
import { ProductCardProps } from "../types/productCardTypes";



export default function ProductCard({
  modelSrc,
  productName = "Flyash Bricks",
  description = "High-quality, durable flyash bricks suitable for all construction needs.",
  backgroundColor = "black",
  nameColor,
  poster,
  availableSizes = [],
}: ProductCardProps) {
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (customElements.get("model-viewer")) {
      setModelViewerLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
    script.onload = () => setModelViewerLoaded(true);
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.card}>
      {/* 3D Model Viewer */}
      <div style={{ ...styles.modelContainer, backgroundColor }}>
        {/* Background product name */}
        <div style={{ ...styles.backgroundText, color: nameColor || styles.backgroundText.color }}>
          {productName}
        </div>

        {modelViewerLoaded ? (
          <ModelViewer
            src={modelSrc}
            alt={`3D model of ${productName}`}
            poster={poster}
          />
        ) : (
          <div style={styles.loadingPlaceholder}>
            <div style={styles.spinner} />
            <span style={styles.loadingText}>Loading 3D Model…</span>
          </div>
        )}
      </div>

      {/* Product Description Container */}
      <div style={styles.descriptionContainer}>
        <h2 className="cardProductName">{productName}</h2>
        <p style={styles.descriptionText}>{description}</p>
        
        {availableSizes.length > 0 && (
          <div style={styles.sizesContainer}>
            <span style={styles.sizesLabel}>Available Sizes:</span>
            <div style={styles.sizesList}>
              {availableSizes.map((size) => (
                <span key={size} style={styles.sizeBadge}>{size}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Wrapper to safely render <model-viewer> without JSX type errors ────────

interface ModelViewerProps {
  src: string;
  alt: string;
  poster?: string;
}

function ModelViewer({ src, alt, poster }: ModelViewerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement("model-viewer");
    el.setAttribute("src", src);
    el.setAttribute("alt", alt);
    el.setAttribute("auto-rotate", "");
    el.setAttribute("camera-controls", "");
    el.setAttribute("shadow-intensity", "1");
    el.setAttribute("exposure", "1");
    if (poster) el.setAttribute("poster", poster);

    Object.assign(el.style, {
      width: "100%",
      height: "100%",
      display: "block",
    });

    const container = ref.current;
    container?.appendChild(el);

    return () => {
      if (container?.contains(el)) container.removeChild(el);
    };
  }, [src, alt, poster]);

  return <div ref={ref} style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }} />;
}

// ─── Styles ─────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  card: {
    width: 320,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    fontFamily: "'Segoe UI', sans-serif",
  },

  modelContainer: {
    width: "100%",
    height: 260,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  loadingPlaceholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },

  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #ccc",
    borderTop: "4px solid #7B2FBE",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },

  loadingText: {
    color: "#888",
    fontSize: 13,
    position: "relative",
    zIndex: 1,
  },

  backgroundText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    width: "100%",
    pointerEvents: "none",
    zIndex: 0,
    textTransform: "uppercase",
    letterSpacing: "2px",
    whiteSpace: "nowrap",
  },

  descriptionContainer: {
    padding: "20px 16px",
    backgroundColor: "#D9D9D9",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  descriptionText: {
    color: "#333",
    fontSize: "15px",
    lineHeight: "1.5",
    margin: 0,
  },

  sizesContainer: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  sizesLabel: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#555",
  },

  sizesList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  sizeBadge: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "4px 8px",
    fontSize: "12px",
    color: "#333",
    fontWeight: "500",
  },
};