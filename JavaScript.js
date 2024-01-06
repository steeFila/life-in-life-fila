<script src="script.js"></script>
</body>
</html>
```

Dans votre fichier JavaScript `script.js` :

```javascript
function changerCouleurFond() {
  var accueil = document.getElementById("accueil");
  accueil.style.backgroundColor = "lightblue";
}

function reinitialiserCouleurFond() {
  var accueil = document.getElementById("accueil");
  accueil.style.backgroundColor = ""; // Réinitialiser la couleur de fond à celle par défaut
}