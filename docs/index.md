---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Thresh Docs"
  # text: "在线Docs"
  tagline: coding is fun
  image:
    src: /logo.png
    alt: Thresh Docs
  actions:
    - theme: brand
      text: 在线简历
      link: /resume
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 🍎React
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 🍎React
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 🍎React
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style> 
:root {

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}




@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHero .container{
margin-top: 50px;
}
.VPFeatures .container{
margin-top: 50px;
}

</style>
