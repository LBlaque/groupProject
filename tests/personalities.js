let personalities = {}
var results = [
    {result: 'architect'},
    {result:'logician'},
    {result:'commander'},
    {result:'debater'},
    {result:'advocate'},
    {result:'mediator'},
    {result:'protagonist'},
    {result:'campaigner'},
    {result:'logistician'},
    {result:'defender'},
    {result:'executive'},
    {result:'consul'},
    {result:'virtuoso'},
    {result:'adventurer'},
    {result:'entrepreneur'},
    {result:'entertainer'},
]
var personalityCommands = require('../pageObjects/groupPage')
module.exports = {
        beforeEach: browser => {
            personalities = browser.page.groupPage()
            personalities
                .navigate()
        },
        after: browser => {
            browser.end()
        },
        'Personality Lookup for All': browser => {
            results.forEach(test => {
                    personalityCommands.commands[0].personalityLookup(personalities, test)
                })
            },
        }