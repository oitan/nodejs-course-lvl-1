// async-await

async function main() {
  await test();
  console.log("main");
}

async function test() {
  const response = await fetch("https://google.com");
  console.log("test");
}

main();
