// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "What are lab is working on right now.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-life-in-academia",
          title: "life in academia",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-joining-uh-mānoa-as-assistant-professor",
        
          title: "Joining UH Mānoa as Assistant Professor",
        
        description: "Excited to start a new chapter at the Department of Oceanography, SOEST.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/joining-uh-manoa/";
          
        },
      },{id: "post-no-i-haven-39-t-published-yet",
        
          title: 'No, I Haven&#39;t Published Yet <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "On the pressure to publish and what it means to be a scientist in progress.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@andras.pb/no-i-havent-published-yet-3ad2b53110fc", "_blank");
          
        },
      },{id: "news-new-paper-out-from-jamie-hilditch-and-collaborators-excellent-work-on-warm-filaments-and-downward-heat-transport-in-the-salinity-stratified-gulf-of-mexico-read-the-paper",
          title: 'New paper out from Jamie Hilditch and collaborators! Excellent work on warm filaments...',
          description: "",
          section: "News",},{id: "news-starting-as-assistant-professor-at-uh-mānoa-we-are-building-the-ocean-mixing-and-acoustics-lab-at-soest-read-more-about-our-new-lab-and-open-positions",
          title: 'Starting as Assistant Professor at UH Mānoa! We are building the Ocean Mixing...',
          description: "",
          section: "News",},{id: "projects-spice-and-acoustics",
          title: 'Spice and Acoustics',
          description: "How submesoscale features affect sound propagation across the spicy ocean",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
