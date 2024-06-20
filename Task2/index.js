const handlebutton = () => {
  let button = document.getElementById("infoicon2");
  console.log(button)
  
  if(button.classList.contains("rotateinfoicon2")){
    let sidemenu = document.getElementById("sidemenu");
    let hiddenicon = document.getElementById("hiddenicon");
    sidemenu.classList.replace("sidemenu", "sidemenuToggle");
    hiddenicon.style.display = "block";
    button.classList.remove("rotateinfoicon2")
  }else{
    
    button.classList.add("rotateinfoicon2")
    let sidemenu = document.getElementById("sidemenu");
  let hiddenJourney = document.getElementById("hiddenJourney");
  let hiddenicon = document.getElementById("hiddenicon");
  sidemenu.classList.replace("sidemenuToggle", "sidemenu");
  hiddenicon.style.display = "none";
  }
  
};

let asset_description = document.getElementsByClassName("span1");
asset_description = Array.from(asset_description);
let title = document.getElementsByClassName("titlehead");
jsonData.tasks[0].assets.forEach((asset, idx) => {
  title[idx].innerHTML = asset.asset_title + title[idx].innerHTML;
  asset_description[idx].innerHTML = asset.asset_description;
  if (idx == 0) {
    let embed = document.getElementById("embedDiv");
    embed.innerHTML = `<iframe width="560" height="315" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
  }
});
let heading = document.getElementById("title");
heading.innerHTML = jsonData.tasks[0].task_title;
let description122 = document.getElementById("description122");
description122.innerHTML = jsonData.tasks[0].task_description;
// </script>
