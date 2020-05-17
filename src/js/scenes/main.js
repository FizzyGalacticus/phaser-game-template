'use strict';

import Phaser from 'phaser';

import Background from '../entities/Background';
import LogoFactory from '../entities/LogoFactory';

import { baseURL, particles } from '../util/asset';

class MainScene extends Phaser.Scene {
    constructor() {
        super('main');

        this.logoFactory = new LogoFactory(this);
        this.logoFactory.addCreateListener(logo => {
            const particles = this.add.particles('red');

            const emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD',
            });

            emitter.startFollow(logo);
        });

        this.entities = [new Background(this, 'space'), this.logoFactory];
    }

    preload() {
        this.load.setBaseURL(baseURL);

        this.entities.forEach(entity => entity.preload());

        this.load.image('red', particles.red);
    }

    create() {
        this.entities.forEach(entity => entity.create());

        this.logoFactory.new(400, 100);
    }

    update(time, delta) {
        this.entities.forEach(entity => entity.update(time, delta));
    }
}

export default new MainScene();
