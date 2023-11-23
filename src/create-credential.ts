import { agent } from './veramo/setup.js'

async function main() {
    const identifier = await agent.didManagerGetByAlias({ alias: 'nas2020.github.io:veridid' })

    const verifiableCredential = await agent.createVerifiableCredential({
        credential: {
            issuer: { id: identifier.did },
            credentialSubject: {
                name: 'Satoshi Nakamoto',
                age: '44',
            },
        },
        proofFormat: 'jwt',
    })
    console.log(`New credential created`)
    console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)