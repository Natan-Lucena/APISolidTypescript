import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const id = uuid();
    const password = await hash("admin", 10);

    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) VALUES ('${id}', 'admin' ,'admin@ufc.br', '${password}', true, 'now()', 'XXX123456')`,
    );
    await connection.close();
}

create().then(() => console.log("User admin created"));
