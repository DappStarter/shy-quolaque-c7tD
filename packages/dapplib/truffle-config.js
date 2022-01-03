require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure title finger renew magic concert gown light army gas'; 
let testAccounts = [
"0x724ad64724c4ee4384094980825148a0b3d68069ee8f773be83571525c317ee0",
"0xf91fc9e74e2569b8a30924fd5c37b4d6a2e08668a12f726f0b5228a49981aaa9",
"0xef230aba853b63533a345927d458ec516d4104bfd77f9da0d7ff40e8babc9c60",
"0xbf4116d6d399467108218c36e9cdd7884c2ea701ef3ccfb8cc2896155b4e2d30",
"0x974ebb5f3d62531b6703fbd0384decd510d4c53cd7451201c0b03b0c04127f16",
"0x9d210118d41efdd822be329a4696f0fb0643d986f6678a6410b953221c5661e8",
"0xa103e0783c45556d2caf9ea891c4c2f195019ebc8ffeef9cd43375bc398ee33f",
"0x75bae66bcf88df4df5b5cc848c523d2a454dc7e0f3fbaceeb6f8433954ecfd06",
"0x4e9b8d1a0ba1fd95ba54965dc20607940162c5a984561df3b5e61c41a47a95c5",
"0xf393459b0ef056492fde7f5fb10d8681fd72dcb2b2d87a7c18fe6d2cd3a73282"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


