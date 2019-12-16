# Incorrect use of Cell-Card

In this example, we are displaying a cell-card that has no `on-click` functionality. This gives the cell-card the illusion that it's a button when it's not.


#### Example in the simulator
![cell-card-sim-wrong](https://user-images.githubusercontent.com/16840579/70951456-4c527e00-2018-11ea-83f6-3c7afdd774d2.png)

#### Example of code in the view.
![cell-card-sim-right](https://user-images.githubusercontent.com/16840579/70951455-4c527e00-2018-11ea-9a22-03e9fc9faa44.png)


#### Solution
Just convert your `cell-card` into a `cell-area` to prevent your Capsule from failing.

![right code](https://user-images.githubusercontent.com/16840579/70951457-4c527e00-2018-11ea-9969-cc0564a14762.png)

#### Update in the Simulator 
![done](https://user-images.githubusercontent.com/16840579/70952539-60e44580-201b-11ea-9e2d-a01b2b273b0c.png)

