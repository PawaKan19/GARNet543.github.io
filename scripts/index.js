import { teamMember } from '../data/TeamMembers.js'; // Ensure the correct path

const renderTeamMembers = () => {
    const container = document.getElementById('container'); // Get the div with id 'container'
    container.innerHTML = ''; // Clear existing content

    teamMember.forEach(member => {
        const card = document.createElement('div');
        card.className = "col-12 col-sm-6 col-md-3 card border border-top border-dark mx-3 mb-3";
        card.id = `member-${member.id}`;

        card.innerHTML = `
            <img class="card-img-top" src="${member.img}" alt="Profile picture of ${member.fullName}">
            <div class="card-body">
                <h5 class="card-title">${member.fullName}</h5>
                <p class="text-muted student-id">${member.id}</p>
                <p class="card-text">${member.describtion || 'No Description'}</p>
                <a href="${member.InfoLink || 'individual/template/text.html'}" class="btn btn-primary">More info...</a>
            </div>
        `;

        container.appendChild(card); // Append card to container
    });
};

document.addEventListener("DOMContentLoaded", renderTeamMembers);
