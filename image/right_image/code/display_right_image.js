module.exports.function = function display_right_image () {

  var test = ["This image is no longer clickable because we used lightbox-enabled (false)"];

  var img = ["images/example_pic.png"];

  var all = {
    text: test[0],
    random_pic: {
      url: img[0]
    }
  }
  
  return all
}