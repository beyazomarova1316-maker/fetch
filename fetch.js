const area = document.querySelector(".container");

const api = "https://rickandmortyapi.com/api/character";

function showCharacters() {
  fetch(api)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(item => {

        const card = document.createElement("article");
        card.className = "card";

        const picture = document.createElement("div");
        picture.className = "picture";

        const info = document.createElement("div");
        info.className = "info";

        const img = document.createElement("img");
        img.src = item.image;

        const top = document.createElement("div");

        const nameLink = document.createElement("a");
        nameLink.className = "name-link";
        nameLink.href = item.url;
        nameLink.target = "_blank";

        const name = document.createElement("h4");
        name.textContent = item.name;

        const stSpBox = document.createElement("div");

        const statusIcon = document.createElement("span");
        statusIcon.className = "dot";

        if (item.status === "Alive") {
          statusIcon.classList.add("dot--alive");
        } else if (item.status === "Dead") {
          statusIcon.classList.add("dot--dead");
        } else {
          statusIcon.classList.add("dot--unknown");
        }

        const status = document.createElement("span");
        status.textContent = item.status + " - ";

        const species = document.createElement("span");
        species.textContent = item.species;

        const location = document.createElement("div");

        const locationText = document.createElement("span");
        locationText.className = "text-gray";
        locationText.textContent = "Last known location:";

        const locationLink = document.createElement("a");
        locationLink.textContent = item.location.name;
        locationLink.href = item.location.url;
        locationLink.target = "_blank";

        const origin = document.createElement("div");

        const originText = document.createElement("span");
        originText.className = "text-gray";
        originText.textContent = "First seen in:";

        const originLink = document.createElement("a");
        originLink.textContent = item.origin.name;
        originLink.href = item.origin.url;
        originLink.target = "_blank";

        nameLink.appendChild(name);

        stSpBox.append(statusIcon, status, species);

        top.append(nameLink, stSpBox);

        location.append(locationText, document.createElement("br"), locationLink);

        origin.append(originText, document.createElement("br"), originLink);

        picture.appendChild(img);

        info.append(top, location, origin);

        card.append(picture, info);

        area.appendChild(card);
      });
    });
}

showCharacters();