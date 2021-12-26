import {createRequire} from "node:module";

import fse from "fs-extra";
import _ from "lodash";

const require = createRequire(import.meta.url);

/* eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires */
const data: Record<string, unknown> = require("../../src/stub_project_nodejs_ts/data.json");

async function main(): Promise<void> {
    try {
        await fse.access(".");
        console.log("GOOD!");
    } catch (error: unknown) {
        console.error(
            "this is unexpected !?!",
            (error as Error)?.message ?? error,
        );
    }

    const items = await fse.readdir(".");
    _.map(items, (item) => {
        console.info(item);
    });
    console.log(JSON.stringify(data, null, 4));
}

main().catch((error) => {
    console.error("UNCAUGHT ERROR:", error?.message ?? error);
    /* eslint-disable-next-line node/prefer-global/process, unicorn/no-process-exit */
    process.exit(1);
});
