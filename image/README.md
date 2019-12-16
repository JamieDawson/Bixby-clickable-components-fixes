# Image Component

In this repo we have two examples of the wrong way and correct way to use an image in a view file. Inside the [wrong-image](https://github.com/JamieDawson/Bixby-clickable-components-fixes/tree/master/image/wrong_image) repo, if you run the training `Show me an image`, the image that appears will flash when you click on it. 

![image_wrong](https://user-images.githubusercontent.com/16840579/70947998-59b73a80-200f-11ea-8df2-ae8fb34af3ab.png)

### Example of incorrect code being used:
![image_wrong_code](https://user-images.githubusercontent.com/16840579/70949196-0db9c500-2012-11ea-9a0c-986abd09e973.png)

To solve this, all we do is use the example code in [right-image](https://github.com/JamieDawson/Bixby-clickable-components-fixes/tree/master/image/right_image) repo and add `lightbox-enabled(false)` to your code.

### Solution:
![image_right_code](https://user-images.githubusercontent.com/16840579/70949192-0c889800-2012-11ea-8d27-ed06af41f73d.png)

