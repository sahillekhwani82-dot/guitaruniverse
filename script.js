function scrollToVideos(){
document.getElementById("videos").scrollIntoView({
behavior:"smooth"
})
}

/* VIDEO DATABASE */

const videos = [

{
title:"Leja - Guitar Cover",
category:"punjabi",
thumbnail:"IMG_1219.jpg",
driveId:"1JL32vO9kqHoldoncTgjKWX_Dl2jpmKVU"
},

{
title:"Closer - Guitar Cover",
category:"english",
thumbnail:"IMG_1213.jpg",
driveId:"11zaEQ_GxBYqrv3tOl1uSOJr3QZ96RxjP"
},

{
title:"Maine Tere Liye - Guitar Cover",
category:"90s",
thumbnail:"IMG_1220.jpg",
driveId:"1pSCc4QprdJp1kLrNZOES4TLkBOxJeGY1"
},

{
title:"I Think They Call This Love- Guitar Cover",
category:"english",
thumbnail:"IMG_1224.jpg",
driveId:"1YTpywdXwelfzCwwBXkdhAQEHhT6SdE53"
},

{
title:"Arz Kiya Hai- Guitar Cover",
category:"hindi",
thumbnail:"IMG_1223.jpg",
driveId:"1qElgK1CHAqF8JpZbWIa-CAJC_EWqnz7o"
},

{
title:"Dooron Dooron- Guitar Cover",
category:"hindi",
thumbnail:"IMG_1221.jpg",
driveId:"18EJI7uLg-ZCn83JHXZQqR5O5SfcnDCUv"
},

{
title:"No One Noticed- Guitar Cover",
category:"english",
thumbnail:"IMG_1218.jpg",
driveId:"1zjKBTAMZBoawrwGH3VlNmNzwJe5HfiM2"
},

{
title:"Boyfriend- Guitar Cover",
category:"punjabi",
thumbnail:"IMG_1222.jpg",
driveId:"1bGddIBPTiTZ8DD0ZIwGAX9ODR-jWJury"
},

{
title:"Zakir- Guitar Cover",
category:"hindi",
thumbnail:"IMG_1225.jpg",
driveId:"1Hv-t6V36BXw5XbAna9gcWe5R7vXFhDeu"
},

{
title:"Sex, Drugs, Etc.- Guitar Cover",
category:"english",
thumbnail:"IMG_1217.jpg",
driveId:"1dBJb9P2ifFuNjn0Ba7eMzSeR5eZIpkkD"
},

{
title:"Riptide- Guitar Cover",
category:"english",
thumbnail:"IMG_1216.jpg",
driveId:"13Wu-BdUKX7YOwyUVvQK3zW42jloyXDzl"
},

{
title:"Made In Japan- Guitar Cover",
category:"english",
thumbnail:"IMG_1215.jpg",
driveId:"1aKprJdFw26Rcz3Rel11m8y0eQK0hg6ED"
},

{
title:"Line Without a Hook- Guitar Cover",
category:"english",
thumbnail:"IMG_1227.jpg",
driveId:"1ZWmCSNbGEBLLrsO_W5ntRV7QXCgXjd0R"
},


]

/* GENERATE VIDEO CARDS */

function generateVideos(list){

const grid = document.getElementById("videoGrid")

grid.innerHTML=""

list.forEach(video=>{

grid.innerHTML += `
<div class="video-card ${video.category}">

<img src="${video.thumbnail}"
class="thumbnail"
onclick="playVideo(this,'${video.driveId}')">

<p>${video.title}</p>

</div>
`

})

}

/* SHOW FIRST 4 ON HOMEPAGE */

function showInitialVideos(){

generateVideos(videos.slice(0,4))

}

window.onload = showInitialVideos

/* FILTER VIDEOS */

function filterVideos(category){

if(category === "all"){
generateVideos(videos)
}
else{
const filtered = videos.filter(v => v.category === category)
generateVideos(filtered)
}

}

/* PLAY VIDEO */

function playVideo(element, fileId){

element.outerHTML = `
<iframe
src="https://drive.google.com/file/d/${fileId}/preview"
width="100%"
height="220"
allow="autoplay">
</iframe>
`

}

/* SCROLL ANIMATION */

const elements = document.querySelectorAll(".animate")

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top
const screen = window.innerHeight

if(position < screen - 100){
el.classList.add("show")
}

})

})

function addSuggestion(){

const input = document.getElementById("suggestionInput")
const list = document.getElementById("suggestionList")

if(input.value.trim() === "") return

const li = document.createElement("li")
li.textContent = input.value

list.appendChild(li)

input.value = ""

}