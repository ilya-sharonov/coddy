const gameField = document.querySelector('.game_field');

const xElem = document.createElement('div');
xElem.classList.add('x_mark');
const oElem = document.createElement('div');
oElem.classList.add('o_mark');

let isX = true;

const X = 1;
const O = 2;

const fieldArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function createBlock(dataX, dataY) {
    return `
        <div data-x="${dataX}" data-y="${dataY}"></div>
    `;
}

function createGameField(field) {
    for (let i = 0; i < fieldArray.length; i++) {
        for (let j = 0; j < fieldArray[i].length; j++) {
            gameField.insertAdjacentHTML('beforeend', createBlock(i, j));
        }
    }
}

gameField.addEventListener(
    'click',
    event => {
        const { target } = event;
        const xAttr = target.attributes['data-x'];
        const yAttr = target.attributes['data-y'];
        if (!xAttr || !yAttr) {
            return;
        }
        const { value: x } = xAttr;
        const { value: y } = yAttr;
        if (!fieldArray[x][y]) {
            if (isX) {
                isX = false;
                fieldArray[x][y] = X;
                return target.appendChild(xElem.cloneNode());
            }
            isX = true;
            fieldArray[x][y] = O;
            target.appendChild(oElem.cloneNode());
        }
    },
    true,
);

createGameField();
