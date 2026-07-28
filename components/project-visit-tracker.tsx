"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

type ProjectVisitTrackerProps = {
  slug: string;
  title: string;
};

export function ProjectVisitTracker({ slug, title }: ProjectVisitTrackerProps) {
  useEffect(() => {
    trackEvent("project_view", {
      project_slug: slug,
      project_title: title
    });
  }, [slug, title]);

  return null;
}
