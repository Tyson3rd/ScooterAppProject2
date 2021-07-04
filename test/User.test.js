const User = require('../src/User')

describe('User', () =>{
   const testUser = new User('Pac','Man',1990,'PacMan@gmail.com')
   test('user has a first name ', () =>{
       expect(testUser.firstName).toBe('Pac')
   })

   test('user has a last name ', () =>{
    expect(testUser.lastName).toBe('Man')
   })

   test('user has a email ', () =>{
    expect(testUser.email).toBe('PacMan@gmail.com')
   })

   test('user has a dob ', () =>{
    expect(testUser.dob).toStrictEqual(1990)
   })
   
})





   