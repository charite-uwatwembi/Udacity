let time = 60;

while (time >= 0) {
    switch (time) {
        case 50:
            console.log("Orbiter transfers from ground to internal power (T-50 seconds)");
            break;
        case 31:
            console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)");
            break;
        case 16:
            console.log("Activate launch pad sound suppression system (T-16 seconds)");
            break;
        case 10:
            console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
            break;
        case 6:
            console.log("Main engine start (T-6 seconds)");
            break;
        case 0:
            console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
            break;
        default:
            console.log(`T-${time} seconds`);
    }
    time--;
}
