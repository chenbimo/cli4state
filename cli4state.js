import process from 'node:process';
import colors from './picocolors.js';

const isUnicodeSupported = () => {
    if (process.platform !== 'win32') {
        return process.env.TERM !== 'linux';
    }

    return Boolean(process.env.WT_SESSION) || Boolean(process.env.TERMINUS_SUBLIME) || process.env.ConEmuTask === '{cmd::Cmder}' || process.env.TERM_PROGRAM === 'Terminus-Sublime' || process.env.TERM_PROGRAM === 'vscode' || process.env.TERM === 'xterm-256color' || process.env.TERM === 'alacritty' || process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';
};

const main = {
    info: colors.blue('ℹ'),
    success: colors.green('✔'),
    warning: colors.yellow('⚠'),
    error: colors.red('✖')
};

const fallback = {
    info: colors.blue('i'),
    success: colors.green('√'),
    warning: colors.yellow('‼'),
    error: colors.red('×')
};

export const cli4state = isUnicodeSupported() ? main : fallback;
