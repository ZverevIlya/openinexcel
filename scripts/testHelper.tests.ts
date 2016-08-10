/// <reference path="../typings/index.d.ts" />

import { expect } from "chai";
import * as App from "./app";

describe("Checks for valid input processing", () => {
    describe("Guid check for static queries (false)", () => {
        it("should return false for not a known static query guid", () => {
            expect(App.checkForStaticQuery("meow-mix-meow-mix")).to.be.equal(false);
        });
    });

    describe("Guid check for static queries", () => {
        it("should return true for known static query guids", () => {
            expect(App.checkForStaticQuery("2650C586-0DE4-4156-BA0E-14BCfb664cca")).to.be.equal(true);
        });
    });

    describe("Return null if trying to open query without qid", () => {
        it("should return null", () => {
            expect(App.createUri("OpenQuery", "http://foo.bar", "fooBarProject", null, null, null)).to.be.null;
        });
    });

    describe("Return a valid uri if opening query with valid qid", () => {
        it("should return uri.length > 0", () => {
            expect(App.createUri("OpenQuery", "http://foo.bar", "fooBarProject", "fooQueryId", null, null).length).to.be.above(0);
        });
    });

    describe("Return null if trying to open items without wid", () => {
        it("should return null", () => {
            expect(App.createUri("OpenItems", "http://foo.bar", "fooBarProject", null, null, null)).to.be.null;
        });
    });

    describe("Return a valid uri if opening items with valid wid", () => {
        it("should return uri.length > 0", () => {
            expect(App.createUri("OpenQuery", "http://foo.bar", "fooBarProject", "fooQueryId", "1,2,3", null).length).to.be.above(0);
        });
    });
}); 
