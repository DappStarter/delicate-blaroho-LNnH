require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain eternal gesture nature sure tell'; 
let testAccounts = [
"0x7be3a703d60107def684df17c34464043f2e993309ad2199f3deab8dd30e0836",
"0x94f1bc073b19c9e7df09f4ead68084e7dfa583d2427532f61b79f566cb2fd7a5",
"0x1a6fd4dc2d110fff67975f803ad5e859fec36d01da09362a8bf9e7b016c7f16d",
"0x00acbee0c2346abad01a7f501764af8ad82e35c772b356d377d9045cd25fd009",
"0x284d2cc9cd88cb0eeacfa9633f9850497ee99ea3a6929358acb014b6b5be1740",
"0xcf24af274d3a16f9761b77a5bbb1cde31cea2f63cbd1517cb711fd72b5abb4e3",
"0xf27a4d8504d06449a43bdd10f070ca283ee38a822f1886362e5817b52fa9e8cf",
"0x4362c6917eaf2a2e9449f9597c0a617eb64ae5e6d6a0deb70af60a85b2983145",
"0x252516cc8cb8acc347802d63ef2e3317a49c4d058c519a5fde22908607ec0270",
"0x576a82861ddecd859efeba945b7d72fa199fd02490493d1b88d55601197a74ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

