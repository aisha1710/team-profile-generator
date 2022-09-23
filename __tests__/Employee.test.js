const Employee = require("../lib/Employee");

const employeeInstance = new Employee("sarah", 4, "sarah@gmail.com");

describe("employee", () => {
  it("should return employee", () => {
    const expected = "Employee";
    const result = employeeInstance.getRole();

    expect(result).toEqual(expected);
  });
  it("should return name", () => {
    const expected = "sarah";
    const result = employeeInstance.getName();

    expect(result).toEqual(expected);
  });
  it("should return id number", () => {
    const expected = 4;
    const result = employeeInstance.getId();

    expect(result).toEqual(expected);
  });
  it("should return email address", () => {
    const expected = "sarah@gmail.com";
    const result = employeeInstance.getEmail();

    expect(result).toEqual(expected);
  });
});
