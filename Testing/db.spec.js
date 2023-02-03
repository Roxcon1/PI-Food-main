const {db, Recipe} = require("../api/src/db")

describe("recipe Model", () => {
    beforeAll(async () => {
        await db.sync({force: true})  
    })


describe("Recipe", () => {
    xit('should not create a recipe if a name is not sent', async () => {
        expect.assertions(1);
        try {
            await Recipe.create({food_summary: "Cocinar la torta"})
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    })
})})