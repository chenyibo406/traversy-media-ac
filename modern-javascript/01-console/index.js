console.log(100);

console.log("Hello World");

console.log(20, "Hello", true);

const x = 100;

console.error("Alert");
console.warn("Warning");
console.table({ name: "Brad", email: "chenyibo416@gmail.com" });
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warn");
console.groupEnd();

const styles = "padding: 10px; background-color: white";

console.log("%cHello World", styles);
