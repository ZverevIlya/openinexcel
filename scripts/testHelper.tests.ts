/// <reference path="../typings/index.d.ts" />

import { expect } from "chai";
import { App } from "./app";
describe("Checks for valid input processing", () => {
    let app = new App();

    describe("Guid check for static queries (false)", () => {
        it("should return false for not a known static query guid", () => {
            expect(app.checkForStaticQuery("meow-mix-meow-mix")).to.be.equal(null);
        });
    });

    describe("Guid check for static queries", () => {
        it("should return true for known static query guids", () => {
            expect(app.checkForStaticQuery("2650C586-0DE4-4156-BA0E-14BCfb664cca")).to.be.equal(true);
        });
    });
}); 

