import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin, type ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface PDFViewerProps {
  url: string;
}

const toolbarButtonClassName =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900';

export default function PDFViewer({ url }: PDFViewerProps) {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div className="flex h-[750px] w-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <Toolbar>
            {(toolbarSlot: ToolbarSlot) => {
              const {
                CurrentPageInput,
                GoToNextPage,
                GoToPreviousPage,
                NumberOfPages,
                Zoom,
                ZoomIn,
                ZoomOut,
              } = toolbarSlot;

              return (
                <>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                    <span className={toolbarButtonClassName}>
                      <GoToPreviousPage />
                    </span>
                    <div className="min-w-[72px] px-2 text-center text-sm font-medium text-slate-600">
                      <CurrentPageInput />
                    </div>
                    <span className="text-sm text-slate-400">/</span>
                    <div className="min-w-[24px] text-center text-sm font-medium text-slate-600">
                      <NumberOfPages />
                    </div>
                    <span className={toolbarButtonClassName}>
                      <GoToNextPage />
                    </span>
                  </div>

                  <div className="ml-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                    <span className={toolbarButtonClassName}>
                      <ZoomOut />
                    </span>
                    <div className="min-w-[72px] text-center text-sm font-medium text-slate-600">
                      <Zoom />
                    </div>
                    <span className={toolbarButtonClassName}>
                      <ZoomIn />
                    </span>
                  </div>
                </>
              );
            }}
          </Toolbar>
        </div>

        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          Lecture PDF
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-slate-50">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={url}
            plugins={[toolbarPluginInstance]}
            defaultScale={1.1}
          />
        </Worker>
      </div>
    </div>
  );
}