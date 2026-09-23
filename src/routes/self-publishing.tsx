import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/self-publishing")({
  component: SelfPublishingRedirect,
});

function SelfPublishingRedirect() {
  useEffect(() => {
    window.location.replace("/services");
  }, []);

  return null;
}
