const Hello = artifacts.require("Hello");

contract("Hello", (accounts) => {
    let hello;
    let expectedGreeting = "Hello, Kayumba!";

    before(async () => {
        hello = await Hello.deployed();
    });

    it("can fetch the greeting message", async () => {
        const greeting = await hello.getGreeting();
        assert.equal(greeting, expectedGreeting, "Greeting should be initialized as 'Hello, Kayumba!'");
    });

    it("can set a new greeting message", async () => {
        await hello.setGreeting("Hi there!", { from: accounts[0] });
        const updatedGreeting = await hello.getGreeting();
        assert.equal(updatedGreeting, "Hi there!", "Greeting should be updated to 'Hi there!'");
    });
});
