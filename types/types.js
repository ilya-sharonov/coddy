function createBlock(name, className) {
    return `
    <div class="${className}">
        <span>
            ${name}
        </span>
    </div>
    `;
}

(function() {
    const parent = document.querySelector('.parent');
    const types = ['boolean', 'number', 'string', 'undefined', 'null', 'object'];
    types.forEach(item => {
        parent.insertAdjacentHTML('beforeend', createBlock(item, item));
    });
})();
