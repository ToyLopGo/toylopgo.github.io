gsap.registerPlugin(ScrollTrigger);

// HERO animation
gsap.from(".hero-label", {
  y: 40,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.2
});

gsap.from(".hero-description", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-buttons", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.8
});

// Floating cards
gsap.to(".card-1", {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".card-2", {
  y: 20,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Section animations
gsap.utils.toArray(".mission-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    delay: index * 0.15
  });
});

gsap.utils.toArray(".archive-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: index * 0.2
  });
});

// Lost section animation
gsap.from(".lost-left", {
  scrollTrigger: {
    trigger: ".lost",
    start: "top 70%"
  },
  x: -100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".lost-right", {
  scrollTrigger: {
    trigger: ".lost",
    start: "top 70%"
  },
  x: 100,
  opacity: 0,
  duration: 1.2
});

// Terminal typing effect
const terminalLines = document.querySelectorAll(".terminal-body p");

terminalLines.forEach((line, index) => {
  gsap.from(line, {
    scrollTrigger: {
      trigger: ".terminal",
      start: "top 80%"
    },
    opacity: 0,
    x: -20,
    duration: 0.6,
    delay: index * 0.3
  });
});

// Join block
gsap.from(".join-box", {
  scrollTrigger: {
    trigger: ".join-box",
    start: "top 85%"
  },
  y: 100,
  opacity: 0,
  duration: 1.2
});