const sorting = require("../../app");

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
};
 
module.exports = config;

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]; 
    const output =  sorting.sortByName(input);
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(output).toEqual(expected);
  });
    it("Books names should not be sorted in ascending order", () => {
      const input = [
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
        "Волшебник изумрудного города"
      ];
  
      const output = sorting.sortByName(input);
      const expected = [
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
        "Волшебник изумрудного города"
      ];
      expect(output).toEqual(expected);
    }); 
  });

