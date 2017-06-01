;(function showUserInfo () {
  var body = document.querySelector("body"),
    item = document.querySelector(".item");
  
  body.addEventListener("click", function(event) {
    var show = document.querySelector(".show");
    var target = event.target,
      user = target.parentNode.parentNode.parentNode;
    if (show === null && target.tagName === "IMG" && user.className === "user hide"){
        user.className = "user show";
      }
    if (show !== null){ 
      if(target.tagName === "IMG" && user.className === "user hide"){
        show.className = "user hide";
        user.className = "user show";
      }else if(target.tagName !== "IMG" && show.className === "user show"){
        show.className = "user hide";
      }else if(target.tagName === "IMG" && user.className === "user show") {
        user.className = "user hide";
      }
    } 
  });
})();

;(function collapseMessage(){
  var body = document.querySelector("body"),
    stories = document.querySelectorAll(".stories"),
    hideMessage = document.querySelector(".hide-message");
    
  body.addEventListener("click", function (event) {
    var target = event.target;
    var comments = target.parentNode.children[0].children;
    if (target.parentNode.className === "user-message" && comments.length > 1) {
      target.textContent = `${comments.length} comments`;
      target.parentNode.className = "user-message collapse";
    }else if(target.parentNode.className === "user-message collapse") {
      target.textContent = "Hide";
      target.parentNode.className = "user-message";
    }
  });
})();




