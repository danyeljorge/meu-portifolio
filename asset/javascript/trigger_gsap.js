ScrollTrigger.create({
  trigger: "#link-Cima", // o elemento que sera monitorado
  start: "center center+=178", //quando a pagina rolar 300px
  markers: false,
  onEnter: () => {
    document.querySelector("#link-Cima").style.opacity = 1; // faz o botao aparecer

    document.querySelector("#link-Cima").style.transition = "opacity 0.3s ease"; // transição suave
  },
  onLeaveBack: () => {
    document.querySelector("#link-Cima").style.opacity = 0; // faz o botao desaparecer quando rolar para cima
  },
});
