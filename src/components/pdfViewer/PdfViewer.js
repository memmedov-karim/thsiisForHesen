import React from "react";
import "./PdfViewer.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export default function PdfViewer({fileUrl}) {
  const newPlugin = defaultLayoutPlugin();
//   const fileUrl = "http://localhost:5000/uploads/1678741571146-MyLastCv.pdf";
  return (
    <div className="container">
      <div className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[newPlugin]} />
        </Worker>
      </div>
    </div>
  );
}
