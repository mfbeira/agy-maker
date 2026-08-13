#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..');
const targetDir = process.cwd();

// Don't copy node_modules or .git or bin itself
const ignoreList = ['node_modules', '.git', 'bin', 'package.json', 'package-lock.json', 'README.md'];

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
    
    fs.readdirSync(from).forEach(element => {
        if (ignoreList.includes(element)) return;

        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);

        if (fs.lstatSync(fromPath).isFile()) {
            fs.copyFileSync(fromPath, toPath);
            console.log(`Copiado: ${element}`);
        } else if (fs.lstatSync(fromPath).isDirectory()) {
            copyFolderSync(fromPath, toPath);
        }
    });
}

console.log('🚀 Inicializando Template Antigravity IDE...');
copyFolderSync(sourceDir, targetDir);
console.log('✅ Pronto! O seu ambiente de Vibe Coding está configurado para o Antigravity.');
