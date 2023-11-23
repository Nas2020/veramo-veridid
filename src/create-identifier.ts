import { agent } from './veramo/setup.js'

async function main() {
  const identifier = await agent.didManagerCreate({
    provider: 'did:web',
    alias: 'nas2020.github.io:veridid',
    options: {
      domain: 'nas2020.github.io'
    }
  })

  const didDocument = {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": identifier.did,
    "verificationMethod": [
      {
        "id": identifier.did + "#controllerKeyId",
        "type": "Secp256k1VerificationKey2018",
        "controller": identifier.did,
        "publicKeyHex": identifier.keys[0].publicKeyHex
      }
    ],
    "authentication": [
      identifier.did + "#controllerKeyId"
    ],
    "assertionMethod": [
      identifier.did + "#controllerKeyId"
    ],
    "services": [] // Add any services if required
  }

  console.log(`New identifier created`)
  console.log(JSON.stringify(didDocument, null, 2))
}

main().catch(console.log)
