function splash(time) {
    return new Promise(resolve => {
        setTimeout(() => {
        $("#splash").hide();
        resolve();
        }, time);
    });
}
  
function loop() {
    $("#paradeFloats").css({ left: -300 });
    $("#paradeFloats").animate(
        {
        left: "+=850"
        },
        10000,
        "linear",
        function() {
        loop();
        }
    );
    }

    $(document).ready(function() {
    // Wait for splash to resolve after 3 seconds, Then call loop()
    splash(3000).then(() => {
        loop();
    });
});