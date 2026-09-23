import { createFileRoute } from "@tanstack/react-router";
import { BottomAuthorForm } from "./location";

export const Route = createFileRoute("/test-form")({
  component: TestFormPage,
  head: () => ({
    meta: [
      { title: "Isolated Test Form — Digital Agency" },
    ],
  }),
});

function TestFormPage() {
  return (
    <div className="min-h-screen bg-[#030812] text-white font-sans flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-[#07172b] border-2 border-[#00b4d8] p-8 rounded-3xl shadow-2xl">
        <h1 className="text-xl font-serif font-bold text-white mb-6 text-center">
          Isolated Component Test Form
        </h1>
        <BottomAuthorForm />
      </div>
    </div>
  );
}
