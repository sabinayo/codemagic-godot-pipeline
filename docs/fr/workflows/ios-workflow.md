---
title: Flux de travail iOS
description: "Cette page présente un cas d'utilisation de Codemagic pour l'exportation d'un projet Godot vers iOS"
---

# Flux de travail iOS {#ios-workflow}

<br>

Cette page présente un cas d'utilisation de Codemagic pour l'exportation d'un projet Godot vers iOS. Nous n'aborderons ni les règles d'écriture, ni la composition ou encore le fonctionnement d'un fichier `codemagic.yaml`.

- Vous pouvez sauter le tutoriel et récupérer le fichier de configuration dans [Récapitulatif](#overview)
- Apprenez en plus sur ce qu'est un fichier `codemagic.yaml`avec [Utilisation d'un fichier codemagic.yaml](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/)
- Apprennez à configurer votre projet Godot et votre dépôt dans [Vue d'ensemble du processus](../process-overview.md).

<img src="../../images/workflows/godot-codemagic-ios-workflow.png" alt="Flux de travail pour l'exportation d'un projet Godot vers iOS avec Codemagic." style="border-radius: 16px;">

Image par Codemagic, utilisée sous licence [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/). Voir [galerie](https://codemagic.io/gallery/)


## Exigences {#requirements}

- Un éditeur de texte
- Le fichier de configuration des flux de travail. (Voir [Configuration des flux de travail](./workflow-configuration.md))

L'exportation d'un projet Godot vers iOS nécessite des outils supplémentaires. Certains de ces outils, tels qu'[XCode](https://developer.apple.com/xcode/) sont pré-installés sur la machine de compilation que nous utiliserons (Apple Silicon M2 Mac mini).

- Consultez la liste complète des outils et logiciels installés sur les machines de Codemagic dans [Intégrations](https://codemagic.io/integrations/).
- Consultez également la liste des autres outils installés sur la machine que nous utiliserons tout au long des tutoriels dans [Outils pré-installés sur machine MacOS](https://docs.codemagic.io/specs-macos/xcode-16-2/#other-pre-installed-tools)

Comme expliqué dans [Configuration du projet](../process-overview.md#project-configuration), vous devez configurer votre projet pour l'exportation comme si vous souhaitiez faire une exportation sur votre machine locale.
- Consultez le [Guide d'exportation iOS](https://docs.godotengine.org/fr/stable/tutorials/export/exporting_for_ios.html) afin de configurer votre projet Godot pour l'exportation vers iOS.


## Configuration

Nous devons créer un nouveau flux de travail dans lequel nous définirons des variables qui lui sont propres. Ajoutez le code suivant à votre fichier `codemagic.yaml`, juste après la section `definitions` :

```yaml
workflows:
  flux-godot-ios:
    name: Exportation pour iOS
    max_build_duration: 120
    instance_type: mac_mini_m2
    working_directory: /Users/builder/Downloads
    
    environment:
      xcode: latest
      vars:
        <<: *variables_godot
        FICHIER_DE_SORTIE: test.ipa
        NOM_DU_PREREGLAGE: iOS
```

Assurez-vous que votre fichier ressemble mainten/ant à ceci :

```yaml
definitions: ...

workflows: # [!code ++]
  flux-godot-ios: ... # [!code ++]
```

<br>

Vous souvenez-vous de notre [fichier de configuration de flux](./workflow-configuration.md#configuration-de-base) ? Nous utilisons les opérateurs `<<` et `*` pour réutiliser ses sections.  

- Pour en savoir plus sur les sections réutilisables dans un fichier `codemagic.yaml` consultez [Réutilisation de sections](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/#reusing-sections)

- Consultez l'ensemble des variables réutilisées dans [Configuration de base](./workflow-configuration.md#configuration-de-base)

Voici une description des variables que nous avons définies :

| Variable           | Description
| ------------------ | --------------------------------------------------------------------------- |
| FICHIER_DE_SORTIE  | Le nom du fichier exporté. Format : `<NOM_PROJET>.<EXTENSION>`. L'extension du fichier de sortie doit correspondre à celle utilisée par le processus d'exportation de Godot. Voir [Exporter à partir de la ligne de commande](https://docs.godotengine.org/fr/latest/tutorials/export/exporting_projects.html#exporting-from-the-command-line) |
| NOM_DU_PREREGLAGE | Le nom du préréglage d'exportation qui sera utilisé pour exporter votre projet. |

- Apprenez-en plus sur les variables d'environnement dans un fichier `codemagic.yaml` avec [Configuration de variables d'environnement](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/)

<br>

Nous devons mainten/ant compléter notre fichier de configuration. Dans la section `flux-godot-ios`, ajoutez le code suivant :

```yaml
scripts:
  - *installation_godot
  - *installation_modeles_exportation
  - *exportation_projet
  - *collecte_fichiers

artifacts:
  - *recuperation_exportation
```

Assurez-vous alors que votre flux ressemble mainten/ant à ceci :

```yaml
flux-godot-ios:
  ...
  environment: ...
  scripts: ... # [!code ++]
  artifacts: ... # [!code ++]
```

Et voilà, il ne nous reste plus qu'à configurer vos identifiants pour exporter votre projet. Si vous ne comptez pas signer votre projet exporté, vous pouvez simplement lancer la compilation. Votre projet sera téléchargeable au format `zip` une fois le processus terminé.
Pour lancer une nouvelle compilation, vous pouvez utiliser l'interface de Codemagic, ou des évènements affectant votre dépôt tels que les push.

- Consultez [Exécution automatique](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/) pour automatiser l'exécution de votre configuration Codemagic.
- Consultez également [Notifications d'exécution](https://docs.codemagic.io/yaml-notification/email/) pour obtenir une notification vous informant du résultat de l'exécution de votre configuration Codemagic.


## Identifiants {#credentials}

Avant de continuer, assurez-vous de configurer les certificats Xcode et/ou les profils comme expliqué dans [Signature d'application iOS](https://docs.codemagic.io/yaml-code-signing/signing-ios/). Voir aussi [Ajouter un fichier de Provisioning](https://docs.codemagic.io/partials/quickstart/code-signing-ios-add-provisioning-profile/) pour ajouter un fichier de provisioning à Codemagic.

Les variables suivantes seront utilisées pour récupérer les informations d'identification que Godot ne stocke pas dans le fichier `export_presets.cfg`. Consultez les [Variables d'environnement iOS](https://docs.godotengine.org/fr/stable/tutorials/export/exporting_for_ios.html#environment-variables) pour plus d'informations sur certaines des variables utilisées. Consultez aussi [EditorExportPlatfomIOS](https://docs.godotengine.org/fr/latest/classes/class_editorexportplatformios.html)

:::tip
Il n'est pas nécessaire de définir toutes ces variables.  
Utilisez uniquement celles qui correspondent à la configuration de votre projet.
:::

| Nom de la variable                             |	Valeur de la variable                      | Group             |
| ---------------------------------------------- | ------------------------------------------- | ----------------- |
| GODOT_IOS_PROVISIONING_PROFILE_UUID_DEBUG  	 | L'UUID du profil de provisioning de débogage. [Aller à la documentation](https://docs.godotengine.org/fr/latest/classes/class_editorexportplatformios.html#class-editorexportplatformios-property-application-provisioning-profile-uuid-debug). | identifiants_apple |
| GODOT_IOS_PROVISIONING_PROFILE_UUID_RELEASE	 | L'UUID du profil de provisioning de publication. [Aller à la documentation](https://docs.godotengine.org/fr/latest/classes/class_editorexportplatformios.html#class-editorexportplatformios-property-application-provisioning-profile-uuid-release). | identifiants_apple |


Ajoutez ces variables avec l'interface de Codemagic (soit en tant que variables d'application, soit en tant que variables d'équipe), en veillant à cliquer sur `Secure` pour que ces données sensibles soient cryptées.
- Apprenez à stocker ces variables à l'aide de l'interface de Codemagic en regardant cette vidéo :

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe width="897" height="504" src="https://www.youtube.com/embed/7pAxVFe66hI?start=37" title="Environment variables and groups with codemagic.yaml" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-
origin-when-cross-origin" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;" allowfullscreen></iframe>
</div>

- Apprenez-en plus sur les variables d'environnement dans Codemagic avec [Configuration de variables d'environnement](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/)
- Apprenez à stocker des fichiers dans des variables d'environnement avec [Stockage de fichiers binaires](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/#storing-binary-files)
- Si vous n'avez pas de PC, vous pouvez utiliser un site internet comme [base64.guru](https://base64.guru/converter/encode/text) ou [base64encode](https://www.base64encode.org/) pour encoder vos fichiers.  

<br>

Pour utiliser les variables définies dans l'interface de Codemagic, nous devons ajouter leur groupe de variable (`identifiants_apple`) à notre fichier de configuration (le fichier `codemagic.yaml`).  
Pour ajouter le groupe de variables à notre flux de travail, localisez la section `envrironment` à l'intérieur de `flux-godot-ios`, et ajoutez la section suivante :

```yaml
groups:
  - identifiants_apple
```

Assurez-vous alors que votre flux de travail ressemble mainten/ant à ceci :

```yaml
flux-godot-ios:
  ...
  environment:
    groups: # [!code ++]
      - identifiants_apple # [!code ++]
    ...
```

<br>

Et voilà ! il ne nous reste plus qu'à lancer une nouvelle compilation(`build`) pour exporter votre projet. Vous pouvez pour ce faire, utiliser l'interface de Codemagic, ou des évènements affectant votre dépôt tels que les push.

Il se pourrait que vous obteniez une erreur comme [xcode-select points at wrong SDK location](https://docs.godotengine.org/fr/stable/tutorials/export/exporting_for_ios.html#xcode-select-points-at-wrong-sdk-location).
Dans ce cas, dans la section `scripts` de votre `flux-godot-ios`, juste avant la section `exportation_projet`, ajoutez la section suivante :

```yaml
- name: Configuration xcode-select
  script: sudo xcode-select -switch /Applications/Xcode.app
```

Assurez-vous que votre section `scripts` ressemble mainten/ant à ceci :

```yaml
scripts:
  ...
  - *installation_modeles_exportation
  - name: Configuration xcode-select # [!code ++]
    script: sudo xcode-select -switch /Applications/Xcode.app # [!code ++]
  - *exportation_projet ...
```

- Consultez [Exécution automatique](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/) pour automatiser l'exécution de votre configuration Codemagic.
- Consultez également [Notifications d'exécution](https://docs.codemagic.io/yaml-notification/email/) pour obtenir une notification vous informant du résultat de l'exécution de votre configuration Codemagic.


## Récapitulatif {#overview}

Voici un résumé de ce que nous avons couvert sur cette page :
- Exportation d'un projet Godot pour iOS en utilisant une machine de compilation de Codemagic

<h3>Tableau de téléchargement</h3>

| Fichier | Contenu | Tutoriel |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/fr/ios/ios-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation non signée vers iOS | [Aller au tutoriel](#configuration) |
| <a href="/codemagic-godot-pipeline/templates/fr/ios/ios-workflow-signed.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation signée vers iOS | [Aller au tutoriel](#credentials) |

:::warning Attention !!!
Pour utiliser efficacement ce script, consultez son [tutoriel](#ios-workflow).  
Les scripts de ce site sont généraux et s'adapteront à la plupart des cas d'utilisation. Néanmoins, des ajustements spécifiques à votre projet peuvent s'avérer nécessaires.  
Certaines variables d'environnement doivent être définies à l'aide de l'interface de Codemagic, comme expliqué dans ce [Identifiants](#credentials).
:::

Ressources optionnelles pour vous aider à affiner votre configuration :
- [Mise en cache](https://docs.codemagic.io/knowledge-codemagic/caching/)
- [Exécution automatique](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/)
- [Notifications d'exécution](https://docs.codemagic.io/yaml-notification/email/)
- [Déploiements](https://docs.codemagic.io/yaml-publishing/google-play/)
- [Utilisation de modèles d'exportation personnalisés](./using-custom-export-templates.md)

<img src="/images/builds/ios-build.png" alt="Résultat de l'exportation d'un projet Godot vers iOS à l'aide de Codemagic." style="border-radius: 16px;">


## Obtenir de l'aide et de l'assistance {#getting-help-and-support}

Si vous avez une question technique ou si vous avez besoin d'aide pour résoudre un problème particulier, vous pouvez obtenir de l'aide dans la [discussion de communauté GitHub](https://github.com/sabinayo/codemagic-godot-pipeline/discussions).