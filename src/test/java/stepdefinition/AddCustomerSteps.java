package stepdefinition;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import objectrepository.AddCustomerPage;

public class AddCustomerSteps {
	@When("The user fill in the form details")
	public void the_user_fill_in_the_form_details(DataTable custDetails) {
		List<Map<String, String>> custDetailsMaps = custDetails.asMaps(String.class, String.class);
		AddCustomerPage customer = new AddCustomerPage();
		customer.getRdo_done().click();
		customer.getTxt_fname().sendKeys(custDetailsMaps.get(0).get("fname"));
		customer.getTxt_lname().sendKeys(custDetailsMaps.get(0).get("lname"));
		customer.getTxt_email().sendKeys(custDetailsMaps.get(0).get("email"));
		customer.getTxt_phnum().sendKeys(custDetailsMaps.get(0).get("phnum"));
		customer.getTxt_adress().sendKeys(custDetailsMaps.get(0).get("adress"));
	}

	@When("The user submits the form")
	public void the_user_submits_the_form() {
		AddCustomerPage customer = new AddCustomerPage();
		customer.getBtn_submit().click();
	}
}
