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

revelar.reveal(".efeitoBoxCard", {
  duration: 2000,
  distance: "90px",
});

revelar.reveal(".efeitoBoxCard2", {
  duration: 2000,
  distance: "90px",
  delay: 500,
});

revelar.reveal(".efeitoBoxCard3", {
  duration: 2000,
  distance: "90px",
  delay: 1000,
});

revelar.reveal(".efeitoBoxContato", {
  duration: 2000,
  distance: "90px",
});

revelar.reveal(".efeitoInputNome", {
  duration: 2000,
  distance: "90px",
  delay: 500,
});

revelar.reveal(".efeitoMenssagem", {
  duration: 2000,
  distance: "90px",
  delay: 1000,
});

revelar.reveal(".efeitoBotaoZap", {
  duration: 2000,
  distance: "90px",
  delay: 1500,
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

// COLOCANDO O SPLIT TEXT NA SESSAO EXTRA

let textoAnimado = document.querySelectorAll(".textoAnimado");

textoAnimado.forEach((char) => {
  let texto = new SplitType(char, { types: "chars" });

  gsap.from(texto.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "top center",
      scrub: 1,
      markers: false,
    },
    y: -40,
    opacity: 0,
    stagger: 0.1,
  });
});

// ROLAGEM SUAVE COM LENIS

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//INSERINDO FORMULARIO PARA ENVIAR PARA WHATSAPP

function enviarMenssagem(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("menssagem").value;
  const telefone = "5521998452350";
  const texto = `Olá, meu nome é ${nome}, ${mensagem}`;

  const formatarMenssagem = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${formatarMenssagem}`;

  console.log(url);

  window.open(url, "_blank");
}
