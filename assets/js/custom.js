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

const faq = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus.'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia accusantium sint incidunt sit at!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet adipisci eius ipsa! Dolorum voluptatum voluptatibus assumenda maxime dolor et dolores totam velit illum numquam, ab, quasi illo temporibus. Quae soluta numquam deleniti unde! Beatae nostrum porro excepturi consectetur saepe?'
  },
]

$(document).ready(function () {
  let trending = $('#trending');
  newsdata.forEach(news => {
    let newsCard = `
        <div class="col-lg-4 col-md-6 news-card">
              <img
                src=${news.image}
                alt="" class="news-cardimg">
              <div>
                <p class="news-cardtag">${news.tag}</p>
                <h3 class="news-cardtitle">${news.title}</h3>
              </div>
    </div>
    `
    trending.append(newsCard)
  });

  $(".hbmenu").on('click', function () {
    $('body').css("overflow", "hidden")
    $(".overlay").addClass("overlay-show");
    $(".mobile-menu").addClass("mobile-menu-show")

  })

  $(".close_btn").on('click', function () {
    closeSideMenu()
  })

  $(".overlay").on("click", function () {
    closeSideMenu()
  })
})

function closeSideMenu() {
  $(".mobile-menu").removeClass("mobile-menu-show")
  $(".overlay").removeClass("overlay-show");
  $('body').css("overflow", "auto")
}