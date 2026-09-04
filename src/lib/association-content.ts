import type { ArticleSection } from "@/components/sections/article-page-content"
import type { NumberedListItem } from "@/components/sections/numbered-list-section"
import type { MembershipCategory } from "@/components/sections/membership-categories-section"

// ---------------------------------------------------------------------------
// Aims & Objectives — full list (dedicated page) and a condensed teaser
// (homepage). Sourced verbatim from the association's approved copy.
// ---------------------------------------------------------------------------

export const aimsAndObjectives: ArticleSection[] = [
  {
    title: "1. Promote Multidisciplinary Medicine",
    paragraphs: [
      "To bring together physicians and specialists from different disciplines to understand the interconnected nature of cardio–neuro–renal–pulmonary–metabolic and sleep disorders.",
    ],
  },
  {
    title: "2. Advance Evidence-Based Clinical Practice",
    paragraphs: [
      "To disseminate contemporary scientific evidence, international guidelines, clinical trials and real-world clinical experience, and encourage their appropriate application in everyday medical practice.",
    ],
  },
  {
    title: "3. Promote Continuous Medical Education",
    paragraphs: [
      "To conduct conferences, CMEs, workshops, webinars, masterclasses, case discussions, clinical quizzes and hands-on academic programmes for medical professionals.",
    ],
  },
  {
    title: "4. Encourage Clinical Research",
    paragraphs: ["To promote and facilitate:"],
    bullets: [
      "Clinical research",
      "Collaborative multicentre studies",
      "Disease registries",
      "Real-world evidence",
      "Case series and clinical audits",
      "Systematic reviews and meta-analyses",
      "Young-investigator research",
      "Translational research",
    ],
  },
  {
    title: "5. Bridge the Gap Between Medical Specialties",
    paragraphs: [
      "Modern diseases frequently cross traditional specialty boundaries. KCA aims to create a platform where interconnected conditions can be approached as a unified clinical problem.",
      "For example: Obesity → Diabetes → CKD → Cardiovascular Disease → Obstructive Sleep Apnoea → MASLD.",
      "KCA encourages clinicians to look beyond individual diseases and focus on the whole patient.",
    ],
  },
  {
    title: "6. Develop Young Physicians and Future Leaders",
    paragraphs: [
      "To provide postgraduate students, residents and early-career physicians with opportunities for:",
    ],
    bullets: [
      "Research",
      "Scientific presentations",
      "Clinical case discussions",
      "Medical quizzes",
      "Mentorship",
      "Academic networking",
      "Leadership development",
      "Collaborative research",
    ],
  },
  {
    title: "7. Encourage Scientific Debate",
    paragraphs: ["To provide a platform for discussion of:"],
    bullets: [
      "Emerging evidence",
      "Controversial clinical topics",
      "Guideline updates",
      "Landmark clinical trials",
      "Difficult clinical decisions",
      "Evidence versus experience",
    ],
  },
  {
    title: "8. Promote Precision Medicine",
    paragraphs: [
      "To encourage patient-centred and risk-based approaches incorporating appropriate use of:",
    ],
    bullets: [
      "Phenotyping",
      "Biomarkers",
      "Genetics",
      "Digital health",
      "Artificial intelligence",
      "Wearable technology",
      "Sleep data",
      "Metabolic assessment",
      "Cardiovascular risk assessment",
    ],
  },
  {
    title: "9. Improve Patient Outcomes",
    paragraphs: [
      "The ultimate objective of KCA is: Better Knowledge → Better Decisions → Better Outcomes.",
      "All academic activities of the association should ultimately contribute to improving the quality, safety and effectiveness of patient care.",
    ],
  },
  {
    title: "10. Create Academic Resources",
    paragraphs: ["KCA aims to develop and promote:"],
    bullets: [
      "Clinical algorithms",
      "Practical clinical guides",
      "Consensus documents",
      "Educational modules",
      "Review articles",
      "Case-based learning resources",
      "Clinical pathways",
      "Scientific publications",
    ],
  },
  {
    title: "11. Promote National and International Collaboration",
    paragraphs: [
      "To establish academic collaborations with recognised medical societies, universities, hospitals, research institutions and national and international experts.",
    ],
  },
  {
    title: "12. Promote Public Health",
    paragraphs: [
      "Where appropriate, KCA will support awareness and education related to:",
    ],
    bullets: [
      "Diabetes prevention",
      "Obesity",
      "Hypertension",
      "Cardiovascular disease",
      "Stroke prevention",
      "Kidney health",
      "Sleep disorders",
      "Smoking cessation",
      "Healthy ageing",
      "Metabolic health",
    ],
  },
]

export const aimsAndObjectivesTeaser: NumberedListItem[] = [
  {
    number: "01",
    title: "Promote Multidisciplinary Medicine",
    description:
      "Understanding the interconnected nature of cardio-neuro-renal-pulmonary-metabolic and sleep disorders.",
  },
  {
    number: "02",
    title: "Advance Evidence-Based Practice",
    description:
      "Contemporary evidence, international guidelines and real-world clinical experience.",
  },
  {
    number: "03",
    title: "Promote Continuous Education",
    description:
      "Conferences, CMEs, workshops, webinars, masterclasses and hands-on programmes.",
  },
  {
    number: "04",
    title: "Encourage Clinical Research",
    description:
      "Multicentre studies, disease registries, real-world evidence and translational research.",
  },
  {
    number: "05",
    title: "Bridge the Gap Between Specialties",
    description:
      "Approaching interconnected conditions as one unified clinical problem.",
  },
  {
    number: "06",
    title: "Develop Young Physicians & Leaders",
    description:
      "Research, mentorship, academic networking and leadership development.",
  },
]

// ---------------------------------------------------------------------------
// Membership — who can join (dedicated page) and suggested categories (used
// on both the homepage teaser and the dedicated membership page).
// ---------------------------------------------------------------------------

export const whoCanJoin: ArticleSection[] = [
  {
    title: "Medical Practitioners",
    paragraphs: ["Registered medical practitioners, including:"],
    bullets: [
      "General Physicians",
      "Internal Medicine Specialists",
      "Diabetologists",
      "Endocrinologists",
      "Cardiologists",
      "Neurologists",
      "Nephrologists",
      "Pulmonologists",
      "Sleep Physicians",
      "Gastroenterologists",
      "Hepatologists",
      "Obesity Medicine Specialists",
      "Geriatricians",
      "Rheumatologists",
      "Psychiatrists",
      "Obstetricians and Gynaecologists",
      "Family Physicians",
      "Other relevant medical specialists",
    ],
  },
  {
    title: "Postgraduate Students",
    paragraphs: ["Membership opportunities may be provided to:"],
    bullets: [
      "MD students",
      "DNB students",
      "DM/MCh trainees",
      "Fellowship trainees",
      "Residents in relevant specialties",
    ],
  },
  {
    title: "Young Physicians",
    paragraphs: [
      "A dedicated Young KCA platform can provide early-career physicians with opportunities for:",
    ],
    bullets: [
      "Research",
      "Scientific presentations",
      "Academic networking",
      "Mentorship",
      "Leadership development",
      "Collaborative projects",
    ],
  },
  {
    title: "Medical Educators and Researchers",
    paragraphs: [
      "Faculty members, medical teachers, clinical researchers and academics working in relevant medical and healthcare disciplines may participate in KCA's academic activities.",
    ],
  },
  {
    title: "Allied Healthcare Professionals",
    paragraphs: [
      "Associate membership may be offered to appropriately qualified professionals involved in multidisciplinary patient care, including:",
    ],
    bullets: [
      "Clinical psychologists",
      "Nutritionists and dietitians",
      "Physiotherapists",
      "Respiratory therapists",
      "Sleep technologists",
      "Nurses",
      "Clinical pharmacists",
      "Other relevant healthcare professionals",
    ],
  },
  {
    title: "Medical Students",
    paragraphs: [
      "A dedicated student category may provide undergraduate medical students with opportunities to participate in:",
    ],
    bullets: [
      "Medical quizzes",
      "Research",
      "Academic programmes",
      "Conferences",
      "Case discussions",
      "Student scientific activities",
    ],
  },
]

export const membershipCategories: MembershipCategory[] = [
  { icon: "life", title: "Life Member", description: "For eligible registered medical practitioners." },
  {
    icon: "annual",
    title: "Annual Member",
    description: "For eligible medical practitioners wishing to participate on an annual basis.",
  },
  { icon: "young", title: "Young KCA Member", description: "For early-career physicians." },
  {
    icon: "postgraduate",
    title: "Postgraduate Member",
    description: "For MD/DNB/DM/MCh and fellowship trainees.",
  },
  { icon: "student", title: "Student Member", description: "For undergraduate medical students." },
  {
    icon: "associate",
    title: "Associate Member",
    description: "For eligible allied healthcare professionals.",
  },
  {
    icon: "international",
    title: "International Member",
    description: "For qualified healthcare professionals practising outside India.",
  },
  {
    icon: "honorary",
    title: "Honorary Member",
    description:
      "For eminent individuals selected in accordance with the association's constitution and bylaws.",
  },
]
