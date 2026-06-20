"use client";

import { create } from "zustand";
import type { SectionType, TemplateId } from "@/lib/types";

type EditorState = {
  templateId: TemplateId;
  visibleSections: SectionType[];
  setTemplate: (templateId: TemplateId) => void;
  toggleSection: (section: SectionType) => void;
};

const defaultSections: SectionType[] = [
  "banner",
  "gallery",
  "map",
  "account",
  "guestbook",
  "share"
];

export const useEditorStore = create<EditorState>((set) => ({
  templateId: "romantic",
  visibleSections: defaultSections,
  setTemplate: (templateId) => set({ templateId }),
  toggleSection: (section) =>
    set((state) => {
      const hasSection = state.visibleSections.includes(section);

      return {
        visibleSections: hasSection
          ? state.visibleSections.filter((item) => item !== section)
          : [...state.visibleSections, section]
      };
    })
}));
