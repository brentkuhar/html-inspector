describe("validation", function() {

  var validation = HTMLInspector.modules.validation

  it("can determine if an element is a valid HTML element", function() {
    expect(validation.isElementValid("p")).toBe(true)
    expect(validation.isElementValid("time")).toBe(true)
    expect(validation.isElementValid("bogus")).toBe(false)
    expect(validation.isElementValid("hgroup")).toBe(false)
  })

  it("can determine if an element is obsolete", function() {
    expect(validation.isElementObsolete("p")).toBe(false)
    expect(validation.isElementObsolete("bogus")).toBe(false)
    expect(validation.isElementObsolete("hgroup")).toBe(true)
    expect(validation.isElementObsolete("blink")).toBe(true)
    expect(validation.isElementObsolete("center")).toBe(true)
  })

  it("can determine if an attribute is allowed on an element", function() {
    expect(validation.isAttributeValidForElement("href", "a")).toBe(true)
    expect(validation.isAttributeValidForElement("aria-foobar", "nav")).toBe(true)
    expect(validation.isAttributeValidForElement("data-stuff", "section")).toBe(true)
    expect(validation.isAttributeValidForElement("href", "button")).toBe(false)
    expect(validation.isAttributeValidForElement("placeholder", "select")).toBe(false)
  })

  it("can determine if an attribute is obsolute for an element", function() {
    expect(validation.isAttributeObsoleteForElement("align", "div")).toBe(true)
    expect(validation.isAttributeObsoleteForElement("bgcolor", "body")).toBe(true)
    expect(validation.isAttributeObsoleteForElement("border", "img")).toBe(true)
    expect(validation.isAttributeObsoleteForElement("href", "div")).toBe(false)
    expect(validation.isAttributeObsoleteForElement("charset", "meta")).toBe(false)
  })

  it("can determine if an attribute is required for an element", function() {
    expect(validation.isAttributeRequiredForElement("src", "img")).toBe(true)
    expect(validation.isAttributeRequiredForElement("alt", "img")).toBe(true)
    expect(validation.isAttributeRequiredForElement("action", "form")).toBe(true)
    expect(validation.isAttributeRequiredForElement("rows", "textarea")).toBe(true)
    expect(validation.isAttributeRequiredForElement("cols", "textarea")).toBe(true)
    expect(validation.isAttributeRequiredForElement("id", "div")).toBe(false)
    expect(validation.isAttributeRequiredForElement("target", "a")).toBe(false)
  })

  it("can get a list of required attribute given an element", function() {
    expect(validation.getRequiredAttributesForElement("img")).toEqual(["alt", "src"])
    expect(validation.getRequiredAttributesForElement("optgroup")).toEqual(["label"])
    expect(validation.getRequiredAttributesForElement("form")).toEqual(["action"])
    expect(validation.getRequiredAttributesForElement("div")).toEqual([])
  })


})