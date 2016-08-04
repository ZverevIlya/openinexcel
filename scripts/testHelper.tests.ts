/// <reference path="../typings/index.d.ts" />

import { expect } from "chai";
import { app } from "./app";
import { TestHelper } from "./testHelper";

describe("Checks for valid input processing", () => {
    describe("Guid check", () => {
        it("should return query ID", () => {
            let testHelper = new TestHelper();
            expect(testHelper.format("67f50c68-d311-4f45-8bd0-da7268f02435")).to.be.equal("67f50c68-d311-4f45-8bd0-da7268f02435");
        });
    });

    describe("Guid check for static queries", () => {
        it("should return true for known static query guids", () => {
            let app = new app();
            expect(app.checkForStaticQuery("2650C586-0DE4-4156-BA0E-14BCfb664cca")).to.be.equal(true);
        });
    });
}); 

