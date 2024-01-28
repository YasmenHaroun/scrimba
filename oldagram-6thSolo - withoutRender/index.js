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
    }
]

const like3El = document.getElementById("like3-el")
const like2El = document.getElementById("like2-el")
const like1El = document.getElementById("like1-el")
const post3Likes = document.getElementById("post3-likes")
const post2Likes = document.getElementById("post2-likes")
const post1Likes = document.getElementById("post1-likes")
 
let post3LikeCount = 0
let post2LikeCount = 0
let post1LikeCount = 0

like3El.addEventListener("dblclick", function(){ 
    const myArray3 = post3Likes.innerText.split(" ")
    console.log(myArray3)
    post3LikeCount = Number(myArray3[0]) + 1
    displayLikesCount(post3Likes, post3LikeCount)
})

like2El.addEventListener("dblclick", function(){ 
    const myArray2 = post2Likes.innerText.split(" ")
    console.log(myArray2)
    post2LikeCount = Number(myArray2[0]) + 1
    displayLikesCount(post2Likes, post2LikeCount)
})

like1El.addEventListener("dblclick", function(){ 
    const myArray1 = post1Likes.innerText.split(" ")
    console.log(myArray1)
    post1LikeCount = Number(myArray1[0]) + 1
    displayLikesCount(post1Likes, post1LikeCount)
})



function displayLikesCount(postLikes, likeCount) {
    postLikes.textContent = likeCount + " likes"
}