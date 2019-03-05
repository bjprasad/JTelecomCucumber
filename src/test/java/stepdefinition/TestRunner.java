package stepdefinition;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/AddCustomer.feature", glue = { "stepdefinition" }, plugin = {
		"html:target1", "json:src/test/java/json/json.report"}, monochrome = true, dryRun = false, strict = true)

public class TestRunner {

}
