const Engineer = require("../lib/Engineer");

const engineerInstance = new Engineer(
  "chelsea",
  3,
  "chelsea@gmail.com",
  "chelsea123"
);

describe("Engineer", () => {
  it("should return Engineer", () => {
    const expected = "Engineer";
    const result = engineerInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "chelsea";
    const result = engineerInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 3;
    const result = engineerInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "chelsea@gmail.com";
    const result = engineerInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return github username", () => {
    const expected = "chelsea123";
    const result = engineerInstance.getGithub();

    expect(result).toEqual(expected);
  });
});
