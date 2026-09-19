import { skills, timeline } from "./data.js"

/* ---------- 技能条 ---------- */
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

// 下一帧再设宽度，触发 CSS transition 动画
requestAnimationFrame(() => {
  skillsEl.querySelectorAll(".fill").forEach(el => {
    el.style.width = el.dataset.percent + "%"
  })
})

/* ---------- 时间线 ---------- */
const timelineEl = document.querySelector(".timeline")

timelineEl.innerHTML = timeline.map(item => `
  <div class="timeline-item">
    <div class="date">${item.date}</div>
    <div class="text">${item.text}</div>
  </div>
`).join("")