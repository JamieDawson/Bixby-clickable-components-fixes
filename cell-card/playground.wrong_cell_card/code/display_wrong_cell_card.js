module.exports.function = function display_wrong_cell_card () {

  var test = ["This looks clickable, but it's not."];

  var img = ["images/example_pic.png"];

  var all = {
    text: test[0],
    random_pic: {
      url: img[0]
    }
  }
  
  return all
}