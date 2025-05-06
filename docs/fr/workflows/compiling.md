---
title: Compilation
description: "Cette page fournit un exemple simple d'utilisation de Codemagic pour compiler l'éditeur Godot ou des modèles d'exportation pour Godot."
---

# Compilation {#compiling}

<br>

Cette page fournit un exemple simple d'utilisation de Codemagic pour compiler des modèles d'exportation pour Godot. Cet exemple peut également servir à compiler l'éditeur de Godot. Nous n'aborderons ni les règles d'écriture, ni la composition ou encore le fonctionnement d'un fichier `codemagic.yaml`.

- Pour apprendre comment fonctionnent les fichiers `codemagic.yaml`, consultez [Créer un fichier codemagic.yaml](https://docs.codemagic.io/partials/quickstart/create-yaml-intro/).

<img src="../../images/workflows/codemagic-blog-header-Xcode-12-deprecation.png" alt="Flux de travail pour la compilation de Godot ou de ses modèles d'exportation avec Codemagic." style="border-radius: 16px;">

Image par Codemagic, utilisée sous licence [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/). Voir [galerie](https://codemagic.io/gallery/)


## Exigences {#requirements}

Pour mieux comprendre ce dont traite cette page, veuillez consulter les articles suivants:
- [Obtenir le code source de Godot](https://docs.godotengine.org/fr/stable/contributing/development/compiling/getting_source.html)
- [Introduction au système de compilation](https://docs.godotengine.org/fr/stable/contributing/development/compiling/introduction_to_the_buildsystem.html)
- [Compiler avec une clée de cryptage](https://docs.godotengine.org/fr/latest/contributing/development/compiling/compiling_with_script_encryption_key.html)
- [Exporter un projet vers Android](https://docs.godotengine.org/fr/stable/tutorials/export/exporting_for_android.html).
- [Compiler pour Android](https://docs.godotengine.org/fr/latest/contributing/development/compiling/compiling_for_android.html#doc-compiling-for-android)

<br>

[Les SDK Android](https://developer.android.com/studio), [Python](https://www.python.org/), [Gradle](https://gradle.org/), [Java](https://www.oracle.com/java/technologies/java-se-glance.html) et bien d'autres outils nécessaires à la compilation de Godot et/ou de ses modèles d'exportation sont déjà installés sur toutes les machines de Codemagic. Tout outil ou logiciel requis pour la compilation sera automatiquement téléchargé et installé sur la machine de compilation.

- Consultez la liste complète des outils et logiciels installés sur les machines de compilation dans [Intégrations](https://codemagic.io/integrations/).
- Consultez également la liste des autres outils installés sur la machine que nous utiliserons tout au long du tutoriel dans [Autres outils pré-installés sur machine MacOS](https://docs.codemagic.io/specs-macos/xcode-16-2/#other-pre-installed-tools)


## Exemple de script {#sample-script}

**Godot v4.4.1-stable**:

```yaml
workflows:
  compilation-modeles-exportation-android:
    name: Compilation des modèles d'exportation Android
    max_build_duration: 120
    instance_type: mac_mini_m2
    working_directory: /Users/builder/Downloads

    environment:
      vars:
        BRANCHE_GODOT: 4.4.1-stable
        DOSSIER_COLLECTE_FICHIERS: /Users/builder/Downloads/templates

    scripts:
      - name: Configuration
        script: |
          mkdir -p $DOSSIER_COLLECTE_FICHIERS
          
          git clone https://github.com/godotengine/godot.git -b $BRANCHE_GODOT
          export DOSSIER_CODE_SOURCE=$(pwd)/godot
          echo "DOSSIER_COMPILATION=$DOSSIER_CODE_SOURCE" >> $CM_ENV
          echo "DOSSIER_RESULTATS_COMPILATION=$DOSSIER_CODE_SOURCE/bin" >> $CM_ENV
          echo "ANDROID_HOME=$ANDROID_SDK_ROOT" >> $CM_ENV
          
          pip install scons
          cd $DOSSIER_CODE_SOURCE
          scons platform=list
        
      - name: Compilation
        script: |
          cd $DOSSIER_COMPILATION
          export SCRIPT_AES256_ENCRYPTION_KEY="aeb1bc56aaf580cc31784e9c41551e9ed976ecba10d315db591e749f3f64890f"
          scons platform=android target=template_release arch=arm32
          scons platform=android target=template_release arch=arm64
          scons platform=android target=template_release arch=x86_32
          scons platform=android target=template_release arch=x86_64 generate_apk=yes
      
      - name: Collecte des fichiers
        script: zip -r $DOSSIER_COLLECTE_FICHIERS/export_templates.zip $DOSSIER_RESULTATS_COMPILATION
    
    artifacts:
      - $DOSSIER_COLLECTE_FICHIERS/*.zip
```

<br>

**Explications**

Ce script clone d'abord le code source de Godot pour la `BRANCHE_GODOT` donnée et installe [scons](https://scons.org/) pour compiler les modèles d'exportation.  
Il affiche ensuite toutes les plateformes disponibles pour lesquelles `scons` peut compiler sur la machine de compilation (`scons platform=list`).  
Enfin, le script compile les modèles d'exportation Android en utilisant une clé de cryptage pour toutes les plateformes Android.  
Une fois la compilation réussie, vous pourrez télécharger les modèles d'exportation sous forme de fichier zip.

Voici une description des variables utilisées :

| Nom de la variable            | Description |
| ----------------------------- | ----------- |
| BRANCHE_GODOT                 | La branche Git de Godot à cloner pour la compilation |
| DOSSIER_COLLECTE_FICHIERS     | Le dossier dans lequel sera stocké le zip conten/ant les modèles d'exportation |
| DOSSIER_CODE_SOURCE           | Le dossier dans lequel se trouve le code source de Godot |
| DOSSIER_COMPILATION           | Le dossier utilisé pour lancer la compilation(identique à `DOSSIER_CODE_SOURCE`) |
| DOSSIER_RESULTATS_COMPILATION | Le dossier dans lequel les modèles compilés seront stockés après la compilation |
| SCRIPT_AES256_ENCRYPTION_KEY  | La clé de cryptage AES-256 qui sera stockée dans les modèles d'exportation. |


Vous pouvez mainten/ant <a href="/codemagic-godot-pipeline/templates/fr/compiling.yaml" download="codemagic.yaml">Télécharger le fichier de configuration</a>.

:::warning Attention !!!
Pour utiliser efficacement ce script, consultez ses [Exigences](#requirements).  
Ce script est basé sur une configuration spécifique et peut ne pas correspondre à votre configuration.
:::

## Obtenir de l'aide et de l'assistance {#getting-help-and-support}

Si vous avez une question technique ou si vous avez besoin d'aide pour résoudre un problème particulier, vous pouvez obtenir de l'aide dans la [discussion de communauté GitHub](https://github.com/sabinayo/codemagic-godot-pipeline/discussions).
