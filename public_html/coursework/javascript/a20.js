//creates variable to access BABYLON easier
let B = BABYLON

//retrieves canvas element from main 
let canvas = document.getElementById('renderCanvas')

//creates a new engine 
let engine = new B.Engine(canvas, true)

//creates function that creates the scene with its light and camera
let createScene = function () {
    //creates scene
    let scene = new B.Scene(engine)

    //creates camera
    let camera = new B.ArcRotateCamera("cam", 0.75 * Math.PI, 0.40 * Math.PI, 60, new B.Vector3(0, -7, 0), scene);
        camera.attachControl(canvas, false)
        // camera.applyGravity = true;
        camera.ellipsoid = new B.Vector3(1, 40, 1); //40 controls distance from the ground
        camera.checkCollisions = true;
        camera.speed = 10;
        camera.rotation.y = -Math.PI / 2;

    //creates light
    let light = new B.HemisphericLight("hemispheric-light", new B.Vector3(0, 1, 0), scene);
    light.intensity = 0.75;

    //calls the method that creates the ground
    // createGround(scene)

    //calls the method that creates the skybox
    createSkyBox(scene)

    return scene
}

//initializes a scene variable with what is returned from the function createScene()
let scene = createScene()

//function that creates the ground of the scene
let createGround = function(scene) {


}

//function that creates the skybox of the scene
// let createSkyBox = function(scene) {
function createSkyBox(scene) {
    //creates a skybox and sets its distance to infinite to avoid seeing the corners of the box from the inside
    let skybox = B.Mesh.CreateBox("skyBox", 4000.0, scene);
    skybox.position.y = -100;
    skybox.infiniteDistance = true;

    //creates the material for the skybox
    let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
    skyboxMaterial.backFaceCulling = false;

    //sets the faces of the skybox
    let files = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
    skyboxMaterial.reflectionTexture = new B.CubeTexture("images/yellow-skybox/", scene, files);
    skyboxMaterial.reflectionTexture.coordinatesMode = B.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new B.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new B.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
}

//function that creates loop to render the scene
let loop = function () {
    scene.render()
} 

engine.runRenderLoop(loop)

//function that resizes the scene
let resize = function() {
    engine.resize()
}

//creates a new event listener to call the function resize
window.addEventListener('resize', resize)
