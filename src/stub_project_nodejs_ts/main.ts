
import fse from "fs-extra";
import _ from "lodash";

import {createRequire} from "module";
const require = createRequire(import.meta.url);

const data: Record<string, unknown> = require("../../src/stub_project_nodejs_ts/data.json");

async function main(): Promise<void> {
    try {
        await fse.access(".");
        console.log("GOOD!");
    } catch (err) {
        console.error("this is unexpected !?!", (err as Error)?.message ?? err);
    }
    const items = await fse.readdir(".");
    _.map(items, item => {
        console.info(item);
    });
    console.log(JSON.stringify(data, null, 4));
}

main().catch(err => {
    console.error("UNCAUGHT ERROR:", err?.message ?? err);
    process.exit(1);
});
