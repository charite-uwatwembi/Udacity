let salary = 0;
let diploma = "a bachelor's"; // Example diploma for testing

switch (diploma) {
    case "No high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an associate's degree":
        salary = 41496;
        break;
    case "a bachelor's":
        salary = 59124;
        break;
    default:
        console.log("Not Found");
}

console.log(`In 2015, a person with ${diploma} earned an average of $${salary.toLocaleString()} /year.`);
