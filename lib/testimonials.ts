// Client testimonials. Replace with real client feedback as it comes in.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number; // 1-5
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Burney Tomar handled our company registration and NTN end to end. The process was smooth, transparent, and faster than we expected. Highly professional team.",
    name: "Ahmed Raza",
    role: "Founder, Tech Startup",
    rating: 5,
  },
  {
    quote:
      "Their team manages our monthly sales tax returns and FBR POS integration flawlessly. We finally have peace of mind on compliance.",
    name: "Sana Malik",
    role: "Director, Retail Business",
    rating: 5,
  },
  {
    quote:
      "As an overseas Pakistani, getting my UK and local tax matters sorted was always stressful. They made it simple and kept me informed at every step.",
    name: "Bilal Hussain",
    role: "Overseas Client, UK",
    rating: 5,
  },
  {
    quote:
      "Excellent advisory on SECP filings and corporate compliance. Accurate, timely, and always reachable when we have questions.",
    name: "Fatima Khan",
    role: "CFO, SME",
    rating: 5,
  },
  {
    quote:
      "From WeBOC setup to customs documentation, their import/export facilitation saved us weeks of back and forth. Truly end-to-end service.",
    name: "Usman Tariq",
    role: "Owner, Trading Company",
    rating: 5,
  },
  {
    quote:
      "Reliable, knowledgeable, and genuinely client-focused. They feel like an extension of our own finance team.",
    name: "Ayesha Siddiqui",
    role: "Manager, NGO",
    rating: 5,
  },
];
