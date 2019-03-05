package stepdefinition;

import cucumber.api.java.en.Given;
import objectrepository.HomePage;

public class HomePageSteps {

	@Given("The user is in telecom home pag")
	public void the_user_is_in_telecom_home_pag() {
		Hook.driver.get("http://demo.guru99.com/telecom/index.html");
	}

	@Given("The user navigates to add customer page")
	public void the_user_navigates_to_add_customer_page() {
		HomePage home = new HomePage();
		home.getLnk_addCustomer().click();
	}
}
