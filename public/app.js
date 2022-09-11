document.addEventListener('mousemove', e => {
    document.querySelectorAll('.eye').forEach(eye => {
        const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2)
        const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2)
        const radian = Math.atan2(e.pageX - x, e.pageY - y)
        const rot = 270 - (radian * (180 / Math.PI))
        eye.style.transform = `rotate(${rot}deg)`
    })
})