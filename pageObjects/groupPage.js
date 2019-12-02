var results = [
    '@architect',
    '@logician',
    '@commander',
    '@debater',
    '@advocate',
    '@mediator',
    '@protagonist',
    '@campaigner',
    '@logistician',
    '@defender',
    '@executive',
    '@consul',
    '@virtuoso',
    '@adventurer',
    '@entrepreneur',
    '@entertainer',
]
var personalityCommands = {
    personalityLookup: function (results) {
        browser => {
                personalities
                .waitForElementPresent('@personalityTypes')
                .click('@personalityTypes')
                .waitForElementPresent(`${results}`)
                .click(`${results}`)
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(100)
                .waitForElementPresent('@resultPageTitle')
                .verify.containsText('@resultPageTitle', "Conclusion")
            }
        },
    allAgreeMax: function () {
        this
            .click('@agreeMax1')
            .pause(300)
            .click('@agreeMax2')
            .pause(300)
            .click('@agreeMax3')
            .pause(300)
            .click('@agreeMax4')
            .pause(300)
            .click('@agreeMax5')
            .pause(300)
            .click('@agreeMax6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    next: function () {
        this
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
            .click('@nextArrow')
            .pause(300)
        return this
    },
    allDisagreeMax: function () {
        this
            .click('@disagreeMax1')
            .pause(300)
            .click('@disagreeMax2')
            .pause(300)
            .click('@disagreeMax3')
            .pause(300)
            .click('@disagreeMax4')
            .pause(300)
            .click('@disagreeMax5')
            .pause(300)
            .click('@disagreeMax6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    allNeutral: function () {
        this
            .click('@neutral1')
            .pause(300)
            .click('@neutral2')
            .pause(300)
            .click('@neutral3')
            .pause(300)
            .click('@neutral4')
            .pause(300)
            .click('@neutral5')
            .pause(300)
            .click('@neutral6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    allAgreeMed: function () {
        this
            .click('@agreeMed1')
            .pause(300)
            .click('@agreeMed2')
            .pause(300)
            .click('@agreeMed3')
            .pause(300)
            .click('@agreeMed4')
            .pause(300)
            .click('@agreeMed5')
            .pause(300)
            .click('@agreeMed6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    allDisagreeMed: function () {
        this
            .click('@disagreeMed1')
            .pause(300)
            .click('@disagreeMed2')
            .pause(300)
            .click('@disagreeMed3')
            .pause(300)
            .click('@disagreeMed4')
            .pause(300)
            .click('@disagreeMed5')
            .pause(300)
            .click('@disagreeMed6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    agree3disagree3: function () {
        this
            .click('@agreeMax1')
            .pause(300)
            .click('@agreeMax2')
            .pause(300)
            .click('@agreeMax3')
            .pause(300)
            .click('@disagreeMax4')
            .pause(300)
            .click('@disagreeMax5')
            .pause(300)
            .click('@disagreeMax6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    disagree3agree3: function () {
        this
            .click('@disagreeMax1')
            .pause(300)
            .click('@disagreeMax2')
            .pause(300)
            .click('@disagreeMax3')
            .pause(300)
            .click('@agreeMax4')
            .pause(300)
            .click('@agreeMax5')
            .pause(300)
            .click('@agreeMax6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
    agree123disagree123: function () {
        this
            .click('@agreeMax1')
            .pause(300)
            .click('@agreeMed2')
            .pause(300)
            .click('@agreeMin3')
            .pause(300)
            .click('@disagreeMin4')
            .pause(300)
            .click('@disagreeMed5')
            .pause(300)
            .click('@disagreeMax6')
            .pause(300)
            .click('@nextButton')
            .pause(300)
        return this
    },
}
module.exports = {
    url: 'https://www.16personalities.com/',
    commands: [personalityCommands],
    elements: {
        agreeMax1: {
            selector: '//div[1][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMax2: {
            selector: '//div[2][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMax3: {
            selector: '//div[3][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMax4: {
            selector: '//div[4][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMax5: {
            selector: '//div[5][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMax6: {
            selector: '//div[6][@class="question"]//div[@class="option agree max"]',
            locateStrategy: 'xpath'
        },
        agreeMed1: {
            selector: '//div[1][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMed2: {
            selector: '//div[2][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMed3: {
            selector: '//div[3][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMed4: {
            selector: '//div[4][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMed5: {
            selector: '//div[5][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMed6: {
            selector: '//div[6][@class="question"]//div[@class="option agree med"]',
            locateStrategy: 'xpath'
        },
        agreeMin1: {
            selector: '//div[1][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        agreeMin2: {
            selector: '//div[2][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        agreeMin3: {
            selector: '//div[3][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        agreeMin4: {
            selector: '//div[4][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        agreeMin5: {
            selector: '//div[5][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        agreeMin6: {
            selector: '//div[6][@class="question"]//div[@class="option agree min"]',
            locateStrategy: 'xpath'
        },
        neutral1: {
            selector: '//div[1][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        neutral2: {
            selector: '//div[2][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        neutral3: {
            selector: '//div[3][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        neutral4: {
            selector: '//div[4][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        neutral5: {
            selector: '//div[5][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        neutral6: {
            selector: '//div[6][@class="question"]//div[@class="option neutral"]',
            locateStrategy: 'xpath'
        },
        disagreeMin1: {
            selector: '//div[1][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMin2: {
            selector: '//div[2][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMin3: {
            selector: '//div[3][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMin4: {
            selector: '//div[4][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMin5: {
            selector: '//div[5][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMin6: {
            selector: '//div[6][@class="question"]//div[@class="option disagree min"]',
            locateStrategy: 'xpath'
        },
        disagreeMed1: {
            selector: '//div[1][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMed2: {
            selector: '//div[2][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMed3: {
            selector: '//div[3][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMed4: {
            selector: '//div[4][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMed5: {
            selector: '//div[5][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMed6: {
            selector: '//div[6][@class="question"]//div[@class="option disagree med"]',
            locateStrategy: 'xpath'
        },
        disagreeMax1: {
            selector: '//div[1][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        disagreeMax2: {
            selector: '//div[2][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        disagreeMax3: {
            selector: '//div[3][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        disagreeMax4: {
            selector: '//div[4][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        disagreeMax5: {
            selector: '//div[5][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        disagreeMax6: {
            selector: '//div[6][@class="question"]//div[@class="option disagree max"]',
            locateStrategy: 'xpath'
        },
        articlesAndInsights: {
            selector: '//a[text()="Articles & Insights"]',
            locateStrategy: 'xpath'
        },
        personalGrowth: {
            selector: '(//a[@class="category"])[1]',
            locateStrategy: 'xpath'
        },
        professionalDevelopment: {
            selector: '(//a[@class="category"])[2]',
            locateStrategy: 'xpath'
        },
        personalGrowth: {
            selector: '(//a[@class="category"])[2]',
            locateStrategy: 'xpath'
        },
        coreTheory: {
            selector: '(//a[@class="category"])[3]',
            locateStrategy: 'xpath'
        },
        everydayLife: {
            selector: '(//a[@class="category"])[4]',
            locateStrategy: 'xpath'
        },
        researchAndInsights: {
            selector: '(//a[@class="category"])[5]',
            locateStrategy: 'xpath'
        },
        deepDives: {
            selector: '(//a[@class="category"])[6]',
            locateStrategy: 'xpath'
        },
        personalitiesInLifeAndFiction: {
            selector: '(//a[@class="category"])[7]',
            locateStrategy: 'xpath'
        },
        aLittleFun: {
            selector: '(//a[@class="category"])[8]',
            locateStrategy: 'xpath'
        },
        viewAllArticles: {
            selector: '(//a[@class="with-border"])[3]',
            locateStrategy: 'xpath'
        },
        takeTheTest: {
            // selector: '/html/body/div[1]/main/div[1]/div[2]/a',
            selector: '//main//div[@class="hero"]//a[contains(@class, "btn") and contains(@class, "btn-action")]',
            locateStrategy: 'xpath'
        },
        firstLine: {
            selector: '//div[contains(text(), "You often")]',
            locateStrategy: 'xpath'
        },
        secondLine: {
            selector: '//div[contains(text(), "You have a careful")]',
            locateStrategy: 'xpath'
        },
        thirdLine: {
            selector: '//div[contains(text(), "When in a group")]',
            locateStrategy: 'xpath'
        },
        fourthLine: {
            selector: '//div[contains(text(), "You usually")]',
            locateStrategy: 'xpath'
        },
        fifthLine: {
            selector: '//div[@class="statement"][contains(text(), "You usually prefer")]',
            locateStrategy: 'xpath'
        },
        sixthLine: {
            selector: '//div[contains(text(), "When in a public place,")]',
            locateStrategy: 'xpath'
        },
        seventhLine: {
            selector: '//div[contains(text(), "You often drift away into")]',
            locateStrategy: 'xpath'
        },
        eighthLine: {
            selector: '//div[contains(text(), "You have got detailed education")]',
            locateStrategy: 'xpath'
        },
        ninthLine: {
            selector: '//div[contains(text(), "Your emotions control")]',
            locateStrategy: 'xpath'
        },
        noThanks: {
            selector: '//*[@id="main-app"]/main/modal/div[2]/div[3]/button[2]',
            locateStrategy: 'xpath'
        },
        nextButton: 'button[type="button"]',
        testResult: 'div[class="type-name"]',
        startReading: 'button[class="btn start btn-action"]',
        personalitiesButton: 'img[alt="16Personalities"]',
        youMayKnow: 'span[class="fal fa-angle-right"]',
        nextArrow: 'div[class="fal fa-long-arrow-right"]',
        resultPageTitle: 'article.main.description',
        //below are personality types
        personalityTypes: //'a.xh-highlight',
        {
            //    selector: '//html/body/div[@id="main-app"]/div[@class="navbar"]/nav[@class="middle-section"]/ul/li[1]/a',
            selector: '//*[@id="main-app"]/div/nav/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        architect: 'svg[class="architect"]',
        logician: 'svg[class="logician"]',
        commander: 'svg[class="commander"]',
        debater: 'svg[class="debater"]',
        advocate: 'svg[class="advocate"]',
        mediator: 'svg[class="mediator"]',
        protagonist: 'svg[class="protagonist"]',
        campaigner: 'svg[class="campaigner"]',
        logistician: 'svg[class="logistician"]',
        defender: 'svg[class="defender"]',
        executive: 'svg[class="executive"]',
        consul: 'svg[class="consul"]',
        virtuoso: 'svg[class="virtuoso"]',
        adventurer: 'svg[class="adventurer"]',
        entrepreneur: 'svg[class="entrepreneur"]',
        entertainer: 'svg[class="entertainer"]',
    }
}