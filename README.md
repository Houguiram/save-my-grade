# Save My Grade

### Installation
 * S'assurer d'avoir [npm](https://www.npmjs.com/) et un [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
 * Cloner ce dépôt.
 
### Utilisation
 * Ce projet utilise [SBT](http://www.scala-sbt.org/) ainsi que des scripts pour y associer la partie frontend contenue dans le dossier `/ui`. Les commandes possibles sont les suivantes :
 ```
     sbt clean           # Clean existing build artifacts
 
     sbt stage           # Build your application from your project’s source directory
 
     sbt run             # Run both backend and frontend builds in watch mode
 
     sbt dist            # Build both backend and frontend sources into a single distribution artifact
 
     sbt test            # Run both backend and frontend unit tests
 ```
 * Les commandes les plus utiles :
```
    sbt run  ==> Lance le back et le front en local en mode dev pour voir les changements en direct
    sbt test ==> Lance les tests unitaires front et back
```
* Pour modifier les fichiers de style:
     1. Lancer `npm run scss` depuis le dossier `/ui`
     2. Faire les changements de style dans le dossier `/ui/src/styles/scss`

### Sources
Structure du code très inspirée de [Java Play React Seed](https://github.com/yohangz/java-play-react-seed).
