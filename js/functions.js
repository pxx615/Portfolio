function getLastModified() {
  var x = document.lastModified;
  var obj = document.getElementById("lastMod");

  if (obj && obj != null) 
    obj.innerHTML += x;
}