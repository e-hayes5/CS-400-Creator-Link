document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    let target = document.querySelector(link.getAttribute("href"))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})
