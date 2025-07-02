const { execSync } = require('child_process');

function getCurrentBranch() {
    try {
        return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    } catch (error) {
        console.warn('⚠️ Could not determine git branch, falling back to NODE_ENV');
        return null;
    }
}

const envPath = getCurrentBranch() === 'dev' ? '.env.dev' : '.env';
console.log(`🔧 Loading environment from: ${envPath === '.env.dev' ? 'development' : 'production'}`);

module.exports = {
    envPath,
};