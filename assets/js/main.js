/* ------------------------------------------------------
   0. LENIS (Smooth scroll)
------------------------------------------------------- */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.08,
  smooth: true
});

// conectar scrollTrigger con Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
  }
});




/* ------------------------------------------------------
   0. TITULO
------------------------------------------------------- */


gsap.fromTo(".hero-title img",
  {
    scale: 1.5,
    opacity: 0,
    filter: "blur(20px)",
    y: -100
  },
  {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 2.8,
    ease: "power4.out"
  }
);



/* ------------------------------------------------------
   3. SPLIT DESCRIPCIÓN
------------------------------------------------------- */
// SPLIT descripción en letras
const descEl = document.querySelector(".hero-desc");

if (descEl) {
  const text = descEl.innerText;
  const chars = text.split("");

  descEl.innerHTML = chars
    .map(c => `<span class="dchar">${c === " " ? "&nbsp;" : c}</span>`)
    .join("");
}

// Animación letras descripción
gsap.from(".hero-desc .dchar", {
  opacity: 0,
  y: 20,
  filter: "blur(6px)",
  stagger: 0.010,
  duration: 0.6,
  ease: "power3.out",
  delay: 1
});



/* ------------------------------------------------------
   5. ANIMACIÓN IMAGEN (Zoom + Blur)
------------------------------------------------------- */
gsap.fromTo(".hero-image-bg",
  {
    scale: 1.2,
    opacity: 0,
    filter: "blur(20px)"
  },
  {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.8,
    ease: "power3.out"
  }
);


/* ------------------------------------------------------
   6. PARALLAX BIDIRECCIONAL
------------------------------------------------------- */

// Imagen
gsap.to(".hero-image-bg", {
  y: "-30vh",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// Título
gsap.to(".hero-title", {
  y: "-20vh",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// Título
gsap.to(".hero-desc", {
  y: "-10vh",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});



// Entrada inicial (igual)
gsap.from("#pattern-lines rect", {
  opacity: 0,
  scaleY: 0,
  transformOrigin: "center bottom",
  duration: 2.8,
  ease: "power3.out",
  stagger: 0.1
});

// Loop suave usando yPercent para evitar saltos
gsap.to("#pattern-lines rect", {
  yPercent: "+=3",     // reemplaza pixels por porcentajes
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut",
  stagger: {
    each: 0.05,
    from: "random"
  }
});

// Segundo loop (desfasado) también convertido a yPercent
gsap.utils.toArray("#pattern-lines .line").forEach((line, i) => {
  gsap.to(line, {
    yPercent: "+=2.5",
    duration: 2.6,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: (i % 5) * 0.18
  });
});



// Parallax de desaparición del SVG completo
gsap.to(".pattern-container", {
  y: "-100vh",
  opacity: 0,         // se desvanece
  filter: "blur(15px)", // se difumina
  ease: "sine.in",
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top top",       // justo cuando empieza el scroll
    end: "top+=700 top",    // desaparece rápido al mover poco
    scrub: true             // reversible y suave
  }
});





/* --------- 3. GALERÍA SEGUNDA SECCIÓN --------- */

// Imagen izquierda
gsap.from(".gallery__item--left img", {
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-gallery",
    start: "top 80%",
    once: true
  }
});

// Imagen derecha
gsap.from(".gallery__item--right img", {
  x: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-gallery",
    start: "top 80%",
    once: true
  }
});

// Flecha izquierda
gsap.from(".gallery__nav--prev", {
  opacity: 0,
  x: -80,
  rotate: -30,
  scale: 0.4,
  duration: 1.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-gallery",
    start: "top 60%",
    once: true
  }
});


// Flecha derecha
gsap.from(".gallery__nav--next", {
  opacity: 0,
  x: 80,
  rotate: 30,
  scale: 0.4,
  duration: 1.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-gallery",
    start: "top 60%",
    once: true
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // gallery code aquí


const images = [
  'wp-content/uploads/2025/12/depto1.jpg',
  'wp-content/uploads/2025/12/depto2.jpg',
  'wp-content/uploads/2025/12/depto1.jpg'
];

let index = 0;
let isAnimating = false;

const leftImg  = document.querySelector('.gallery__item--left img');
const rightImg = document.querySelector('.gallery__item--right img');

const btnPrev = document.querySelector('.gallery__nav--prev');
const btnNext = document.querySelector('.gallery__nav--next');

// estado inicial
leftImg.src  = images[index];
rightImg.src = images[(index + 1) % images.length];

function updateImages(direction) {
  if (isAnimating) return;
  isAnimating = true;

  index =
    direction === 'next'
      ? (index + 1) % images.length
      : (index - 1 + images.length) % images.length;

  const nextIndex = (index + 1) % images.length;

  gsap.to([leftImg, rightImg], {
    opacity: 0,
    x: direction === 'next' ? -60 : 60,
    duration: 0.35,
    ease: 'power2.in',
    onComplete: () => {
      leftImg.src  = images[index];
      rightImg.src = images[nextIndex];

      gsap.fromTo(
        [leftImg, rightImg],
        {
          opacity: 0,
          x: direction === 'next' ? 60 : -60
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: 'power3.out',
          onComplete: () => {
            isAnimating = false;
          }
        }
      );
    }
  });
}

btnNext.addEventListener('click', () => updateImages('next'));
btnPrev.addEventListener('click', () => updateImages('prev'));


});


