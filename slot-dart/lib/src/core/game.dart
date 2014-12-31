library slot.core.game;

import 'package:stagexl/stagexl.dart';
import 'scene.dart';

class Game extends Sprite {

  ResourceManager _resourceManager;
  Scene _scene;
  num _frameRate;

  Game() : super() {
    print('Game.Game');
    _resourceManager = new ResourceManager();
    onAddedToStage.listen(_onAddedToStage);
  }

  ResourceManager get resourceManager {
    return _resourceManager;
  }

  Scene get scene {
    return _scene;
  }

  set scene(Scene value) {
    print('Game.set.scene');
    if (_scene != null) {
      removeChild(_scene);
      _scene.dispose();
      _scene = null;
    }
    _scene = value;
    if (_scene != null) {
      addChild(_scene);
    }
  }

  void init() {
    print('Game.init');
    _frameRate = stage.frameRate;
  }

  void _onAddedToStage(Event e) {
    print('Game._onAddedToStage');
    init();
  }

}
