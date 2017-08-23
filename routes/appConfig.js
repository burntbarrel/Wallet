const appConfig = {
  config: {
    edexGuiOnly: true,
    iguanaGuiOnly: false,
    manualIguanaStart: false,
    skipBasiliskNetworkCheck: true,
    minNotaries: 8,
    host: '127.0.0.1',
    agamaPort: 17777,
    iguanaCorePort: 7778,
    maxDescriptors: {
      darwin: 90000,
      linux: 1000000,
    },
    killIguanaOnStart: true,
    dev: false,
    v2: true,
    useBasiliskInstance: true,
    debug: false,
    cli: {
      passthru: true,
      default: true,
    },
    iguanaLessMode: true,
    roundValues: false,
  },
  schema: {
    edexGuiOnly: {
      display: false,
      type: 'boolean',
      displayName: 'EDEX GUI only',
    },
    iguanaGuiOnly: {
      display: false,
      type: 'boolean',
      displayName: 'Iguana GUI only',
    },
    manualIguanaStart: {
      display: false,
      type: 'boolean',
      displayName: 'Manual Iguana Start',
    },
    skipBasiliskNetworkCheck: {
      display: false,
      type: 'boolean',
      displayName: 'Skip Basilisk Network Check',
    },
    minNotaries: {
      display: false,
      type: 'number',
      displayName: 'Minimum notaries count',
      info: 'Minimum number of notaries to connect to on startup',
    },
    host: {
      display: true,
      type: 'string',
      displayName: 'Hostname',
      info: 'Application hostname',
    },
    agamaPort: {
      display: true,
      type: 'number',
      displayName: 'Agama Port',
      info: 'Agama HTTP port. Required to run GUI.',
    },
    iguanaCorePort: {
      display: true,
      type: 'number',
      displayName: 'Iguana Core Port',
      info: 'Default Iguana Core Port. Change it if you have conflicts with other applications.',
    },
    maxDescriptors: {
      display: false,
      displayName: 'Max Descriptors per Process',
      darwin: {
        display: true,
        displayName: 'MacOS (Darwin)',
        type: 'number',
      },
      linux: {
        display: true,
        displayName: 'Linux',
        type: 'number',
      },
    },
    killIguanaOnStart: {
      display: true,
      displayName: 'Kill Iguana Core Processes on Startup',
      info: 'Kill any rogue Iguana Core processes during app startup',
      type: 'boolean',
    },
    dev: {
      display: true,
      displayName: 'Developer mode',
      info: 'Enable developer mode.',
      type: 'boolean',
    },
    v2: {
      display: false,
      type: 'boolean',
    },
    useBasiliskInstance: {
      display: true,
      displayName: 'Iguana Core Basilisk Instance',
      info: 'Enable dedicated Iguana Core instance to handle all Basilisk network requests',
      type: 'boolean',
    },
    debug: {
      display: true,
      displayName: 'Debug',
      info: 'Enable debug output',
      type: 'boolean',
    },
    cli: {
      display: true,
      displayName: 'Direct BitcoinRPC passthru interface',
      info: 'Enable direct BitcoinRPC passthru interface. It will bypass Iguana Core and send requests directly to Bitcoin JSON server.',
      passthru: {
        display: true,
        displayName: 'Enable Direct Passthru',
        type: 'boolean',
      },
      default: {
        display: true,
        displayName: 'Enable CLI passthru',
        info: 'Enable komodo-cli passthru. This allows you to send CLI compatible commands directly from UI to komodo-cli.',
        type: 'boolean',
      },
    },
    iguanaLessMode: {
      display: true,
      displayName: 'Enable Native Only mode',
      info: 'Limited to only Komodo native mode to speed up loading and reduce hardware resources consumption.',
      type: 'boolean',
    },
    roundValues: {
      display: true,
      displayName: 'Enable amount rounding',
      info: 'Round \"dust\" amounts to save screen space.',
      type: 'boolean',
    },
  }
};

module.exports = appConfig;