beforeAll(async () => {

});


describe("Login", () => {
    it("check title of page", async done => {

        expect.toEqual("Welcome!");
        done();
    });
});








afterAll(() => {
    browser.close();
});
