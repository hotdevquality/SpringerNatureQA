$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("blankspaceSearchTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Timothy Hassan"
    }
  ],
  "line": 2,
  "name": "Resource Search Functionality Test",
  "description": "",
  "id": "resource-search-functionality-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on link.springer.com",
  "keyword": "Given "
});
formatter.match({
  "location": "BlankspaceSearchStep.launchLinkSpringer()"
});
formatter.result({
  "duration": 12050435418,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "To search with two blank spaces",
  "description": "",
  "id": "resource-search-functionality-test;to-search-with-two-blank-spaces",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I type two blank spaces and press return key",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I the total result is equal total resource",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "BlankspaceSearchStep.inputTwoBlankSpaces()"
});
formatter.result({
  "duration": 222323860,
  "status": "passed"
});
formatter.match({
  "location": "BlankspaceSearchStep.i_the_total_result_is_equal_total_resource()"
});
formatter.result({
  "duration": 3706038739,
  "status": "passed"
});
formatter.match({
  "location": "BlankspaceSearchStep.quitBrowser()"
});
formatter.result({
  "duration": 924555926,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on link.springer.com",
  "keyword": "Given "
});
formatter.match({
  "location": "BlankspaceSearchStep.launchLinkSpringer()"
});
formatter.result({
  "duration": 11237282827,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To search with a asterisk",
  "description": "",
  "id": "resource-search-functionality-test;to-search-with-a-asterisk",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I type a with asterisk symbol and press return key",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify error message display",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "BlankspaceSearchStep.inputAwithAsteriskSymbol()"
});
formatter.result({
  "duration": 244393735,
  "status": "passed"
});
formatter.match({
  "location": "BlankspaceSearchStep.verifyErrorMessageDisplay()"
});
formatter.result({
  "duration": 7455493016,
  "status": "passed"
});
formatter.match({
  "location": "BlankspaceSearchStep.quitBrowser()"
});
formatter.result({
  "duration": 754050308,
  "status": "passed"
});
});