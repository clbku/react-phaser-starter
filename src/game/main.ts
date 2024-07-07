import MainGame from './scenes/Game';
import { AUTO, Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 640,
    height: 320,
    parent: 'game-container',
    backgroundColor: "#2f2f2f",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        MainGame,
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
