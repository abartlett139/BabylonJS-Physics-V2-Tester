class GUI{
    constructor(){
        console.log("GUICREATED");
        this.AT = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI");
        this.create0();
        this.create1();
        this.create2();
    }

    create0(){
        this.b0 = BABYLON.GUI.Button.CreateImageOnlyButton("b0", "rs/buttons/b0.jpg");
        this.b0.width = "30px";
        this.b0.height = "30px";
        this.b0.cornerRadius = 10;
        this.b0.color = "#262626";
        this.b0.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.b0.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        
        this.AT.addControl(this.b0);
        this.b0.onPointerClickObservable.add((event)=>{
            createBox();
        });
    }

    create1(){
        this.b1 = BABYLON.GUI.Button.CreateImageOnlyButton("b1", "rs/buttons/b1.jpg");
        this.b1.width = "30px";
        this.b1.height = "30px";
        this.b1.top = "30px";
        this.b1.cornerRadius = 10;
        this.b1.color = "#262626";
        this.b1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.b1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        
        this.AT.addControl(this.b1);
        this.b1.onPointerClickObservable.add((event)=>{
            createSphere();
        });
    }

    create2(){
        this.b2 = BABYLON.GUI.Button.CreateImageOnlyButton("b1", "rs/buttons/b1.jpg");
        this.b2.width = "30px";
        this.b2.height = "30px";
        this.b2.top = "60px";
        this.b2.cornerRadius = 10;
        this.b2.color = "#262626";
        this.b2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.b2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        
        this.AT.addControl(this.b2);
        this.b2.onPointerClickObservable.add((event)=>{
            createCapsule();
        });
    }
    
}



function createBox(){
    var box = BABYLON.MeshBuilder.CreateBox("b", {size: 1});
    new BABYLON.PhysicsAggregate(box, BABYLON.PhysicsShapeType.BOX, {mass: 1}, MAIN_SCENE);
    box.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    box.addBehavior(pointerDragBehavior,true);
}


function createSphere(){
    var sphere = BABYLON.MeshBuilder.CreateSphere("s", {size: 1});
    new BABYLON.PhysicsAggregate(sphere, BABYLON.PhysicsShapeType.SPHERE, {mass: 1}, MAIN_SCENE);
    sphere.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    sphere.addBehavior(pointerDragBehavior,true);
}

function createCapsule(){
    var capsule = BABYLON.MeshBuilder.CreateCapsule("c", {size: 1});
    new BABYLON.PhysicsAggregate(capsule, BABYLON.PhysicsShapeType.CAPSULE, {mass: 1}, MAIN_SCENE);
    capsule.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    capsule.addBehavior(pointerDragBehavior,true);
}