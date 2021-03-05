describe("Report", function () {
  let report;

  beforeEach(function () {
    report = new Report();
  });

  describe("convert", function () {
    it("Should return a string as output", function () {
      expect(report.convert("Green")).toBe("Green: 1");
    });
  });
});
