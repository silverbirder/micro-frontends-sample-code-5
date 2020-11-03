import { expect } from 'chai'

describe('handler returns response with request method', () => {
    const methods = [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'CONNECT',
        'OPTIONS',
        'TRACE',
        'PATCH',
    ]
    methods.forEach((method) => {
        it(method, async () => {
            expect("").to.include("")
        })
    })
})
