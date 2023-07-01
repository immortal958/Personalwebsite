'use strict';



const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



function ti(){
  var d =new Date();
  var h=d.getHours();
  var m=d.getMinutes();
  var s=d.getSeconds();
  document.getElementById("clk").innerHTML=(h+":"+m+":"+s);
  setTimeout(ti,1000);
  }