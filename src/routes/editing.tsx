import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/editing")({
  component: EditingRedirect,
});

function EditingRedirect() {
  useEffect(() => {
    window.location.replace("/website-design");
  }, []);

  return null;
}
