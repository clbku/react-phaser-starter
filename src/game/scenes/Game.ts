/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { EventBus } from '../EventBus';
/* END-USER-IMPORTS */

export default class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

        this.editorCreate();

        EventBus.emit('current-scene-ready', this);

	}

    changeScene ()
    {
        this.scene.start('GameOver');
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
