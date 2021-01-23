const getProperty = require('./index');

const world = {
  countries : {
      morocco :{
        taroudant :{
            person1 : {
              id: 150,
              name : "Ahmed",
              weight: "150 Kg",
              height: "1.78 m"
            },
            person2 : {
              id: 500,
              name : "Bouchta",
              weight: "70 Kg",
              height: "1.88 m"
            },
            personne3 : null,
            personne4 : 15,
          }
      }
  }
};

test('Get a specific value', () => {
  expect(
    getProperty(
      world, 
      "world.countries.morocco.taroudant.person2.name", 
      // '', 
      // res => typeof res === "string"
  )
  ).toBe("Bouchta");
});


test('validate return type', () => {
  expect(
    typeof
    getProperty(
      world, 
      "world.countries.morocco.taroudant.person2", 
      {}, 
      res => typeof res === "object"
    )
  ).toBe("object");
});


test('Get back default value if validation fails', () => {
  expect(
    getProperty(
      world, 
      "world.countries.morocco.taroudant.person2", 
      {}, 
      res => typeof res === "string"
  )
  ).toStrictEqual({});
});




test("Get back the default value when property doesn't exist", () => {
  expect(
    getProperty(
      world, 
      "world.countries.morocco.taroudant.person2.namaywa",
      'walo'
    )
  ).toBe('walo');
});


test('Get default value (undefined) if function called with unexpected parameter types', () => {
  expect(
    getProperty(
      "gimmi something"
    )
  ).toBe(undefined);
});