// SafetyIO.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import {Home} from '../integration/PageObjects/Home';
import {PrivacyPolicy} from '../integration/PageObjects/PrivacyPolicy';

const home = new Home();
const privacypolicy = new PrivacyPolicy();

describe('SafetyIO Assignment', () => {

    it('Verify Privacty Policy Section 14', () => {

        home.navigate();
        cy.wait(3000)
        home.clk_menu();
        cy.wait(3000)
        home.clk_privacypolicy();
        privacypolicy.verifysection14();

    })
})