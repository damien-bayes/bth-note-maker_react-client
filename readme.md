# Baythium Note Maker

Baythium note maker for all needs

## Getting Started

```bash
# Bring your project from code to your web browser
npm run start
```

### Production

```bash
npm run build
```

## Virtualization (Docker)

```bash 
timestamp=$(date +%s)

docker build . --rm --file dockerfile --tag baythium-ecosystem/baythium-note_client:$timestamp
docker run -d --name baythium-note_client --expose 10091 --net baythium-network-1 -e "VIRTUAL_HOST=note.baythium.com,note.bayesianflow.space" --restart=on-failure:3 baythium-ecosystem/baythium-note_client:$timestamp
```

## References
1. https://github.com/facebook/create-react-app
2. https://github.com/markedjs/marked
3. https://github.com/RIP21/react-simplemde-editor
4. https://dexie.org
5. https://ant.design
6. https://github.com/reduxjs/redux-thunk
7. https://github.com/rafaelmotta/create-react-app-boilerplate
8. https://github.com/dfahlander/Dexie.js/blob/master/samples/react/src/db.js
9. https://golb.hplar.ch/2018/01/IndexedDB-programming-with-Dexie-js.html
10. https://dexie.org/docs/Dexie/Dexie