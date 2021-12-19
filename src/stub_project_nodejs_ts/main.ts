
import fse from "fs-extra";

import _ from "lodash";

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
}

main().catch(err => {
    console.error("UNCAUGHT ERROR:", err?.message ?? err);
    process.exit(1);
});
