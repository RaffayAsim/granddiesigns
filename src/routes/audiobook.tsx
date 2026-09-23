import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/audiobook")({
  component: AudiobookRedirect,
});

function AudiobookRedirect() {
  useEffect(() => {
    window.location.replace("/ai-automation");
  }, []);

  return null;
}
