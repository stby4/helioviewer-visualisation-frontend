import loader from '../loader'


test('Fake test', () => {
    const result = loader(Date.now, Date.now)
    expect(result).toBe(true)
})
