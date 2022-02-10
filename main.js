let eingabe = document.getElementById("bundeslandInfo");
let ausgabe = document.getElementById("bundeslandInfoErgebnis");

function check() {
  let trueTxt = eingabe.value.toLowerCase();
  console.log(trueTxt);

  switch (trueTxt) {
    case "bw":
      ausgabe.innerHTML = `<h1>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</h1>`;
      break;
    case "by":
      ausgabe.innerHTML = `<h1> Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</h1>`;
      break;
    case "b":
      ausgabe.innerHTML = `<h1> Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt</h1>`;
      break;

    default:
      ausgabe.innerHTML = `<h1> Das ist keine passende Vorgabe</h1>`;
      break;
  }
}
