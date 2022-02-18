# AlcanciaFrontEnd
To run the web app use
```ionic serve```

Ways to run it with Capacitor (Native)
- iOS with XCode
```ionic capacitor run ios --livereload --external```
- iOS Localhost
```ionic capacitor run ios --livereload-url=http://localhost:8100```

- Android
```ionic capacitor run android```
- Andorid 
```ionic capacitor run android -l --external```

## Firebase Deploy

Change environment
```firebase use stage```
```firebase use production```

Add new project
```firebase use --add```

Firebase Deploy
```firebase deploy```

```firebase deploy -P staging # deploy to staging alias```