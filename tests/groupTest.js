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
            // .expect.elementVisible('//div[contains(text(), "You often")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "You have a careful")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "When in a group")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "You usually")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "You usually prefer")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "When in a public place,")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "You often drift away into")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "You have got detailed education")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[contains(text(), "Your emotions control")]')
            // personalities
            .allAgreeMax()
            //     .expect.elementVisible('//div[text()="Advocate"]')
            //     advocate.expect.elementVisible('//div[text()="INFJ-t"]')
            .pause(3000)
    }
}