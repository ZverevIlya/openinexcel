/// <reference path="../typings/index.d.ts" />

import { expect } from "chai";
import { Parsers } from "./sharedMethods";
describe("Checks for valid input processing", () => {
    let parsers = new Parsers();

    describe("Guid check for static queries (false)", () => {
        it("should return false for not a known static query guid", () => {
            expect(parsers.checkForStaticQuery("meow-mix-meow-mix")).to.be.equal(false);
        });
    });

    describe("Guid check for static queries", () => {
        it("should return true for known static query guids", () => {
            expect(parsers.checkForStaticQuery("2650C586-0DE4-4156-BA0E-14BCfb664cca")).to.be.equal(true);
        });
    });
}); 

