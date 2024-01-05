const commentElement = document.querySelector('#comment')

console.log(commentElement);

commentElement.addEventListener("keyup", function(event) {
    event.preventDefault()
    let commentVlaue = event.target.value
    commentElement.value = commentVlaue.replace(/:\)/g , '😊')
    commentElement.value = commentVlaue.replace(/:\(/g , '😢')
    commentElement.value = commentVlaue.replace(/:D/g , '😁')
    commentElement.value = commentVlaue.replace(/:\|/g , '😐')
    commentElement.value = commentVlaue.replace(/:o/g , '😲')
})