lipstick_y = 0;
    lipstick_x = 0;

function preload() {
   lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    }
    function setup() {
        canvas = createCanvas(300, 300);
        canvas.center();
        v1 = createCapture(VIDEO);
        v1.size(300, 300);
        v1.hide();
        poseNet = ml5.poseNet(v1, modelloaded);
        poseNet.on('pose', gotposes);
    }
    function draw() {
        image(v1, 0, 0, 300, 300);
        image(lipstick, lipstick_x, lipstick_y , 65,45);
    
    }
    function take_snapshot() {
        save("mylips.png");
    }
    function modelloaded() {
        console.log("posenet is initialized");
    }
    function gotposes(results) {
        if (results.length > 0) {
            console.log(results);
            
            lipstick_x = results[0].pose.nose.x-30;
            lipstick_y = results[0].pose.nose.y+10;
            
        }
    }
    
    