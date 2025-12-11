// -------------------------------
//   LENIS SMOOTH SCROLL (v1 API)
// -------------------------------

const lenis = new Lenis({
  duration: 1.4,                          // <– MÁS SUAVE Y LARGO
  easing: (t) => 1 - Math.pow(1 - t, 3),   // <– easeOutCubic: premium, fluido
  smooth: true,
  smoothTouch: true,
  wheelMultiplier: 0.9                     // <– más control al scroll
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Actualizar ScrollTrigger cuando Lenis hace scroll
lenis.on('scroll', ScrollTrigger.update);

// Indicarle a ScrollTrigger cómo obtener el scroll
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value);   // mover scroll via Lenis
    } else {
      return lenis.scroll;     // obtener valor del scroll
    }
  },
  getBoundingClientRect() {
    return {
      top: 0, left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

// Importante: no usar lenis.update()
// Solo refrescamos ScrollTrigger
ScrollTrigger.addEventListener("refresh", () => {
  // NO lenis.update()
});
ScrollTrigger.refresh();


// =============================
// SPLIT TITLE (líneas → letras)
// =============================
function splitTitleLines(selector) {
  const lines = document.querySelectorAll(selector);
  lines.forEach(line => {
    const text = line.innerText;
    const chars = text.split("");
    line.innerHTML = chars
      .map(c => `<span class="char">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");
  });
}

splitTitleLines(".hero-title-line");

// =============================
// SPLIT DESCRIPCIÓN (palabras)
// =============================
const descEl = document.querySelector(".hero-desc");
if (descEl) {
  const words = descEl.innerText.split(" ");
  descEl.innerHTML = words
    .map(w => `<span class="dword">${w}</span>`)
    .join(" ");
}

// =============================
// TIMELINE HERO (texto)
// =============================
const heroTl = gsap.timeline({ delay: 0.1 });

// Título – letras, desde abajo con leve 3D
heroTl.from(".hero-title-line .char", {
  opacity: 0,
  y: 50,
  rotateX: -45,
  transformOrigin: "0% 50% -30px",
  stagger: 0.02,
  duration: 1.1,
  ease: "power3.out",
});

// Descripción – palabras con blur desde abajo
heroTl.from(".hero-desc .dword", {
  opacity: 0,
  y: 20,
  filter: "blur(8px)",
  stagger: 0.07,
  duration: 0.7,
  ease: "power3.out",
}, "-=0.4");


// PARALLAX SUAVE EN TEXTO DEL HERO
gsap.utils.toArray("[data-speed]").forEach(el => {
  const speed = parseFloat(el.getAttribute("data-speed"));

  gsap.to(el, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-split",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
});


// -------------------------------
//   PARALLAX HERO IMAGE
// -------------------------------

// =============================
// ENTRADA DE LA IMAGEN (ON LOAD)
// =============================
gsap.fromTo(".hero-image-bg",
  {
    opacity: 0,
    scale: 1.2,
    filter: "blur(20px) brightness(0.9)",
  },
  {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    duration: 1.6,
    ease: "power3.out",
  }
);

// =============================
// PARALLAX CON EL SCROLL
// =============================
gsap.to(".hero-image-bg", {
  y: -350,                 // si quieres más exagerado, sube este valor
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.2,
  }
});





/* --------- 3. GALERÍA SEGUNDA SECCIÓN --------- */

// Imagen izquierda
gsap.fromTo(".gallery__item--left img",
  {
    x: -120,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-gallery",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    }
  }
);

// Imagen derecha
gsap.fromTo(".gallery__item--right img",
  {
    x: 120,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-gallery",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    }
  }
);

// Flecha izquierda
gsap.fromTo(".gallery__nav--prev",
  {
    opacity: 0,
    x: -80,
    rotate: -30,
    scale: 0.4,
  },
  {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-gallery",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    }
  }
);

// Flecha derecha
gsap.fromTo(".gallery__nav--next",
  {
    opacity: 0,
    x: 80,
    rotate: 30,
    scale: 0.4,
  },
  {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section-gallery",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    }
  }
);
