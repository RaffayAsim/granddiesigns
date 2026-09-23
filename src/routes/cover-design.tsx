import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cover-design")({
  component: CoverDesignRedirect,
});

function CoverDesignRedirect() {
  useEffect(() => {
    window.location.replace("/logo-design");
  }, []);

  return null;
}
