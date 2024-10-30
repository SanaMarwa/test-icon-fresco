let filterButtons = document.querySelectorAll("#filter-buttons button");

const filterableCards = document.querySelectorAll("#filterable-cards .finish");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

function updateModal(imageNumber) {
    const images = {
        1: {
            src1: "../Images/Finishes/Interior/1calce&clay/Scultura6-h.webp",
            src2: "../Images/Finishes/Interior/1calce&clay/2.webp",
            src3: "../Images/Finishes/Interior/1calce&clay/8.webp",
            info: "Lime and Clay. The union of two natural raw materials, which integrates perfectly into the concept of green building and green architecture. Highly refined and highly designed aesthetic effects, developed and recreated by our master decorators, who are inspired by the history, culture and evolution of the Italian lifestyle.",
            title: "Calce & Clay"
        },
        2: {
            src1: "../Images/Finishes/Interior/2STUCCOMARMO/STUCCO2.webp",
            src2: "../Images/Finishes/Interior/2STUCCOMARMO/STUCCO3.webp",
            src3: "../Images/Finishes/Interior/2STUCCOMARMO/stuccomarmo4.webp",
            info: "Fine marble-effect lime putty spatula stucco that allows you to obtain glossy or translucent marbled finishes, typical of ancient Renaissance villas.",
            title: "Stuccomarmo"
        },
        3: {
            src1: "../Images/Finishes/Exterior/3Perfecto Encausto/perfectoesterno2.webp",
            src2: "../Images/Finishes/Exterior/3Perfecto Encausto/perfectoesterno1.webp",
            src3: null,
            info: "This decorative plaster paste combines traditional Italian Marmorino aesthetics with modern techniques. Made from lime putty, marble powder, and sand, it creates marble-like finishes suitable for luxurious and historical design settings. Known for its breathability and anti-mold properties, this product enhances both beauty and sustainability in interiors and exteriors.",
            title: "Perfecto Encausto "
        },
        // Add more entries as needed for other images
        4: {
            src1: "../Images/Finishes/Flooring/4Micro Marmo Flooring/MicroMarmo_1.webp",
            src2: "../Images/Finishes/Flooring/4Micro Marmo Flooring/Micromarmo2.webp",
            src3: "../Images/Finishes/Flooring/4Micro Marmo Flooring/micromarmo3.webp",
            info: "Part of Spiver's microcement system, this flooring option provides a seamless, marble-inspired appearance that is robust yet elegant. The flooring is designed to be resilient with a refined aesthetic, making it suitable for contemporary spaces seeking a luxurious feel​.",
            title: "Micro Marmo Flooring"
        },
        5: {
            src1: "../Images/Finishes/Interior/5Ardore/Ardore4-c.webp",
            src2: "../Images/Finishes/Interior/5Ardore/Ardore2.webp",
            src3: "../Images/Finishes/Interior/5Ardore/Ardore1.webp",
            info: "An original effect, characterized by a false depth between pearly and opaque. Exclusive fragments of precious pearls that, gently caressed and pressed during processing, leave a pearlescent trail on the surface, which smells of warmth and three-dimensionality",
            title: "Ardore"
        },
        6: {
            src1: "../Images/Finishes/Interior/6XXGloss/XXGloss2-h.webp",
            src2: "../Images/Finishes/Interior/6XXGloss/XXGloss3.webp",
            src3: "../Images/Finishes/Interior/6XXGloss/XXGloss4.webp",
            info: "Mineral Venetian stucco, self-polishing with extra- gloss, mirror finish.",
            title: "XXgloss"
        },
        7: {
            src1: "../Images/Finishes/Interior/7Encausto/encausto2-c.webp",
            src2: "../Images/Finishes/Interior/7Encausto/encausto1.webp",
            src3: "../Images/Finishes/Interior/7Encausto/encausto.webp",
            info: "It is born from the ancient synergy of particular marble granules with lime putty to obtain an elegant and original dotted and semi-opaque marble effect.",
            title: "Encausto"
        },
        8: {
            src1: "../Images/Finishes/Interior/8nobilis/nobilis3-c.webp",
            src2: "../Images/Finishes/Interior/8nobilis/nobilis4.webp",
            src3: "../Images/Finishes/Interior/8nobilis/nobilis2.webp",
            info: "Unique, Magnificent, Enchanting...the first adjectives that could be assigned to a decorative effect of extraordinary beauty, which represents a true and absolute novelty in the sector of high-end wall decoration. A refined speciality, developed by the Spiver & Arthe Academy laboratories, which allows you to recreate, on any surface, the same tactile and visual sensation of the most famous Noble and Precious Metals such as Platinum, Gold, or Silver. Recreating a spatula effect of pure Platinum or a damask effect of pure Gold or a striped effect of pure Silver is now possible! Infinite effects and a complete chromatic range.",
            title: "Nobilies"
        },
        9: {
            src1: "../Images/Finishes/Interior/9MARMOPERLA/1-c.webp",
            src2: "../Images/Finishes/Interior/9MARMOPERLA/2.webp",
            src3: "../Images/Finishes/Interior/9MARMOPERLA/3-c.webp",
            info: "Grassello di Calce, with the classic Marmorino effect, is transformed and reborn in new guises: the new materials of the ARTHE line, between the simplicity of the opaque and the timeless elegance of pearlescence.MARMOPERLA: The Classic 'Marmorino', finally Mother of Pearl!"
            ,
            title: "Marmoperla"
        },
        10: {
            src1: "../Images/Finishes/Interior/10CaravaggioPearl/CaravaggioPearl2-c.webp",
            src2: "../Images/Finishes/Interior/10CaravaggioPearl/CaravaggioPearl1.webp",
            src3: null,
            info: "An original effect, characterized by a false depth between pearly and opaque. Exclusive fragments of precious pearls that, gently caressed and pressed during processing, leave a pearlescent trail on the surface, which smells of warmth and three-dimensionality.",
            title: "Caravaggio Pearl"
        },
        11: {
            src1: "../Images/Finishes/Interior/11MARMOPACO/Marmopaco5-cropped-c.webp",
            src2: "../Images/Finishes/Interior/11MARMOPACO/1.webp",
            src3: "../Images/Finishes/Interior/11MARMOPACO/Marmopaco4.webp",
            info: "Grassello di Calce, with the classic Marmorino effect, is transformed and reborn in new guises: the new materials of the ARTHE line, between the simplicity of the opaque and the timeless elegance of pearlescence.MARMOPACO: The innovative 'marmorino' is totally opaque and with a sensational tactile softness.",
            title: "Marmopaco"
        },
        12: {
            src1: "../Images/Finishes/Interior/12Feel/6-c.webp",
            src2: "../Images/Finishes/Interior/12Feel/4.webp",
            src3: "../Images/Finishes/Interior/12Feel/1.webp",
            info: "Precious 'matt-paint' finish, with an extraordinary tactile softness! Minimal and Shabby effect, with maximum opacity, allows for various and precious furnishing solutions of great class! FEEL...an enchanting finish to live...and above all to touch!",
            title: "Feel"
        },
        13: {
            src1: "../Images/Finishes/Interior/13Arthe Metal/ArtheMetal1-c.webp",
            src2: "../Images/Finishes/Interior/13Arthe Metal/ArtheMetal2.webp",
            src3: "../Images/Finishes/Interior/13Arthe Metal/ArtheMetal3.webp",
            info: "The metallic effect for High decoration. Studied in the smallest details, ArtheMetal shows off 4 spectacular effects: the elegant and original Gold Leaf, the attractive Frisè effect, and the simple but suggestive Rigato effect. ArtheMetal, a Style for true connoisseurs!",
            title: "Arthe Metal"
        },
        14: {
            src1: "../Images/Finishes/Interior/14Krystalia/Krystaia2-c.webp",
            src2: "../Images/Finishes/Interior/14Krystalia/KRYSTALIA4.webp",
            src3: "../Images/Finishes/Interior/14Krystalia/Krystalia3.webp",
            info: "The magic touch of crystal...finally on your walls! A noble mineral that, thanks to its geometric shape, manages to transmit plays of light with truly suggestive reflections.",
            title: "Krystalia"
        },
        15: {
            src1: "../Images/Finishes/Interior/15Rust Style Light/RustStyleLightG-c.webp",
            src2: "../Images/Finishes/Interior/15Rust Style Light/RustStyleLightG2.webp",
            src3: "../Images/Finishes/Interior/15Rust Style Light/rustLight1.webp",
            info: "The Corten effect, a contemporary style even more lived, with a surface with infinite colors and shades, between warm and light-dark tones. It is used in high-design environments, which want to emphasize, with amazing elegance their exclusivity. From now on in a wonderful selection of Light colors in full Shabby style.",
            title: "Rust style Light"
        },
        16: {
            src1: "../Images/Finishes/Interior/16OxyD_Arthe/_DSC9419-c.webp",
            src2: "../Images/Finishes/Interior/16OxyD_Arthe/_DSC9430-HDR.webp",
            src3: "../Images/Finishes/Interior/16OxyD_Arthe/OXYDD_ARTHE3-c.webp",
            info: "Original Decorative System, ecological and water-based, which gives the possibility of recreating on any surface, the real oxidation that naturally occurs on rusty and aged ferrous surfaces. 4 shades of oxidation, multiplied by an infinite number of easily recreable effects, make OxyD'Arthe a special finish for true lovers of High Decoration. OxyD'Arthe is the right product to recreate the vintage style of real rust, in the desired environment!",
            title: "OxyD'Arthe"
        },
        17: {
            src1: "../Images/Finishes/Interior/17rust style/rust3-c.webp",
            src2: "../Images/Finishes/Interior/17rust style/rust1.webp",
            src3: "../Images/Finishes/Interior/17rust style/rust2.webp",
            info: "The Corten effect, a contemporary style even more lived, with a surface with infinite colors and shades, between warm and light-dark tones. It is used in high-design environments, which want to emphasize, with amazing elegance, their exclusivity.",
            title: "Rust Style"
        },
        18: {
            src1: "../Images/Finishes/Interior/18velaturaclassica/velatura1-c.webp",
            src2: "../Images/Finishes/Interior/18velaturaclassica/velatura2.webp",
            src3: "../Images/Finishes/Interior/18velaturaclassica/velatura3.webp",
            info: "A system of simple application, where the typical nuvolato and chiaro scuro effects of the velatura prevail over the smooth base. Ideal for decorating the wall surfaces of homes and buildings that aim at r e creating a classic, antique-looking feel.",
            title: "Velatura Classica"
        },
        19: {
            src1: "../Images/Finishes/Interior/19zephyro/ZE4-c.webp",
            src2: "../Images/Finishes/Interior/19zephyro/ze2.webp",
            src3: "../Images/Finishes/Interior/19zephyro/ze3.webp",
            info: "Like a strong wind of precious sand, Zephyro is a decorative paint based on selected ceramic grains, wrapped in a precious gold or silver mixture, creating a unique sandy metal effect. Zephyro enand brings back the classic style.",
            title: "Zephyro"
        },
        20: {
            src1: "../Images/Finishes/Interior/20Decorà/Deluxe/Decoradeluxe1.webp",
            src2: "../Images/Finishes/Interior/20Decorà/Deluxe/Decoradeluxe4.webp",
            src3: "../Images/Finishes/Interior/20Decorà/Deluxe/decoradeluxe6.webp",
            info: "It allows to obtain chiaroscuro finishes suitable for antique and rustic style environments. A veiled effect predominates, which seems to be interrupted by small particles of a special paint, with a slightly raised tactile effect.",
            title: "Decorà"
        },
        21: {
            src1: "../Images/Finishes/Exterior/4Perfecto Stucco/PerfectoEsterno.webp",
            src2: "../Images/Finishes/Exterior/4Perfecto Stucco/Perfecto beton.webp",
            src3: null,
            info: "This is a high-quality, smooth-textured plaster that allows users to achieve rich, polished finishes resembling marble. The material is versatile for both classic and modern decor, offering durability and ease of application, ideal for high-end indoor and outdoor spaces.",
            title: "Perfecto Stucco"
        }
    };
    document.getElementById('carousel-inner').innerHTML = '';

    // Add first carousel item
    document.getElementById('carousel-inner').innerHTML += `
      <div class="carousel-item active">
        <img src="${images[imageNumber].src1}" class="d-block w-100" id="modal-image-1" alt="Slide 1">
      </div>`;

    // Add second carousel item
    document.getElementById('carousel-inner').innerHTML += `
      <div class="carousel-item">
        <img src="${images[imageNumber].src2}" class="d-block w-100" id="modal-image-2" alt="Slide 2">
      </div>`;

    // Conditionally add the third image if it exists
    if (images[imageNumber].src3) {
        document.getElementById('carousel-inner').innerHTML += `
        <div class="carousel-item">
          <img src="${images[imageNumber].src3}" class="d-block w-100" id="modal-image-3" alt="Slide 3">
        </div>`;
    }

    // Update the information section
    document.getElementById('info-section').innerHTML = `<h2>${images[imageNumber].title}</h2><p>${images[imageNumber].info}</p>`;
}

