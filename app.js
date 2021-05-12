var data = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    author: "Susan Smith",
    job: "WEB DEVELOPER",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    author: "Anna Johnson",
    job: "WEB DESIGNER",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    author: "Peter Jones",
    job: "INTERN",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    author: "Bill Anderson",
    job: "THE BOSS",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const profile = document.querySelector("#profile");
const prpfileName = document.querySelector(".name");
const job = document.querySelector(".job");
const desc = document.querySelector(".desc");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");

let count = 0;

window.addEventListener("DOMContentLoaded", function () {
  profile.src = data[count].img;
  prpfileName.textContent = data[count].author;
  job.textContent = data[count].job;
  desc.textContent = data[count].info;
});

next.addEventListener("click", nextBtn);
prev.addEventListener("click", prevBtn);

// console.log(count);
function nextBtn() {
  count++;
  if (count === data.length) {
    count = 0;
  }
  // console.log(count);
  // console.log(data[count])
  // console.log(count);
  profile.src = data[count].img;
  prpfileName.textContent = data[count].author;
  job.textContent = data[count].job;
  desc.textContent = data[count].info;
}

function prevBtn() {
  count = count - 1;
  if (count === -1) {
    count = data.length - 1;
  }
  // console.log(data[count])
  // console.log(count);
  profile.src = data[count].img;
  prpfileName.textContent = data[count].author;
  job.textContent = data[count].job;
  desc.textContent = data[count].info;
}
