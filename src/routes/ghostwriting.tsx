import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ghostwriting")({
  component: GhostwritingRedirect,
});

function GhostwritingRedirect() {
  useEffect(() => {
    window.location.replace("/website-design");
  }, []);

  return null;
}
