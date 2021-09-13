import 'should'

import getRelativeURL from '../src/index'

describe('when passing a WHATWG URL', () => {
  it('should return relative path including query params and hash', (done) => {
    const url = new URL('/test?test=test#test', 'http://tempuri.org')
    const relative = getRelativeURL(url)
    relative.should.equal('/test?test=test#test')
    done()
  })
})
