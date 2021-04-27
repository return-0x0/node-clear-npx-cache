import { execSync } from 'child_process';
import { existsSync, mkdirSync, rmSync } from 'fs';
import path from 'path';

export default function clearCache(): void {
    const npmCacheDirectory = execSync('npm config get cache').toString().trimRight();
    const npxCacheDirectory = path.join(npmCacheDirectory, '_npx');

    if (existsSync(npxCacheDirectory)) rmSync(npxCacheDirectory, {recursive: true});

    mkdirSync(npxCacheDirectory);
}