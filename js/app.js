var delayCreateScene = function () {
    var scene = new BABYLON.Scene(ENGINE);
    MAIN_CAMERA = new BABYLON.ArcRotateCamera("camera1", 0, 0, 1, new BABYLON.Vector3(0, 3, -2), scene);
    MAIN_CAMERA.position = DEFAULT_CAMERA_POSITION;
    MAIN_CAMERA.attachControl(CANVAS, true);


    const hk = new BABYLON.HavokPlugin(true, havokInstance);
    scene.enablePhysics(DEFAULT_GRAVITY, hk);
    var physicsEngine = scene.getPhysicsEngine();
    physicsEngine.setSubTimeStep(5);

    LIGHT1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    LIGHT1.intensity = .8;
    LIGHT2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(-1, -1, 0), scene);
    LIGHT2.intensity = .3;

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);
    var groundAggregate = new BABYLON.PhysicsAggregate(ground, BABYLON.PhysicsShapeType.BOX, { mass: 0 }, scene);

    initMaterials(scene);

    MAIN_GUI = new GUI();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
              
    delay(10).then(() => ENGINE.hideLoadingUI());
    return scene;
};