const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Alex Carter",
      role: "Frontend Developer",
      location: "Nairobi, Kenya",
      email: "alex.carter@example.com",
      intro:
        "I build fast, accessible, and polished web experiences. I enjoy turning ideas into practical products with modern JavaScript and thoughtful UI design.",
      skills: [
        "Vue.js",
        "TypeScript",
        "CSS Architecture",
        "REST APIs",
        "Responsive Design",
      ],
      projects: [
        {
          title: "Creator Dashboard",
          description:
            "A Vue-based analytics dashboard for creators to track engagement and revenue trends in real time.",
          tags: ["Vue 3", "Chart.js", "Pinia"],
        },
        {
          title: "Event Booking Platform",
          description:
            "Designed a conversion-focused booking flow with dynamic pricing, reducing checkout drop-off by 18%.",
          tags: ["Vue Router", "A11y", "Stripe"],
        },
        {
          title: "Portfolio CMS",
          description:
            "Built a lightweight content manager for personal websites with markdown support and live previews.",
          tags: ["Node.js", "Markdown", "Netlify"],
        },
      ],
    };
  },
}).mount("#app");
