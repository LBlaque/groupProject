var personalityCommands = {
    personalityLookup: function (browser, data) {
            this
            browser
                .waitForElementPresent('@personalityTypes')
                .click('@personalityTypes')
                .waitForElementPresent(`svg[class="${data.result}"]`)
                .click(`svg[class="${data.result}"`)
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@nextArrow')
                .click('@nextArrow')
                .pause(150)
                .waitForElementPresent('@resultPageTitle')
                .verify.containsText('@resultPageTitle', "Conclusion")
            return this
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
    artAndIns: function () {
        this
        .click('@articlesAndInsights')
        .waitForElementPresent('section')
        .click('@personalGrowth')
        .verify.containsText('div[class="selection"]', "Personal Growth")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@professionalDevelopment')
        .verify.containsText('div[class="selection"]', "Professional Development")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@coreTheory')
        .verify.containsText('div[class="selection"]', "Core Theory")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@everdayLife')
        .verify.containsText('div[class="selection"]', "Everyday Life")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@researchAndInsights')
        .verify.containsText('div[class="selection"]', "Research and Insights")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@deepDives')
        .verify.containsText('div[class="selection"]', "Deep Dives")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@personalitiesInLifeAndFiction')
        .verify.containsText('div[class="selection"]', "Personalities in Life and Fiction")
        .click('@articlesAndInsights')
        .waitForElementPresent('div[class="title"]')
        .click('@aLittleFun')
        .verify.containsText('div[class="selection"]', "A Little Fun")
        .click('@articlesAndInsights')
        .pause(1000)
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
        //Articles and Insights
        articlesAndInsights: {
            selector: '//*[@id="main-app"]/div/nav/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        personalGrowth: {
            selector: '//*[@id="main-app"]/main/section/a[1]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        professionalDevelopment: {
            selector: '//*[@id="main-app"]/main/section/a[2]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        coreTheory: {
            selector: '//*[@id="main-app"]/main/section/a[3]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        everdayLife: {
            selector: '//*[@id="main-app"]/main/section/a[4]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        researchAndInsights: {
            selector: '//*[@id="main-app"]/main/section/a[5]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        deepDives: {
            selector: '//*[@id="main-app"]/main/section/a[6]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        personalitiesInLifeAndFiction: {
            selector: '//*[@id="main-app"]/main/section/a[7]/div[2]/div[1]',
            locateStrategy: 'xpath'
        },
        aLittleFun: {
            selector: '//*[@id="main-app"]/main/section/a[8]/div[2]/div[1]',
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
        personalityTypes: {
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