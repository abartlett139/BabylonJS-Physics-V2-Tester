var CANVAS;
var ENGINE;
var MAIN_SCENE;
var MAIN_CAMERA;
var DEFAULT_CAMERA_POSITION = new BABYLON.Vector3(0, 1, -10);

var LIGHT1;
var LIGHT2;
var DOME;
var MAIN_GUI;
var AT;
var DEV_MODE = true;
var havokInstance;



var GROUP1 = 1;
var GROUP2 = 2;
var GROUP3 = 3;
const DEFAULT_GRAVITY = new BABYLON.Vector3(0, -4.8, 0);
var REDMAT, BLUEMAT, GREENMAT, YELLOWMAT;

function initMaterials(scene){
    REDMAT = new BABYLON.StandardMaterial("redMat", scene);
    REDMAT.diffuseColor = new BABYLON.Color3(1, 0, 0);
    BLUEMAT = new BABYLON.StandardMaterial("blueMat", scene);
    BLUEMAT.diffuseColor = new BABYLON.Color3(0, 0, 1);
    GREENMAT = new BABYLON.StandardMaterial("greenMat", scene);
    GREENMAT.diffuseColor = new BABYLON.Color3(0, 1, 0);
    YELLOWMAT = new BABYLON.StandardMaterial("yellowMat", scene);
    YELLOWMAT.diffuseColor = new BABYLON.Color3(1, 1, 0);
}


function getRandomFloat(min, max, decimals){
    var temp = (Math.random()*(max-min)+min).toFixed(decimals);
    return parseFloat(temp);
}
function getRandomPosNegNumber(min, max){
    var temp = Math.floor(Math.random()*2);
    switch(temp){
        case 0: return Math.floor(Math.random()*(max-min+1)+min); break;
        case 1: return (Math.floor(Math.random()*(max-min+1)+min)) * -1; break;
    }
}
function getDistance(v1, v2){
    return Math.sqrt(((v2.x-v1.x)*(v2.x-v1.x)) + ((v2.y-v1.y)*(v2.y-v1.y)) + ((v2.z-v1.z)*(v2.z-v1.z)));
}

function mainCameraLookAt(position, zOffset){
    MAIN_CAMERA.setTarget(position);
    MAIN_CAMERA.setPosition(new BABYLON.Vector3(position.x, position.y, position.z-zOffset));
    MAIN_CAMERA.detachControl();
}

function mainCameraReset(){
    MAIN_CAMERA.setTarget(BABYLON.Vector3.Zero());
    MAIN_CAMERA.setPosition(DEFAULT_CAMERA_POSITION);
    MAIN_CAMERA.attachControl(CANVAS, true);
}


function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}

