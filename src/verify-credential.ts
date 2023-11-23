import { agent } from './veramo/setup.js'

async function main() {

    const identifier = await agent.didManagerGetByAlias({ alias: 'nas2020.github.io:veridid' })
    //console.log("agent", agent)
    // console.log("identifier", identifier)
    const result = await agent.verifyCredential({
        credential: {
            credentialSubject: {
                name: 'Satoshi Nakamoto',
                age: '44',
            },
            issuer: {
                id: "did:web:nas2020.github.io:veridid",
            },
            type: ['VerifiableCredential'],
            '@context': ['https://www.w3.org/2018/credentials/v1'],
            issuanceDate: "2023-11-15T05:05:24.000Z",
            proof: {
                type: 'JwtProof2020',
                jwt: 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7Im5hbWUiOiJTYXRvc2hpIE5ha2Ftb3RvIiwiYWdlIjoiNDQifX0sIm5iZiI6MTcwMDAyNDcyNCwiaXNzIjoiZGlkOndlYjpuYXMyMDIwLmdpdGh1Yi5pbzp2ZXJpZGlkIn0.nr63xXlgLNtHfz-bdUkSV_QfkZTH7CMoqp-innnGba0qPiu8Z6VDD7d3IJsofUYu-ktoBnimmHtrKFcxuFHVWA',
            },
        },
    })
    console.log("result", result)
    console.log(`Credential verified`, result.verified)
}

main().catch(console.log)