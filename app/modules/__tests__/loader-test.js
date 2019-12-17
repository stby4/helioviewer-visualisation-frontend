import { timelineData } from '../loader'

test('Fake test', () => {
    const result = timelineData(Date.now, Date.now)
    expect(result).toBe(true)
})
