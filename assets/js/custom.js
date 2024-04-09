// Hero Section

const herodata = ['https://study.com/cimages/videopreview/what-is-economy-definition-types-quiz_113903.jpg',
  'https://www.esri.com/about/newsroom/wp-content/uploads/2022/03/is-spatial-finance-coming-to-your-company-wherenext-article-wide-1920x1080-1.jpg',
  'https://blog.gwi.com/wp-content/uploads/2023/04/0404-FEATURE-IMG_BP_Most-viewed-sports.png'
]


// trending news list
const newsdata = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolor? Tempora voluptatibus officiis itaque ad dolorem libero optio dignissimos sit.",
    tag: "Economy",
    image: 'https://www.sociallifeproject.org/content/images/2023/10/IMG_1391.jpeg'
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolor? Tempora voluptatibus officiis itaque ad dolorem libero optio dignissimos sit.",
    tag: "Science & Tech",
    image: "https://upscpathshala.com/content/wp-content/uploads/2020/10/Best-Books-for-Science-and-Technology-for-UPSC.jpg"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolor? Tempora voluptatibus officiis itaque ad dolorem libero optio dignissimos sit.",
    tag: "Sports",
    image: "https://cdn.evolve-mma.com/wp-content/uploads/2021/04/GSP-training-at-Evolve-MMA.jpg"
  }
]


// FAQ List
const faq = [
  {
    id: 'fone',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 'ftwo',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 'fthree',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus.'
  },
  {
    id: 'ffour',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 'ffive',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 'fsix',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
]

$(document).ready(function () {

  // Hero Section News Carousel
  let heronews = $('#hero-news');
  herodata.forEach(news => {
    let hero = `
    <div class="section-hero" style="background-image: url(${news})">
    <div class="bg-wrapper">
      <div class="hero-container">
          <h2 class="hero-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi, cumque
                corrupti minima perspiciatis et aut voluptatum ratione. Exercitationem, veritatis.</h2>
          <p class="hero-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam
                necessitatibus. Libero molestias consectetur facilis minima eos aliquid voluptates? Architecto velit
                doloremque illum temporibus iste ex quidem dolorum, praesentium cumque facere aspernatur incidunt
                reiciendis nam deserunt expedita, magnam quis consequuntur culpa rerum vitae debitis iure veniam non?
                Veniam similique rem iure modi est tempore ducimus?</p>
          <div class="hero-click">
                <h5>Read Article</h5>
                <div class="hero-arrow">
                  <p style="font-size:x-large;">&#x2192;</p>
                </div>
              </div>
          </div>
    </div>

    </div>
    `
    heronews.append(hero)
  })



  // function to trending news
  let trending = $('#trending');
  newsdata.forEach(news => {
    let newsCard = `
      <div class="news-card">
        <img src=${news.image} alt="" class="news-cardimg">
        <div>
            <p class="news-cardtag">${news.tag}</p>
            <h3 class="news-cardtitle">${news.title}</h3>
        </div>
      </div>
    `
    trending.append(newsCard)
  });

  // function to latest news
  let latest = $('#latest');
  newsdata.forEach(news => {
    let newsCard = `
        <div class="news-card">
              <img
                src=${news.image}
                alt="" class="news-cardimg">
              <div>
                <p class="news-cardtag">${news.tag}</p>
                <h3 class="news-cardtitle">${news.title}</h3>
              </div>
    </div>
    `
    latest.append(newsCard)
  });

  // function to you may like  news
  let yml = $('#yml');
  newsdata.forEach(news => {
    let newsCard = `
        <div class="news-card">
              <img
                src=${news.image}
                alt="" class="news-cardimg">
              <div>
                <p class="news-cardtag">${news.tag}</p>
                <h3 class="news-cardtitle">${news.title}</h3>
              </div>
    </div>
    `
    yml.append(newsCard)
  });

  // function to populate accordions
  let faqaccordian = $('#accordionExample')
  faq.forEach(item => {
    let faqitem = `
      <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${item.id}" aria-expanded="false" aria-controls="${item.id}">
                    <div class="pointer">
                    </div>
                    ${item.title}
                  </button>
                </h2>
                <div id="${item.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                  ${item.desc}
                  </div>
                </div>
              </div>
    `
    faqaccordian.append(faqitem)
  })


  // To open sidemenu bar for mobile & tablets
  $(".hbmenu").on('click', function () {
    $('body').css("overflow", "hidden")
    $(".overlay").addClass("overlay-show");
    $(".mobile-menu").addClass("mobile-menu-show")

  })

  // To close sidemenu bar for mobile & tablets from close button
  $(".close_btn").on('click', function () {
    closeSideMenu()
  })

  // To close sidemenu bar for mobile & tablets from clicking on overlay
  $(".overlay").on("click", function () {
    closeSideMenu()
  })

  // Membership card button click
  const bid = ["free", "standard", "premium"]
  bid.forEach(button => {
    $(`#${button}`).on("click", function () {
      $(`#${button}`).addClass("btn-clicked")
      setTimeout(() => {
        $(`#${button}`).removeClass("btn-clicked")
      }, 100)
    })
  })



  // Owl Carousel Hero Section
  $("#hero-news").owlCarousel({
    nav: true,
    dots: true,
    margin: 12,
    items: 1,

  });

  // Owl Carousel News Section
  $(".news-section").owlCarousel({
    margin: 12,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


})

// Function to close sidemenu - remove classes
function closeSideMenu() {
  $(".mobile-menu").removeClass("mobile-menu-show")
  $(".overlay").removeClass("overlay-show");
  $('body').css("overflow", "auto")
}
