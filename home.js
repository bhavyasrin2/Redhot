const navsmall = document.querySelector(".lines");
const cross = document.querySelector(".cross");
const shop = document.querySelector("#shopping");

if (navsmall) {
  navsmall.addEventListener("click", () => {
    document.querySelector(".navs").style.right = "0px";
  });
}

if (cross) {
  cross.addEventListener("click", () => {
    document.querySelector(".navs").style.right = "-200px";
  });
}

if (shop) {
  shop.addEventListener("click", () => {
    window.open("shop.html", "_self");
  });
}

const brands = document.querySelectorAll(".box");

brands.forEach((brand) => {
  brand.addEventListener("click", (ev) => {
    if (ev.target.alt == "mac") window.open("macshop.html", "_self");
    else if (ev.target.alt == "bb") window.open("bb.html", "_self");
    else if (ev.target.alt == "nars") window.open("nars.html", "_self");
    else if (ev.target.alt == "smashbox") window.open("smashbox.html", "_self");
    else if (ev.target.alt == "maybelline")
      window.open("maybelline.html", "_self");
    else if (ev.target.alt == "clinique") window.open("clinique.html", "_self");
    else if (ev.target.alt == "colorbar") window.open("colorbar.html", "_self");
    else if (ev.target.alt == "elf") window.open("elf.html", "_self");
    else if (ev.target.alt == "facescanada")
      window.open("facescanada.html", "_self");
    else if (ev.target.alt == "loreal") window.open("loreal.html", "_self");
    else if (ev.target.alt == "lakme") window.open("lakme.html", "_self");
  });
});

/*shop page*/
