module.exports.function = function display_wrong_image () {

  var test = ["This image is clickable. It should not be"];

  var img = ["images/example_pic.png"];

  var all = {
    text: test[0],
    random_pic: {
      url: img[0]
    }
  }
  
  return all
}