gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
window.revelar = ScrollReveal({ reset: false });

// TOPO DO SITE

revelar.reveal(".efeitoHeroTopo", {
  duration: 2000,
  distance: "0px",
});

revelar.reveal(".efeitoExpertTopo", {
  duration: 2000,
  distance: "90px",
  delay: 500,
});

revelar.reveal(".efeitoSkil1", {
  duration: 2000,
  distance: "90px",
});

revelar.reveal(".efeitoSkil2", {
  duration: 2000,
  distance: "90px",
  delay: 400,
});

revelar.reveal(".efeitoSkil3", {
  duration: 2000,
  distance: "90px",
  delay: 800,
});

revelar.reveal(".efeitoSkil4", {
  duration: 2000,
  distance: "90px",
  delay: 1200,
});

revelar.reveal(".efeitoSkil5", {
  duration: 2000,
  distance: "90px",
  delay: 1600,
});

revelar.reveal(".efeitoSkil6", {
  duration: 2000,
  distance: "90px",
  delay: 2000,
});

revelar.reveal(".efeitoSobreImg", {
  duration: 2000,
  distance: "90px",
  origin: "left",
});

revelar.reveal(".efeitoSobreText", {
  duration: 2000,
  distance: "90px",
  delay: 500,
  origin: "right",
});

// inseriodo o condigo do GSAP ScrollTo

document.querySelectorAll("a[id^=link-]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let rolarPara = link.id.replace("link-", "sessao-");
    gsap.to(window, {
      duration: 2,
      scrollTo: `#${rolarPara}`,
      ease: "power2.out",
    });
  });
});

ScrollTrigger.create({
  trigger: "#link-Cima", // o elemento que sera monitorado
  start: "bottom top", //quando a pagina rolar 300px
  markers: false,
  onEnter: () => {
    document.querySelector("#link-Cima").style.opacity = 1; // faz o botao aparecer

    document.querySelector("#link-Cima").style.transition = "opacity 0.3s ease"; // transição suave
  },
  onLeaveBack: () => {
    document.querySelector("#link-Cima").style.opacity = 0; // faz o botao desaparecer quando rolar para cima
  },
});
