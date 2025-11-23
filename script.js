function smoothieRezept() {
  document.getElementById("btn").addEventListener("click", () => {
    const smoothieName = document.getElementById("smo-name").value.trim();
    const smoothieSuche =
      "https://storage01.dbe.academy/fswd/api-smoothie-mixer/?smoothiename=" +
      smoothieName;

    const zutatenListe = document.getElementById("smo-liste");
    const smoothieTitel = document.getElementById("smo-titel");
    const smoothieTaste = document.getElementById("smo-tag");
    const smoothieBild = document.getElementById("smo-bild");
    const listTitel = document.getElementById("listTitel");

    if (smoothieName !== "") {
      fetch(smoothieSuche)
        .then((res) => res.json())
        .then((data) => {
          console.log("Das schmeckt!");
          const name = data.data.name;
          const image = data.data.image;
          const ingredients = data.data.ingredients;
          const taste = data.data.taste;

          smoothieTitel.textContent =
            name.charAt(0).toUpperCase() + name.slice(1);
          smoothieBild.src = image;
          smoothieBild.alt = name;

          zutatenListe.innerHTML = "";
          ingredients.forEach((zutat) => {
            const li = document.createElement("li");
            li.textContent = zutat;
            zutatenListe.appendChild(li);
          });

          smoothieTaste.textContent = taste;

          listTitel.textContent = "Zutaten";

          smoothieTitel.classList.remove("hidden");
          smoothieBild.classList.remove("hidden");
          smoothieTaste.classList.remove("hidden");
          zutatenListe.classList.remove("hidden");
        })
        .catch((err) => console.error(err));
    } else {
      console.log("Es wurde kein Smoothie-Name eingegeben.");
    }
  });
}
smoothieRezept();
