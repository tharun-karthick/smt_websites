declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": ModelViewerAttributes;
  }

  interface ModelViewerAttributes
    extends React.HTMLAttributes<HTMLElement> {
    src?: string;
    alt?: string;
    "auto-rotate"?: boolean | string;
    "camera-controls"?: boolean | string;
    "shadow-intensity"?: string;
    exposure?: string;
    poster?: string;
    ar?: boolean | string;
    style?: React.CSSProperties;
  }
}