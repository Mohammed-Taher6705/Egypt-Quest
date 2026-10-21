// Unit tests for the automatic map style (www/js/daylight.js)
const test = require("node:test");
const assert = require("node:assert/strict");
const D = require("../www/js/daylight.js");
const at = s => Date.parse(s);

test("sun elevation matches known values (±1°)", () => {
  assert.ok(Math.abs(D.sunAlt(at("2026-06-21T12:00:00Z"), 51.5, -0.12) - 62) < 1, "London, June solstice noon ≈ 62°");
  assert.ok(D.sunAlt(at("2026-10-21T22:00:00Z"), 30.04, 31.24) < -30, "Cairo after midnight is far below the horizon");
});

test("phase thresholds: >8° sunny, -6°..8° sunset glow, below -6° night", () => {
  assert.equal(D.phaseFor(30), "classic");
  assert.equal(D.phaseFor(8.1), "classic");
  assert.equal(D.phaseFor(5), "sunset");
  assert.equal(D.phaseFor(-5.9), "sunset");
  assert.equal(D.phaseFor(-7), "night");
});

test("a day in Cairo goes night → sunny → sunset → night", () => {
  const ph = h => D.phaseFor(D.sunAlt(at("2026-10-21T" + h + ":00Z"), 30.04, 31.24));
  assert.deepEqual(["01:00", "09:00", "14:50", "19:00"].map(ph), ["night", "classic", "sunset", "night"]);
});
