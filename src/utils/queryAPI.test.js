import queryAPI from './queryAPI.utils' 

test('queryAPI exists', (done) => {
    return queryAPI('react', 'relevant', 'any').then(data => {
        expect(data).toBeDefined()
        expect(data.hits.length).toBeLessThanOrEqual(20)
        done()
    })
})

test('filtering by story returns only stories', done => {
    return queryAPI('react', 'relevant', 'story').then(data => {
        data.hits.forEach(hit => {
            expect(hit._tags).toContain('story')
        })
        done()
    })
})

test('filtering by comment returns only comments', done => {
    return queryAPI('react', 'relevant', 'comment').then(data => {
        data.hits.forEach(hit => {
            expect(hit._tags).toContain('comment')
        })
        done()
    })
})

test('filtering by poll returns only polls', done => {
    return queryAPI('react', 'relevant', 'poll').then(data => {
        data.hits.forEach(hit => {
            expect(hit._tags).toContain('poll')
        })
        done()
    })
})