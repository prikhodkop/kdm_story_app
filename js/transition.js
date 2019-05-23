function setTransition(name, transition, back_target=null, state=null, transit=true) {
  console.log("Doing the transition...");
  console.log(transition);
  sessionStorage.setItem("transition", transition);
  sessionStorage.setItem("target", name);

  if (!(back_target == null)) {
    sessionStorage.setItem("back_target", back_target);
  } else {
    sessionStorage.setItem("back_target", null);
  }

  if (!(state == null)) {
    sessionStorage.setItem(document.title, state);
  } else {
    sessionStorage.removeItem(document.title);
  }

  console.log("Done!");

  if (transit) {
    window.location = "./"+events_table[name].type+".html";
  }

  return true
};

function getBackTarget() {
  return sessionStorage.getItem("back_target")
}

function getBackBackTarget() {
  let back_target = sessionStorage.getItem("back_target")
  console.log(back_target);
  let state = JSON.parse(sessionStorage.getItem(back_target))
  return state.back_target
}
