export interface SpriteConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;
}

export class Sprite implements SpriteConfig {
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;
  public color: string = '#000';
  public speed: number = 1;

  constructor(config: SpriteConfig) {
    Object.assign(this, config);
  }

  public get xPos(): number {
    return this.x + this.width;
  }

  public get yPos(): number {
    return this.y + this.height;
  }

  public get xCenter(): number {
    return this.x + this.width / 2;
  }

  public get yCenter(): number {
    return this.y + this.height / 2;
  }
}
