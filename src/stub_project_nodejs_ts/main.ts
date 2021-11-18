import * as _ from "lodash";
import * as fse from "fs-extra";

async function main(): Promise<void> {
    _.map(await fse.readdir("."), item => {
        console.info(item);
    });
}

main().catch(err => {
    console.error("UNCAUGHT ERROR:", err?.message ?? err);
    process.exit(1);
});
