import './scoreboard.css';

export default class ScoreBoard {
  constructor(container) {
    const scoreBoardZone = document.createElement('div');
    scoreBoardZone.classList.add('score-board__zone');
    container.appendChild(scoreBoardZone);

    const fairBoard = document.createElement('div');
    // container.createElement('div');
    fairBoard.classList.add('fair-board');
    scoreBoardZone.appendChild(fairBoard);

    const fairBoardHeader = document.createElement('div');
    fairBoardHeader.classList.add('fair-board__header');
    fairBoard.appendChild(fairBoardHeader);
    fairBoardHeader.innerText = 'Пропущено:';

    const fairBoardCount = document.createElement('div');
    fairBoardCount.classList.add('fair-board__count');
    fairBoard.appendChild(fairBoardCount);
    fairBoardCount.innerText = 0;

    const scoreBoard = document.createElement('div');
    // container.createElement('div');
    scoreBoard.classList.add('score-board');
    scoreBoardZone.appendChild(scoreBoard);

    const scoreHeader = document.createElement('div');
    scoreHeader.classList.add('score-board__header');
    scoreBoard.appendChild(scoreHeader);
    scoreHeader.innerText = 'Попаданий:';

    const scoreСount = document.createElement('div');
    scoreСount.classList.add('score-board__count');
    scoreBoard.appendChild(scoreСount);
    scoreСount.innerText = 0;

    return scoreBoardZone;
  }
}