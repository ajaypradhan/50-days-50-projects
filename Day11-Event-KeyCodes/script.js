const inset = document.getElementById('insert');

window.addEventListener('keypress', (event) => {
    inset.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
            
    `;
});
