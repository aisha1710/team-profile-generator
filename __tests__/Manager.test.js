const manager = require("../lib/Manager");

const managerInstance = new manager("jim", 263, "jim@gmail.com", 12345);

describe("manager", () => {
  it("should return manager", () => {
    const expected = "Manager";
    const result = managerInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "jim";
    const result = managerInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 263;
    const result = managerInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "jim@gmail.com";
    const result = managerInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return office number", () => {
    const expected = 12345;
    const result = managerInstance.getOfficeNum();

    expect(result).toEqual(expected);
  });
});
