let root = document.getElementById("root");
let box = document.createElement("div");
box.setAttribute("class","box"); 
root.appendChild(box);
box.setAttribute("draggable","true");

box.addEventListener("drag", function(event) {
  let _x = event.clientX;
  let _y = event.clientY;
  box.style.left = _x + "px";
  box.style.top = _y + "px";
  console.log ( "drag " + event.clientX  + " " +  event.clientY  );
});
box.addEventListener("dragend", function(event) {
    let _x = event.clientX;
    let _y = event.clientY;
    box.style.left = _x + "px";
    box.style.top = _y + "px";
    console.log ( "dragend " + event.clientX  + " " +  event.clientY  );
  });
