import { Model } from '../engine/mvc/Model';
import { View } from '../engine/mvc/View';
import { ReelModel } from '../models/ReelModel';
import { ReelsModel } from '../models/ReelsModel';
import { ReelView } from './ReelView';

export class ReelsView extends View {
  private _reelViews: ReelView[];

  constructor(model: Model) {
    super(model);

    this._reelViews = [];

    this.createReelViews();
  }

  private createReelViews(): void {
    const reelModels: ReelModel[] = this.getModel().getReelModels();

    for (const reelModel of reelModels) {
      const reelView: ReelView = new ReelView(reelModel);
      reelView.scaleX = reelView.scaleY = 6;
      reelView.x = reelModels.indexOf(reelModel) * reelView.width + 40;
      reelView.y = -130;
      this.addChild(reelView);

      this._reelViews.push(reelView);
    }
  }

  public getReelViews(): ReelView[] {
    return this._reelViews;
  }

  public getModel(): ReelsModel {
    return this._model as ReelsModel;
  }
}
