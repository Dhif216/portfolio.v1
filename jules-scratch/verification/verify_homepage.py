from playwright.sync_api import Page, expect

def test_homepage_screenshot(page: Page):
    # Navigate to the homepage
    page.goto("http://localhost:3000")

    # Wait for the page to load
    expect(page).to_have_title("React App")

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")
