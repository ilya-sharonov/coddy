const RED = '.red';
const YELLOW = '.yellow';
const GREEN = '.green';

function toggleLight(selector) {
    const light = document.querySelector(selector); // <div> | undefined | null
    if (!light) {
        // true / false | !true = false | !false = true
        return;
    }
    light.classList.toggle('off');
}

function setupLight([selector, timeout]) {
    // array
    return function() {
        return new Promise(resolve => {
            toggleLight(selector);
            setTimeout(() => {
                toggleLight(selector);
                resolve();
            }, timeout);
        });
    };
}

const sequence = [
    [[RED, 3000]], // function
    [
        [RED, 1000], // function
        [YELLOW, 1000], // function
    ],
    [[GREEN, 3000]], // function
    [
        [GREEN, 1000],
        [GREEN, 500],
    ],
    [
        [GREEN, 1000],
        [GREEN, 500],
    ],
    [
        [GREEN, 1000],
        [GREEN, 500],
    ],
    /* [
        [YELLOW, 1000],
        [YELLOW, 1000],
    ], */
];

const lights = sequence.map(arr => arr.map(elem => setupLight(elem)));

(async function() {
    let cursor = 0;
    while (true) {
        const fns = lights[cursor];
        await Promise.all(fns.map(fn => fn()));
        cursor = cursor < lights.length - 1 ? cursor + 1 : 0;
    }
})();
