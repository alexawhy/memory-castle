import * as BABYLON from 'babylonjs';

const newBlockCanvas = document.getElementById("newBlockCanvas");
const engine = new BABYLON.Engine(newBlockCanvas, true, {preserveDrawingBuffer: true, stencil: true});

const createScene = () => {
  // scene
  const scene = new BABYLON.Scene(engine);

  // camera
  const camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 3, 5, BABYLON.Vector3.Zero());
  // const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(newBlockCanvas, true);
  camera.setTarget(BABYLON.Vector3.Zero());

  // light
  // const pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene);
  const hemisphericlight = new BABYLON.HemisphericLight("hemisphericlight", new BABYLON.Vector3(2, 2, 0), scene);
  hemisphericlight.intensity = 1.2;

  // create a cube
  let cube = new BABYLON.MeshBuilder.CreateBox("box1", { size: 2 });

  // background color
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

  return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});