package com.nit.SpringGitProject;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class AppTest extends TestCase {
	/**
	 * Create the test case
	 *
	 * @param testName name of the test case
	 */
	public AppTest(String testName) {
		super(testName);
	}

	/**
	 * @return the suite of tests being tested
	 */
	public static Test suite() {
		return new TestSuite(AppTest.class);
	}

	public void test1() {

		App app = new App();
		assertEquals(30, app.sum(10, 20));

	}

	public void test2() {

		App app = new App();
		assertEquals(0, app.sum(0, 0));

	}
}
