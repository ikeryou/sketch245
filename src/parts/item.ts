
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";
import { Conf } from "../core/conf";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  public noise:number = 1;
  public radius:number = 1;
  public vx:number = 0;
  public vy:number = 0;
  public mass:number = 0;

  public x:number = 0;
  public y:number = 0;

  constructor(opt:any) {
    super(opt)

    this.noise = Util.instance.random(0, 1);
    this.mass = 1;

    this.vx = Util.instance.range(5) * 0.3;
    this.vy = Util.instance.range(5) * 0.3;

    this.x = Util.instance.random(0, Conf.instance.LINE);
    this.y = Util.instance.random(0, Conf.instance.LINE);

    this._update();
  }


  protected _update(): void {
    super._update();

    const sw = Conf.instance.LINE;
    const sh = Conf.instance.LINE;
    this.radius = Math.min(sw, sh) * Util.instance.mix(0.075, 0.125, this.noise)
  }

}