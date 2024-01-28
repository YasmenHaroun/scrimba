const posts = [  
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
]
const appendInEl = document.getElementById("appendIn")

for (let i = 0; i < posts.length; i++) {
    console.log(i)
    let newEl = document.createElement("section")
    newEl.innerHTML = `
    <div class="container">
        <header class="post-header">
        <img
        class="profile-img"
        src=${posts[i].avatar}
        alt="Post owner profile photo"
        />
        <div class="post-header-data">
        <h2 class="post-owner-name">${posts[i].name}</h2>
        <p>${posts[i].location}</p>
        </div>
        </header>
        <img class="post-img" src=${posts[i].post} alt="post photo" />
        <div class="post-footer">
            <img
            id="like${i}-el"
            class="icon-img"
            src="images/icon-heart.png"
            alt="heart icon image"
            />
            <img
            class="icon-img"
            src="images/icon-comment.png"
            alt="comment icon image"
            />
            <img class="icon-img" src="images/icon-dm.png" alt="dm icon image" />
            <h4 id="post${i}-likes">${posts[i].likes}</h4>
        </div>
        <p>
            <span class="bold-text">${posts[i].username}</span>just took a few mushrooms
            lol
        </p>
    </div>
    `

appendInEl.append(newEl)
}

const like0El = document.getElementById("like0-el")
const post0Likes = document.getElementById("post0-likes")
const like1El = document.getElementById("like1-el")
const post1Likes = document.getElementById("post1-likes")
const like2El = document.getElementById("like2-el")
const post2Likes = document.getElementById("post2-likes")

like0El.addEventListener("dblclick", function(){ 
    likesCounting(post0Likes)
})
like1El.addEventListener("dblclick", function(){ 
    likesCounting(post1Likes)
})
like2El.addEventListener("dblclick", function(){ 
    likesCounting(post2Likes)
})

function likesCounting(postLikes) {
    const myArray = postLikes.innerText.split(" ")
    let likesCount = 0
    likesCount = Number(myArray[0]) + 1
    postLikes.textContent = likesCount + " likes"
}