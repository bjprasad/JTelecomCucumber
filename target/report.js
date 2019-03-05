$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddCustomer.feature");
formatter.feature({
  "name": "To test the add customer functionlaity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test the submit button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is in telecom home pag",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.x()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_navigates_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the form details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "testf",
        "testl",
        "test4@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testxf",
        "testxl",
        "test1@gmail.com",
        "chennai",
        "223456789"
      ]
    },
    {
      "cells": [
        "testyf",
        "testyl",
        "test2@gmail.com",
        "chennai",
        "323456789"
      ]
    },
    {
      "cells": [
        "testzf",
        "testzl",
        "test3@gmail.com",
        "chennai",
        "423456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_form_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_submits_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The customer should see the customer id generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_customer_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/AddtariffPlan.feature");
formatter.feature({
  "name": "To test add tariff plan functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add multiple tariff plan",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fill the plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLoc\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreesms\u003e\",\"\u003cLocCharges\u003e\",\"\u003cIntCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user submits the add tariff plan form",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLoc",
        "FreeInt",
        "Freesms",
        "LocCharges",
        "IntCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
      ]
    },
    {
      "cells": [
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
      ]
    },
    {
      "cells": [
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "1000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add multiple tariff plan",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the plan details \"100\", \"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.the_user_fill_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the add tariff plan form",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_submits_the_add_tariff_plan_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple tariff plan",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the plan details \"200\", \"300\",\"400\",\"500\",\"600\",\"700\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.the_user_fill_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the add tariff plan form",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_submits_the_add_tariff_plan_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple tariff plan",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the plan details \"300\", \"400\",\"500\",\"600\",\"700\",\"800\",\"900\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.the_user_fill_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the add tariff plan form",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_submits_the_add_tariff_plan_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple tariff plan",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the plan details \"400\", \"500\",\"600\",\"700\",\"800\",\"900\",\"1000\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.the_user_fill_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the add tariff plan form",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_submits_the_add_tariff_plan_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
});