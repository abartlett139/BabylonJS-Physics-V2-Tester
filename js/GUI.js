class GUI{
    constructor(){
        console.log("GUICREATED");
        this.AT = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI");
        this.create0();
        this.create1();
        this.create2();
        this.create3();
    }

    create0(){
        this.b0 = BABYLON.GUI.Button.CreateImageOnlyButton("b0", "rs/buttons/b0.png");
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
        this.b1 = BABYLON.GUI.Button.CreateImageOnlyButton("b1", "rs/buttons/b1.png");
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
        this.b2 = BABYLON.GUI.Button.CreateImageOnlyButton("b2", "rs/buttons/b2.png");
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


    create3(){
        this.b3 = BABYLON.GUI.Button.CreateImageOnlyButton("b3", "rs/buttons/b3.png");
        this.b3.width = "30px";
        this.b3.height = "30px";
        this.b3.top = "90px";
        this.b3.cornerRadius = 10;
        this.b3.color = "#262626";
        this.b3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.b3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        
        this.AT.addControl(this.b3);
        this.b3.onPointerClickObservable.add((event)=>{
            createCylinder();
        });
    }
    
}


function createBox(){
    var box = BABYLON.MeshBuilder.CreateBox("b", {size: 0.5});
    box.position.y = 5;
    box.material = BLUEMAT;
    new BABYLON.PhysicsAggregate(box, BABYLON.PhysicsShapeType.BOX, {mass: 1}, MAIN_SCENE);
    box.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    box.addBehavior(pointerDragBehavior,true);
}


function createSphere(){
    var sphere = BABYLON.MeshBuilder.CreateSphere("s", {diameter: 0.5});
    sphere.position.y = 5;
    sphere.material = REDMAT;
    new BABYLON.PhysicsAggregate(sphere, BABYLON.PhysicsShapeType.SPHERE, {mass: 1}, MAIN_SCENE);
    sphere.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    sphere.addBehavior(pointerDragBehavior,true);
}

function createCapsule(){
    var capsule = BABYLON.MeshBuilder.CreateCapsule("c", {size: 1});
    capsule.position.y = 5;
    capsule.material = GREENMAT;
    new BABYLON.PhysicsAggregate(capsule, BABYLON.PhysicsShapeType.CAPSULE, {mass: 1}, MAIN_SCENE);
    capsule.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    capsule.addBehavior(pointerDragBehavior,true);
}

function createCylinder(){
    var cylinder = BABYLON.MeshBuilder.CreateCylinder("c", {height: .75, diameter: 0.5});
    cylinder.position.y = 5;
    cylinder.material = YELLOWMAT;
    new BABYLON.PhysicsAggregate(cylinder, BABYLON.PhysicsShapeType.CYLINDER, {mass: 1}, MAIN_SCENE);
    cylinder.physicsBody.disablePreStep = false;
    var pointerDragBehavior = new BABYLON.PointerDragBehavior({});
    pointerDragBehavior.useObjectOrientationForDragging = false;
    cylinder.addBehavior(pointerDragBehavior,true);
}