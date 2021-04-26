const {eq} = require("prosemirror-test-builder")
const ist = require("ist")

const {schema, defaultMarkdownParser, defaultMarkdownSerializer} = require("..")

const {doc, blockquote, h1, h2, p, hr, li, ol, ol3, ul, pre, em, strong, code, a, link, br, img, mark} = require("./build")

function parse(text, doc) {
  ist(defaultMarkdownParser.parse(text), doc, eq)
}

function serialize(doc, text) {
  ist(defaultMarkdownSerializer.serialize(doc), text)
}

function same(text, doc) {
  parse(text, doc)
  serialize(doc, text)
}

describe("markdown with highlight", () => {

    it("parses highlighted text", () =>
    same("Hello. Some ==highlighted== text!",
         doc(p("Hello. Some ", mark("highlighted"), " text!"))))
})
