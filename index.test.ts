import soundConsumer from "./index";

// # not working
jest.mock("./sound-player", () => {
    return jest.fn().mockImplementation(() => {
            return {
                foo: "foo", playSoundFile: jest.fn().mockImplementation(() => {
                    console.log("mock is called")
                })
            }
        })
})

// # working
// jest.mock("./sound-player", () => {
//     return {
//         __esModule: true,
//         default: jest.fn().mockImplementation(() => {
//             return {
//                 foo: "foo", playSoundFile: jest.fn().mockImplementation(() => {
//                     console.log("mock is called")
//                 })
//             }
//         })
//     }
// })

describe("Testsuite to test class Mock", () => {

    it('should test the mock',  () => {
        soundConsumer();
    });
})