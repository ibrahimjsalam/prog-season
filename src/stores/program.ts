import { acceptHMRUpdate, defineStore } from "pinia";
import type { Time, Day, Style } from "@/types";
import { nanoid } from "nanoid";
import { useStorage } from "@vueuse/core";

export const useProgramStore = defineStore("program", {
  state: () => ({
    showPicker: false as boolean,
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
    clearCache() {
      this.boxs = new Array(25).fill(null);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProgramStore, import.meta.hot));
}
