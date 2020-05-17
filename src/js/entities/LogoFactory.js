'use strict';

import CollidableFactory from './CollidableFactory';

class LogoFactory extends CollidableFactory {
    constructor(scene, positions = []) {
        super({ asset: 'phaserLogo', scene, positions });
    }

    onCreate(logo) {
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
    }
}

export default LogoFactory;
