#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..');
const targetDir = process.cwd();

// Arquivos e pastas do repositório que não devem ser copiados para o projeto destino
const ignoreList = [
    'node_modules',
    '.git',
    'bin',
    'package.json',
    'package-lock.json',
    'README.md',
    '.env',
    '.DS_Store',
    'Thumbs.db'
];

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }
    
    const items = fs.readdirSync(from);
    for (const element of items) {
        if (ignoreList.includes(element)) continue;

        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);
        const stat = fs.lstatSync(fromPath);

        if (stat.isFile()) {
            fs.copyFileSync(fromPath, toPath);
            console.log(`  📄 Copiado: ${path.relative(sourceDir, fromPath)}`);
        } else if (stat.isDirectory()) {
            copyFolderSync(fromPath, toPath);
        }
    }
}

console.log('🚀 Inicializando template Antigravity Workspace (.agents)...');
try {
    copyFolderSync(sourceDir, targetDir);
    console.log('\n✅ Pronto! Seu ambiente Antigravity está configurado com sucesso.');
    console.log('📂 Estrutura instalada:');
    console.log('   ├── .agents/ (rules, skills, workflows, agent, memory)');
    console.log('   ├── docs/ (guias, workflows e documentação)');
    console.log('   ├── AGENTS.md');
    console.log('   ├── .env.example');
    console.log('   └── .gitignore');
} catch (err) {
    console.error('❌ Erro durante a instalação:', err.message);
    process.exit(1);
}
