describe("Report", function () {
  let report;

  beforeEach(function () {
    report = new Report();
  });

  describe("convert", function () {
    it("Should return 'Green: 1' if 'Green'", function () {
      expect(report.convert("Green")).toBe("Green: 1");
    });

    it("Should return 'Amber: 1' if 'Amber'", function () {
      expect(report.convert("Amber")).toBe("Amber: 1");
    });

    it("Should return 'Red: 1' if 'Red'", function () {
      expect(report.convert("Red")).toBe("Red: 1");
    });
  });
});
