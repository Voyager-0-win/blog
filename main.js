import { skills, timeline } from "./data.js"

const skillsEl = document.querySelector(".myskills")

skillsEl.innerHTML = skills.map(s => `
  <div class="skill-bar">
    <span class="skill-label">${s.title}</span>
    <div class="track">
      <div class="fill" data-percent="${s.percent}"></div>
    </div>
    <span class="skill-percent">${s.percent}%</span>
  </div>
`).join("")

requestAnimationFrame(() => {
  skillsEl.querySelectorAll(".fill").forEach(el => {
    el.style.width = el.dataset.percent + "%"
  })
})

const timelineEl = document.querySelector(".timeline")

timelineEl.innerHTML = timeline.map(item => `
  <div class="timeline-item">
    <div class="date">${item.date}</div>
    <div class="text">${item.text}</div>
  </div>
`).join("")