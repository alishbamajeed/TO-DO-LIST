#!  /usr/bin/env  node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function main() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: [
                chalk.blue('learning typescript'),
                chalk.yellow('learning javascript'),
                chalk.red('stalk  developer'),
                chalk.red('Exit')
            ]
        }
    ]);
    switch (choice) {
        case chalk.blue('Option 1'):
            console.log(chalk.blue('You chose Option 1.'));
            // Implement Option 1 functionality here
            break;
        case chalk.yellow('Option 2'):
            console.log(chalk.yellow('You chose Option 2.'));
            // Implement Option 2 functionality here
            break;
        case chalk.red('Exit'):
            console.log(chalk.red('Goodbye!'));
            process.exit(0);
        default:
            console.log(chalk.red('Invalid choice.'));
            break;
    }
}
main();
