// eslint-disable-next-line no-unused-vars
export type DrawFunction = (context: CanvasRenderingContext2D) => void;

export class Canvas {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  private lastDraw!: DrawFunction;

  constructor(canvasSelector: string) {
    this.canvas = document.querySelector(canvasSelector) as HTMLCanvasElement;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    window.addEventListener('resize', this.resizeHandler.bind(this), false);
  }

  private resizeHandler(): void {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.draw(this.lastDraw);
  }

  public get width(): number {
    return this.canvas.offsetWidth;
  }

  public get height(): number {
    return this.canvas.offsetHeight;
  }

  public get centerX(): number {
    return this.width / 2;
  }

  public get centerY(): number {
    return this.height / 2;
  }

  public clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  public draw(drawFunction: DrawFunction): void {
    this.lastDraw = drawFunction;
    drawFunction(this.context);
  }

  public keyframe(drawFunction: DrawFunction): void {
    const animation = () => {
      this.lastDraw = drawFunction;
      this.draw(drawFunction);
      requestAnimationFrame(animation);
    };

    animation();
  }
}
