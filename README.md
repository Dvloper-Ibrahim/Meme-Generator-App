# Meme Generator App

### In this app I used the following :

- `Event listeners` : for tracking the input fields and the generating button.
- `uswState()` : to control the data, save it, and change it depending on the user interactions.
- `useEffect()` : to handle side effectsin my app.

## How to interact with the app

1. When the app is rendered on the page, `React.useEffect()` function will call an external api which contains some meme images and the alter the `allMemes` array state with images.
2. After that you can press the button `Get a new meme image`, then the app will get a random image and show it on the page.
3. Then you can input some appropriate text in `Top Text`and `Bottom Text` fields to show them on the image.

The app is **responsivly designed**, so enjoy checking it out whatever the device you use : [Meme Generator]()

## Available Scripts

In the project directory, you can run :

### Run the local server

You can run in your terminal this command :

```
$ npm run dev
```

The app will run in the development mode.\
Then open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes in code then save it.

### Build the app

You can run in your terminal this command :

```
npm run build
```

By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.
