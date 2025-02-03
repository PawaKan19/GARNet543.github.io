// main.js
import { testimonials, skills ,features} from './Testimonials.js';

document.addEventListener("DOMContentLoaded", function () {
  // Render Testimonials
  const testimonialsContainer = document.querySelector(".testimonials");
  testimonialsContainer.innerHTML = "";

  if (testimonials.length === 0) {
    const noTestimonialDiv = document.createElement("div");
    noTestimonialDiv.className = "text-center mt-3";
    noTestimonialDiv.innerHTML = "<p>No testimonials available at the moment.</p>";
    testimonialsContainer.appendChild(noTestimonialDiv);
  }

  testimonials.forEach((testimonial) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card p-3";

    const quoteP = document.createElement("p");
    quoteP.className = "mb-1";
    quoteP.textContent = `"${testimonial.quote}"`;

    const authorH6 = document.createElement("h6");
    authorH6.className = "text-end";
    authorH6.textContent = `- ${testimonial.author}`;

    cardDiv.appendChild(quoteP);
    cardDiv.appendChild(authorH6);
    colDiv.appendChild(cardDiv);
    testimonialsContainer.appendChild(colDiv);
  });

  // Render Skills
  const skillsContainer = document.querySelector(".skills");
  skillsContainer.innerHTML = "";

  if (skills.length === 0) {
    const noSkillDiv = document.createElement("div");
    noSkillDiv.className = "text-center mt-3";
    noSkillDiv.innerHTML = "<p>No skills available at the moment.</p>";
    skillsContainer.appendChild(noSkillDiv);
  }

  // Static data for icons and titles
  const iconData = [
    {
      "icon": "https://cdn-icons-png.flaticon.com/512/4277/4277132.png",
      "alt": "Pencil",
      "title": "Copywrite"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/3474/3474360.png",
      "alt": "Labtop",
      "title": "Web Design"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/128/869/869687.png",
      "alt": "Shop",
      "title": "Ecommerce"
    },
    {
      "icon": "https://cdn-icons-png.flaticon.com/512/102/102645.png",
      "alt": "Marketing",
      "title": "Marketing"
    }
  ];

  skills.forEach((skill, index) => {
    const skillCard = `
      <div class="col-md-3">
        <div class="card-skill p-3">
          <a href="${skill.link}" target="_blank" class="mx-2">
            <img src="${iconData[index].icon}" alt="${iconData[index].alt}" width="32" height="32">
          </a>
          <h5>${iconData[index].title}</h5>
          <p class="text-muted">${skill.description || 'Description not available.'}</p>
        </div>
      </div>
    `;
    skillsContainer.innerHTML += skillCard;
  });
  const featuresContainer = document.querySelector(".Clients");
  featuresContainer.innerHTML = "";

  if (features.length === 0) {
    const noFeatureDiv = document.createElement("div");
    noFeatureDiv.className = "text-center mt-3";
    noFeatureDiv.innerHTML = "<p>No features available at the moment.</p>";
    featuresContainer.appendChild(noFeatureDiv);
  } else {
    features.forEach((feature) => {
      const featureCard = `
        <div class="col-auto p-1">
          <div class="card p-3">
            <h5>${feature.title}</h5>
            <p class="text-muted">${feature.description}</p>
            <img src="${feature.image}" alt="Feature Image" />
          </div>
        </div>
      `;
      featuresContainer.innerHTML += featureCard;
    });
  }
});
