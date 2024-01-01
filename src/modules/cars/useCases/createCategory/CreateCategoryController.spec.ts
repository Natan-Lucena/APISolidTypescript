/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";

import { app } from "../../../../shared/infra/http/app";

describe("create category controller", () => {
    it("test", async () => {
        await request(app).get("/cars/available").expect(201);
    });
});
