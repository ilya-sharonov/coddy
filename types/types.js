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
    parent.insertAdjacentHTML('beforeend', createBlock('object', 'object'));
    parent.insertAdjacentHTML('beforeend', createBlock('boolean', 'boolean'));
    parent.insertAdjacentHTML('beforeend', createBlock('string', 'string'));
    parent.insertAdjacentHTML('beforeend', createBlock('number', 'number'));
})();
