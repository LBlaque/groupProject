let personalities = {}
module.exports = {
    beforeEach: browser => {
        personalities = browser.page.groupPage()
        personalities
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    'Taking a Test': browser => {
        personalities
            .click('@takeTheTest')
            .allAgreeMax()
        personalities.expect.element('@firstLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@secondLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@thirdLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@fourthLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@fifthLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@sixthLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@seventhLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@eighthLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('@ninthLine').to.be.visible
        personalities
            .allAgreeMax()
        personalities.expect.element('.type-name').text.to.equal('Advocate')
        personalities.expect.element('.type-code').text.to.equal('INFJ-T')
        personalities
            .click('@startReading')
        personalities.expect.element('@noThanks').to.be.visible
        personalities
            .click('@noThanks')
            .pause(3000)
    }
}