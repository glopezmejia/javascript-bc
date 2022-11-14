// "thanos Dancing Twerk Ver2" (https://skfb.ly/6RSzz) by Kirill.Gorskikh is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Thanos Infinity sword (With Emission)" (https://skfb.ly/6XqMS) by ikhlasfathoni is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Xian SpaceShip" (https://skfb.ly/opYV7) by Valery Kharitonov is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// babylon documentation;
// https://doc.babylonjs.com/features/featuresDeepDive/scene

/* notes to self:
    //set universal camera to 0,0,0 to see the mesh imported
    //scale meshes with nameOfMesh.scaling.x = value; and nameOfMesh.scaling.x = value;
    //obj, glb, gltf files work
*/

let B = BABYLON;

//get the canvas element from the DOM
let canvas = document.getElementById("renderCanvas");

//create a new engine 
let engine = new B.Engine(canvas, true);

//create a function that creates the scene with shapes, light, and camera
let createScene = function () {

    //creates a new scene with gravity enabled
    let scene = new B.Scene(engine);
        // scene.gravity = new B.Vector3(0, -9.81, 0);
        scene.gravity = new B.Vector3(0, 0.0, 0);
        scene.collisionsEnabled = true;

    //creates a camera and attaches to the canvas
    let camera = new B.UniversalCamera("UniversalCamera", new B.Vector3(1500,200,500), scene);
    // let camera = new B.ArcRotateCamera("cam", 0.75 * Math.PI, 0.40 * Math.PI, 60, new B.Vector3(0, -7, 0), scene);
    camera.attachControl(canvas, false);
        camera.applyGravity = true;
        camera.ellipsoid = new B.Vector3(1, 40, 1); //40 controls distance from the ground
        camera.checkCollisions = true;
        camera.speed = 10;
        camera.rotation.y = -Math.PI / 2;

    //creates a light and adjusts its intensity
    let light = new B.HemisphericLight("hemispheric-light", new B.Vector3(0, 1, 0), scene);
    light.intensity = 0.75;

    createGroundAndSkyBox(scene)

    // display the axes in babylon
    /*
    new BABYLON.AxesViewer(scene, 5);
    const box = BABYLON.MeshBuilder.CreateBox("box", {size : 20});
    const localAxes = new BABYLON.AxesViewer(scene, 1000);
    localAxes.xAxis.parent = box;
    localAxes.yAxis.parent = box;
    localAxes.zAxis.parent = box;
    */

    // creates a dancing thanos
    BABYLON.SceneLoader.ImportMesh(null, "./javascript/assets/thanos_dancing/", "scene.gltf", scene,
    function (meshes) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
            mesh.rotation.y = -0.625
            mesh.position = new B.Vector3(1500, -22, 0);
        }

        let thanos = meshes[0]
        for (let i = 1; i < meshes.length; i++) {
            meshes[i].setParent(thanos)
        }
    })

    //creates thanos' sword 
    BABYLON.SceneLoader.ImportMesh(null, "./javascript/assets/thanos_sword/", "scene.gltf", scene,
    function (meshes) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
        }

        let sword = meshes[0]
        for (let i = 1; i < meshes.length; i++) {
            meshes[i].setParent(sword)
        }

        sword.position = new B.Vector3(-400,130,100);

        sword.scaling.x = 100;
        sword.scaling.y = 100;
        sword.scaling.z = 100;

        sword.rotation = new BABYLON.Vector3(0, -.4, 2);
    })

    //creates thanos' spaceship
    BABYLON.SceneLoader.ImportMesh(null, "./javascript/assets/white_spaceship/", "scene.gltf", scene,
    function (meshes) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
        }

        let spaceship = meshes[0]
        for (let i = 1; i < meshes.length; i++) {
            meshes[i].setParent(spaceship)
        }
        spaceship.position = new B.Vector3(100, 200, -1500);
        spaceship.rotation = new B.Vector3(-.2, -2, -.2);
        spaceship.scaling = new B.Vector3(200,200,200);
    })
    
    //creates set of infinity stones
    const reality = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    const soul = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    const time = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    const mind = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    const power = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    const space = B.MeshBuilder.CreateSphere("sphere", {diameterX: 20, diameterY: 40, diameterZ: 20}, scene);
    
    //sets the position of all infinity stones
    reality.position = new B.Vector3(55, 450, -225);     // 1 o clock
    soul.position = new B.Vector3(150, 450, 150);        // 9 o clock
    time.position = new B.Vector3(230, 450, -30);        // 11 o clock
    mind.position = new B.Vector3(-150, 450, -150);      // 3 o clock
    power.position = new B.Vector3(-50, 450, 200);       // 8 o clock
    space.position = new B.Vector3(-205, 450, 35);       // 4 o clock

    //creates the material for the stones
    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/reality.jpg", scene);
    reality.material = material;

    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/soul.jpg", scene);
    soul.material = material;

    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/time.jpg", scene);
    time.material = material;

    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/mind.jpg", scene);
    mind.material = material;

    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/power.jpg", scene);
    power.material = material;

    material = new B.StandardMaterial("texture1");
    material.diffuseTexture = new B.Texture("images/infinity-stones/space.jpg", scene);
    space.material = material;

    return scene
};

//store the scene returned by the createScene function
let scene = createScene();

function createGroundAndSkyBox(scene) {
    //creates a ground with few subdivisions for smoother ground
    let ground = B.MeshBuilder.CreateGroundFromHeightMap("ground", "images/planet-ground-pimples.png", {
        width: 7000, height: 7000, subdivisions: 16, maxHeight: 50, minHeight: -100
    }, scene, false);
    ground.checkCollisions = true;
    ground.position.y = 0;

    //creates a material for the ground
    let materialground = new B.StandardMaterial("texture1", scene);
    materialground.diffuseTexture = new B.Texture("images/ground-texture-dark-2.jpg", scene);
    ground.material = materialground;

    //creates a skybox and sets its distance to infinite to avoid seeing the corners of the box from the inside
    let skybox = B.Mesh.CreateBox("skyBox", 4000.0, scene);
        skybox.position.y = -100;
        skybox.infiniteDistance = true;

    //creates the material for the skybox
    let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
        skyboxMaterial.backFaceCulling = false;

    //sets the faces of the skybox
    let files = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"];
    skyboxMaterial.reflectionTexture = new B.CubeTexture("images/blue-skybox/", scene, files);
    skyboxMaterial.reflectionTexture.coordinatesMode = B.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new B.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new B.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
}

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

