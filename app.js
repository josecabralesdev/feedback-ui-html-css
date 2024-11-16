const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const feedbackContainer = $(".feedback-container")
const congratContainer = $(".congrat-container")
const feedbackText = $("h3")
const sendReview = $("button")
let feedbackOptions = $$(".feedback")
feedbackOptions = [...feedbackOptions]
let feedbackSelected = ''


feedbackOptions.forEach(option => {
  option.addEventListener('click', e => {
    feedbackSelected = e.target.innerText

    feedbackOptions.forEach(option => {
      if (option !== e.target) {
        option.classList.add("feedback")
        option.classList.remove("selected")
      }
    })

    e.target.classList.remove("feedback")
    e.target.classList.add("selected")
  })
})

sendReview.addEventListener('click', () => {
  if (!feedbackSelected) {
    alert("You must select an option!!!")
    return
  }

  feedbackText.innerText += feedbackSelected

  feedbackContainer.style.display = "none"
  congratContainer.style.display = "grid"
})