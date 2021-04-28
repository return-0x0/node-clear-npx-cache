import { execSync } from 'child_process';
import { existsSync, mkdirSync, rmSync, readdirSync, readFileSync } from 'fs';
import path from 'path';

export default function clearCache(): void {
    const npmCacheDirectory = execSync('npm config get cache').toString().trimRight();
    const npxCacheDirectory = path.join(npmCacheDirectory, '_npx');

    if (existsSync(npxCacheDirectory)) {
        for (const subdirectoryName of readdirSync(npxCacheDirectory)) {
            if (subdirectoryName === '066c52483104548d') continue;

            const subdirectory = path.join(npxCacheDirectory, subdirectoryName);
            const package_json = JSON.parse(readFileSync(path.join(subdirectory, 'package.json')).toString());
            
            if (package_json.name === 'clear-npx-cache') continue;

            rmSync(subdirectory, {recursive: true});
        }
    }
    else
        mkdirSync(npxCacheDirectory);
}