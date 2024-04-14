import { acceptHMRUpdate, defineStore } from "pinia";
import type { Time, Day, Style } from "@/types";
import { nanoid } from "nanoid";
import { useStorage } from "@vueuse/core";

export const useProgramStore = defineStore("program", {
  state: () => ({
    days: [
      {
        id: nanoid(),
        title: "الأحد",
      },
      {
        id: nanoid(),
        title: "الاثنين",
      },
      {
        id: nanoid(),
        title: "الثلاثاء",
      },
      {
        id: nanoid(),
        title: "الأربعاء",
      },
      {
        id: nanoid(),
        title: "الخميس",
      },
    ] as Day[],
    subjects: [
      {
        id: nanoid(),
        subject: "تنقيب معطيات",
        instructor: "د.لينا بعاج",
        place: "قاعة/6/",
      },

      {
        id: nanoid(),
        subject: "معالجة لغات طبيعية",
        instructor: "د.فاضل سكر",
        place: "قاعة/2/",
      },

      {
        id: nanoid(),
        subject: "شبكات لاسلكية",
        instructor: "د.ياسر فواز",
        place: "قاعة/1/",
      },
      {
        id: nanoid(),
        subject: " نظم زمن حقيقي",
        instructor: "د.مروة دحدوح",
        place: "قاعة/1/",
      },
      {
        id: nanoid(),
        subject: "إدارة نظم انتاجية",
        instructor: "د.أمجد البابا",
        place: "قاعة/2/",
      },
    ] as Time[],
    boxs: useStorage<Time[] | null[]>("boxs", new Array(25).fill(null)),
    dragValue: null as Time | null,
    themes: [
      {
        borderColor: "#0d6efd",
        background: "#6ea8fe",
        foreground: "#adc5e9",
        fontColor: "#011f4c",
      },
      {
        borderColor: "#6610f2",
        background: "#a370f7",
        foreground: "#c8b6e6",
        fontColor: "#1e0449",
      },
      {
        borderColor: "#d63384",
        background: "#e685b5",
        foreground: "#eec2d8",
        fontColor: "#400d26",
      },

      {
        borderColor: "#fd7d4f ",
        background: "#fba3a0",
        foreground: "#eee",
        fontColor: "#0c4128",
      },
      {
        borderColor: "#1b1b1b",
        background: "#242527",
        foreground: "#505052",
        fontColor: "#efefef",
      },
    ] as Style[],
    currentTheme: useStorage<Style>("selectTheme", {
      borderColor: "#0d6efd",
      background: "#6ea8fe",
      foreground: "#adc5e9",
      fontColor: "#011f4c",
    }),
  }),
  actions: {
    startDrag(item: Time) {
      this.dragValue = { ...item } as Time;
    },
    dragEnd(id: any) {
      this.boxs[id] = null;
    },
    onDrop(id: any) {
      if (this.dragValue) {
        this.boxs[id] = { ...this.dragValue } as Time;
      }
    },
    setTheme(style: Style) {
      this.currentTheme = style;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProgramStore, import.meta.hot));
}
