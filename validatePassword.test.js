const validatePassword = require('./validatePassword')

test("retun false given an empty string", () => {
    expect(validatePassword("")).toBe(false)  
})

test("retun true given a password with 8 characters or longer, a letter, and a number", () => {
    expect(validatePassword("2335678b")).toBe(true)  
    expect(validatePassword("2335678B")).toBe(true)
    expect(validatePassword("233567Bb")).toBe(true)
})

test("retun false given a password with 8 characters, but no letters", () => {
    expect(validatePassword("23356789")).toBe(false)  
})

test("retun false given a password with 8 characters, but no letters", () => {
    expect(validatePassword("23356789")).toBe(false)  
})

test("returns true for password with numbers, letters, >= 8 characters", () => {
    expect(validatePassword("12512ajskdhgk")).toBe(true)
})

test("returns false for password with numbers, letters, < 8 characters", () => {
    expect(validatePassword("a1")).toBe(false)
})

  test("returns true for password with numbers, uppercase letters, and >= 8 characters", () => {
    expect(validatePassword("12512ASDFA")).toBe(true)
})

  test("returns true for password with numbers, uppercase and lowercase letters, and >= 8 characters", () => {
    expect(validatePassword("12512ASDasdfasd")).toBe(true)
})