import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Time, Day } from "@/types";
import { nanoid } from "nanoid";
 

 
export const useSubjectStore = defineStore("subject", {
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
    boxs: new Array(25).fill(null) as (Time[] | null[]),
    dragValue: null as (Time | null),
  }),

  
});
