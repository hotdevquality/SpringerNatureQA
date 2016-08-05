package com.link.springer.qa.assessment;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber/report"},
		features = {"src/test/resource"}
		)
public class RunCukesTest {
	

}
