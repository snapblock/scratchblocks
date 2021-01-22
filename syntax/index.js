const { parse } = require("./syntax")
const { allLanguages, loadLanguages } = require("./blocks.js")
const {
  Label,
  Icon,
  Input,
  Block,
  Comment,
  Glow,
  Script,
  Document,
} = require("./model.js")

module.exports = {
  allLanguages,
  loadLanguages,
  parse,
  Label,
  Icon,
  Input,
  Block,
  Comment,
  Glow,
  Script,
  Document,
}
