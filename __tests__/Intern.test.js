const intern = require("../lib/Intern");

const internInstance = new intern(
  "mike",
  123,
  "mike@gmail.com",
  "university of birmingham"
);

describe("intern", () => {
  it("should return intern", () => {
    const expected = "Intern";
    const result = internInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "mike";
    const result = internInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 123;
    const result = internInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "mike@gmail.com";
    const result = internInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return intern school", () => {
    const expected = "university of birmingham";
    const result = internInstance.getSchool();

    expect(result).toEqual(expected);
  });
});
