// babylon documentation;
// https://doc.babylonjs.com/features/featuresDeepDive/scene

var B = BABYLON;

//get the canvas element from the DOM
var canvas = document.getElementById("renderCanvas");

//create a new engine 
var engine = new B.Engine(canvas, true);

//create a function that creates the scene with shapes, light, and camera
let createScene = function () {

    //creates a new scene
    let scene = new B.Scene(engine);

    //creates a camera and attaches to the canvas
    let camera = new B.ArcRotateCamera("cam", 0.75 * Math.PI, 0.40 * Math.PI, 60, new B.Vector3(0, -7, 0), scene);
    camera.attachControl(canvas, false);

    //creates a light 
    let light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 0, 0), scene);
    light.intensity = 0.75;

    //creates a sphere and specifies its size
    let sphere1 = B.Mesh.CreateSphere("sphere", 20.0, 12.0, scene);
    let sphere2 = B.Mesh.CreateSphere("sphere", 20.0, 6.0, scene);
    let sphere3 = B.Mesh.CreateSphere("sphere", 20.0, 6.0, scene);
    let sphere4 = B.Mesh.CreateSphere("sphere", 20.0, 8.0, scene);
    let sphere5 = B.Mesh.CreateSphere("sphere", 20.0, 8.0, scene);
    let sphere6 = B.Mesh.CreateSphere("sphere", 20.0, 25.0, scene);
    let sphere7 = B.Mesh.CreateSphere("sphere", 20.0, 18.0, scene);
    let sphere8 = B.Mesh.CreateSphere("sphere", 20.0, 10.0, scene);
    let sphere9 = B.Mesh.CreateSphere("sphere", 20.0, 10.0, scene);

    //creates a torus 
    const torus1 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 4, diameter: 29}); //saturn ring
    
    //create toruses for the orbits of the planets
    //increases the tessallations to change the look of toruses from polygons to circles
    const torus2 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 50, tessellation : 30});
    const torus3 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 90, tessellation : 40});
    const torus4 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 120, tessellation : 50});
    const torus5 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 145, tessellation : 50});
    const torus6 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 200, tessellation : 50});
    const torus7 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 240, tessellation : 50});
    const torus8 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 270, tessellation : 50});
    const torus9 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: .5, diameter: 300, tessellation : 70});
    
    //create knots 
    //create black hole knots
    // let knotA = B.Mesh.CreateTorusKnot("knot", 20 /*size*/, 1 /*thick*/, 328/*tessa*/, 64, 10, 3, scene); //(working on it)
    // let knotB = B.Mesh.CreateTorusKnot("knot", 18 /*size*/, 1.3, 328/*tessa*/, 64, 10, 3, scene); //(working on it)
    // let knotC = B.Mesh.CreateTorusKnot("knot", 16 /*size*/, 1, 328/*tessa*/, 64, 10, 3, scene); //(working on it)
    // let knotD = B.Mesh.CreateTorusKnot("knot", 12 /*size*/, 1, 328/*tessa*/, 64, 10, 3, scene); //(working on it)
    //create solar knots
    let knot1 = B.Mesh.CreateTorusKnot("knot", 4.5, 1, 128, 64, 2, 3, scene);
    let knot2 = B.Mesh.CreateTorusKnot("knot", 4.6, 1, 128, 64, 2, 6/*rings*/, scene);

    //gives shapes a position
    sphere1.position = new B.Vector3(0, 0, 0); //sun
    sphere2.position = new B.Vector3(22, 10, 5); //mercury
    sphere3.position = new B.Vector3(40, 10, -12); //venus
    sphere4.position = new B.Vector3(-60, -10, -6); //earth
    sphere5.position = new B.Vector3(-70, -10, 22); //mars
    sphere6.position = new B.Vector3(-100, -15, -22); //jupiter
    sphere7.position = new B.Vector3(120, -20, 22); //saturn
    sphere8.position = new B.Vector3(122, 18, -42); //uranus
    sphere9.position = new B.Vector3(-148, 14, 22); //neptune

    torus1.position = new B.Vector3(120, -20, 22); //saturn-torus
        torus1.rotation.x = Math.PI / 4;

    // knotA.position.y = -25; //black hole
    // knotB.position.y = -25; //black hole
    // knotC.position.y = -25; //black hole
    // knotD.position.y = -25; //black hole
    // knot2.position.y = -15;
    knot2.rotation.x = Math.PI / 3;

    //sets the colors for the sun
    material = new B.StandardMaterial("texture1", scene);
    material.emissiveColor = new B.Color3(0.95, 0.67, 0.17); //colors the area not hit by the light
    sphere1.material = material;
    
    //sets the colors of mercury
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.63, 0.61, 0.61); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.3, 0.27, 0.27); //colors the area not hit by the light
    sphere2.material = material;

    //sets the colors of venus
    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new BABYLON.Texture("images/venus-background.jpg", scene);
    sphere3.material = material;

    //sets the colors of earth
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.1, 0.9, 0.2); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.2, 0.2, 0.4); //colors the area not hit by the light
    sphere4.material = material;

    //sets the colors of mars
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.89, 0.34, 0.34); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.17, 0.04, 0.04); //colors the area not hit by the light
    sphere5.material = material;

    //sets the colors of jupiter
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.77, 0.58, 0.39); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.12, 0.04, 0.04); //colors the area not hit by the light
    material.specularColor = new B.Color3(1, 0, 0); //this is the reflection of the light
    sphere6.material = material;

    //sets the colors of saturn
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.69, 0.65, 0.65); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.15, 0.08, 0.08); //colors the area not hit by the light
    sphere7.material = material;

    //sets the colors of sun toruses
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.41, 0.38, 0.35); //colors the area hit by light
    torus1.material = material;
   
    //sets the colors of uranus
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.26, 0.54, 0.59); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.06, 0.1, 0.11); //colors the area not hit by the light
    sphere8.material = material;

    //sets the colors of neptune
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0.21, 0.28, 0.93); //colors the area hit by light
    material.emissiveColor = new B.Color3(0.05, 0.07, 0.23); //colors the area not hit by the light
    sphere9.material = material;

    //set the colors for the knot1
    material = new B.StandardMaterial("texture1", scene);
    material.emissiveColor = new B.Color3(0.96, 0.64, 0.04);
    knot1.material = material;

    //set the colors for the knot2
    material = new B.StandardMaterial("texture1", scene);
    material.emissiveColor = new B.Color3(0.98, 0.64, 0.18);
    knot2.material = material;

    // //set the colors for the black hole knot
    // material = new B.StandardMaterial("texture1", scene);
    // material.emissiveColor = new B.Color3(0.01, 0.18, 0.93);
    // knotA.material = material;

    // //set the colors for the black hole knot
    // material = new B.StandardMaterial("texture1", scene);
    // material.emissiveColor = new B.Color3(0.69, 0.18, 0.98);
    // knotB.material = material;

    // //set the colors for the black hole knot
    // material = new B.StandardMaterial("texture1", scene);
    // material.emissiveColor = new B.Color3(0.63, 1, 0.97);
    // knotC.material = material;

    // //set the colors for the black hole knot
    // material = new B.StandardMaterial("texture1", scene);
    // material.emissiveColor = new B.Color3(0.35, 0.04, 0.47);
    // knotD.material = material;
   
    //sets the color of the scene to black
    scene.clearColor = new BABYLON.Color3(0.05, 0.05, 0.05);
    return scene;
};

//store the scene returned by the createScene function
let scene = createScene();

//create loop to render the scene
let loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

//creates a function that resizes the scene 
let resize = function () {
    engine.resize();
}

//creates a new event listener
window.addEventListener("resize", resize);

