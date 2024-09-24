import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('~test-Username');
    }

    get inputPassword() {
        return $('~test-Password');
    }

    get btnSubmit() {
        return $('~test-LOGIN');
    }

    get toastElement() {
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
    }

    // dashboard elements 
    get productsContent() {
        return $('~test-PRODUCTS');
    }

    get cartIcon() {
        return $('~test-Cart');
    }
    /**
     * a method helps to set username and password to respective fields
     */
    async enterCredentials(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    /**
     * When want to add button click event for submit button
     */
    async clickLogin() {
        await this.btnSubmit.click();
    }

    /**
     * check if username field is displayed and clear it's value
     */

    async clearUsername() {
        if (await this.inputUsername.isDisplayed()) {
            await this.inputUsername.clearValue();
        }
    }

    /**
    * check if password field is displayed and clear it's value
    */

    async clearPassword() {
        if (await this.inputPassword.isDisplayed()) {
            await this.inputPassword.clearValue();
        }
    }

    /**
     * call this method if explicitely want to clear values for username and password field
     */
    async clearAll() {
        await this.clearUsername();
        await this.clearPassword();
    }

    /**
     * With the help of this method check if any element is disaplyed on 
     * dashboard which means dashboard screen is visible after successful
     * login
     */

    async canSeeDashboardAfterLogin() {
        //wait for dashboard to load
        await browser.waitUntil(async () => {
            return await this.productsContent.isDisplayed();
        }, {
            timeout: 5000, // timeout in milliseconds
            timeoutMsg: 'Expected element not found after login'
        });

        //check any element from dashboard 
        const productsContentRes = await this.productsContent.isDisplayed();
        const cartIconRes = await this.cartIcon.isDisplayed();

        if (productsContentRes || cartIconRes) {
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

}

const loginPage = new LoginPage();
export default loginPage;
