const prefix = process.env.prefix || ';'
const status = `${prefix}help`;

/* Exporting Settings */
module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || ';',
      token: process.env.token,
      invLink: 'https://discord.gg/nn6R25HFg8',
    },
    options: {
      founders: ['1056336200291581972'],
      privateMode: false,
    },
    presence: {
      name: process.env.statusText || status,
      type: 'STREAMING',
      url: 'https://twitch.tv/what'
    },
    credits: {
      developerId: '1056336200291581972',
      developer: 'shooting star#7702',
      sourceCode: 'https://github.com/no',
      supportServer: 'https://discord.gg/3mUnmaqA3w'
    }
  }
}
