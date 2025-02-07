// main.js
import { testimonials, skills ,features} from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  // Render Testimonials, will uncomment when have one
  /*
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
*/


  // Render Skills
  const skillsContainer = document.querySelector(".skills");
  skillsContainer.innerHTML = "";

  if (skills.length === 0) {
    const noSkillDiv = document.createElement("div");
    noSkillDiv.className = "text-center mt-3";
    noSkillDiv.innerHTML = "<p>No skills available at the moment.</p>";
    skillsContainer.appendChild(noSkillDiv);
  }

  skills.forEach((skill, index) => {
    const skillCard = `
      <div class="col-md-3">
        <div class="card-skill p-3" id="${skill.id}">
          <img src="${skill.icon}" alt="${skill.alt}" width="60" height="60">
          <h5>${skill.title}</h5>
          <p class="fw-bold">${skill.level}</p>
          <p class="text-muted">${skill.description || 'Description not available.'}</p>
        </div>
      </div>
    `;
    skillsContainer.innerHTML += skillCard;
  });

  //render Quality
  /*
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
  }*/
});
