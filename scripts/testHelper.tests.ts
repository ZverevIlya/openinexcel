/// <reference path="../typings/index.d.ts" />

import { expect } from 'chai';

import { TestHelper } from "./testHelper";

describe("Guid check", () => {
    it("should return query ID", () => {
        let testHelper = new TestHelper();
        
        expect(testHelper.format("67f50c68-d311-4f45-8bd0-da7268f02435")).to.be.equal("67f50c68-d311-4f45-8bd0-da7268f02435");
    });
});