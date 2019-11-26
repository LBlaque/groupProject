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
    'Taking a Test': advocate => {
        personalities
        .waitForElementVisible('@takeTheTest')
        .allAgreeMax(advocate)
    }
}