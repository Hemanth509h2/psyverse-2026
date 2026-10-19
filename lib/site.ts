// Everything you may need to change before going live lives in this file.

export const site = {
  name: "PSYVERSE 2026",
  tagline: "Where Psychology Meets Technology",
  theme: {
    lead: "The Evolution of Therapy:",
    lines: ["What Has Changed,", "What Hasn’t,", "and What Comes Next?"],
  },
  date: "24 October 2026",
  day: "Saturday",
  time: "9:30 AM – 1:00 PM",
  venue: { room: "G04 Auditorium", institute: "HITAM", city: "Hyderabad" },
  fee: "₹100",
  deadline: "22 October 2026",
  // End of the last registration day, India time. Used to show "Registrations closed".
  deadlineISO: "2026-10-22T23:59:59+05:30",
  // Start and end of the conclave, India time. Used by the countdown.
  startISO: "2026-10-24T09:30:00+05:30",
  endISO: "2026-10-24T13:00:00+05:30",

  stats: [
    { value: "100", label: "Expected Participants" },
    { value: "4+", label: "Expert Speakers" },
    { value: "10+", label: "Institutions Reached" },
    { value: "1", label: "Meaningful Conversation" },
  ],

  quote: "While the tools of therapy evolve, the essence of healing remains rooted in human connection.",

  // One Google Form per attendee type, shown as a choice in the registration popup.
  registrationForms: [
    { label: "Students", url: "https://docs.google.com/forms/d/e/1FAIpQLSfYV9GELyDseCdW_9zF2Rf2uV-61CpbkQLB_SgvT2nuNfbfLA/viewform?usp=dialog" },
    { label: "Professionals", url: "https://forms.gle/r74h3L3o1Pf16CfDA" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/tecchash-pvt-ltd/",
    instagram: "https://www.instagram.com/staad.in/",
  },
};

export type Speaker = {
  name: string;
  role: "Moderator" | "Panellist";
  specialization: string;
  organization: string;
  bio?: string;
  // Put photos in public/speakers/ and use a path like "/speakers/name.jpg". Leave empty for the illustrated placeholder.
  photo?: string;
};

// Confirmed panellists first, in poster order. Replace the "to be announced" entries as more are confirmed.
export const speakers: Speaker[] = [
  {
    name: "Moderator to be announced",
    role: "Moderator",
    specialization: "",
    organization: "",
  },
  {
    name: "Dr. Rohith Reddy Palugula",
    role: "Panellist",
    specialization: "Consultant Psychiatrist",
    organization: "MBBS · MD (Psychiatry) · NIMHANS-trained in Child & Adolescent and Addiction Psychiatry",
    bio: "11+ years in medicine, treating anxiety, sleep disorders, depression and addiction with medication, CBT and CBT-I.",
    photo: "/speakers/rohith-reddy-palugula.jpg",
  },
  {
    name: "Dr. Veerender Chennoju",
    role: "Panellist",
    specialization: "Counseling Psychologist",
    organization: "Founder & CEO, You & Me Counseling Centre · M.Sc. Psychology, Ph.D. · Member, APA",
    bio: "20+ years in counseling, from relationships and teenage behaviour to corporate wellness and sports psychology. Seen on 500+ TV programmes.",
    photo: "/speakers/veerender-chennoju.jpg",
  },
  {
    name: "To be announced",
    role: "Panellist",
    specialization: "Panellist",
    organization: "Details coming soon",
  },
  {
    name: "To be announced",
    role: "Panellist",
    specialization: "Panellist",
    organization: "Details coming soon",
  },
];
