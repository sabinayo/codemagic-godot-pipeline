---
title: Centre de téléchargement
description: "Cette page fournit un centre de téléchargement pour tous les fichiers téléchargeables sur ce site."
---

# Centre de téléchargement {#download-center}

<br>

:::warning Attention !!!
**Pour utiliser efficacement les scripts de cette page, veuillez consulter les [tutoriels](#tutorial-table) spécifiques à chaque plateforme d'exportation.**
:::

## Référentiel de tutoriels {#tutorial-table}

| Plateforme        | Lien du tutoriel                                   | Configuration                                                    |
| ----------------- | -------------------------------------------------- | ---------------------------------------------------------------- |
| Android           | [Aller au tutorial](./workflows/android-workflow.md)         | [Aller au récapitulatif](./workflows/android-workflow.md#overview)         |
| iOS               | [Aller au tutorial](./workflows/ios-workflow.md)             | [Aller au récapitulatif](./workflows/ios-workflow.md#overview)             |
| Linux             | [Aller au tutorial](./workflows/linux-workflow.md)           | [Aller au récapitulatif](./workflows/linux-workflow.md#overview)           |
| macOS             | [Aller au tutorial](./workflows/macos-workflow.md)           | [Aller au récapitulatif](./workflows/macos-workflow.md#overview)           |
| Web               | [Aller au tutorial](./workflows/web-workflow.md)             | [Aller au récapitulatif](./workflows/web-workflow.md#overview)             |
| Windows Desktop   | [Aller au tutorial](./workflows/windows-desktop-workflow.md) | [Aller au récapitulatif](./workflows/windows-desktop-workflow.md#overview) |
| Compilation  | [Aller au tutorial](./workflows/compiling.md) | [Aller au récapitulatif](./workflows/compiling.md#script-sample-script) |


## Configuration de flux de travail {#workflow-configuration}

| Fichier | Contenu | Tutoriel |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/fr/workflow-configuration.yaml" download="codemagic.yaml">Télécharger</a> | Configuration de base utilisée dans tous les tutoriels de ce site | [Aller au tutoriel](./workflows/workflow-configuration.md#workflow-configuration) |


## Android

| Fichier    | Contenu                                  | Tutoriels |
| ---------- | ---------------------------------------- | --------- |
| <a href="/codemagic-godot-pipeline/templates/fr/android/android-workflow-auto-debug-signed.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une clé de débogage auto-généré | [Aller au tutoriel](./workflows/android-workflow.md#self-generated-debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/fr/android/android-workflow-debug-signed.yaml" download="codemagic.yaml">Télécharger</a>      | Configuration d'une clé de débogage             | [Aller au tutoriel](./workflows/android-workflow.md#debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/fr/android/android-workflow-release-signed.yaml" download="codemagic.yaml">Télécharger</a>    | Configuration d'une clé de publication           | [Aller au tutoriel](./workflows/android-workflow.md#release-keystore) |
| <a href="/codemagic-godot-pipeline/templates/fr/android/android-workflow.yaml" download="codemagic.yaml">Télécharger</a>                   | Configuration d'une clé de débogage et d'une clé de publication | [Aller au tutoriel](./workflows/android-workflow.md#debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/fr/android/android-workflow-gradle-build.yaml" download="codemagic.yaml">Télécharger</a> | Comfiguration de la compilation Gradle | [Aller au tutoriel](./workflows/android-workflow.md#gradle-builds) |


## iOS

| Fichier | Contenu | Tutoriel |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/fr/ios/ios-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation vers iOS **(non signée)** | [Aller au tutoriel](./workflows/ios-workflow.md#configuration) |
| <a href="/codemagic-godot-pipeline/templates/fr/ios/ios-workflow-signed.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation vers iOS **(signée)** | [Aller au tutoriel](./workflows/ios-workflow.md#credentials) |


## Linux

| Fichier    | Contenu       | Tutoriels                        |
| ---------- | ------------- | -------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/linux/linux-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation vers Linux | [Aller au tutoriel](./workflows/linux-workflow.md) |


## macOS

| Fichier      | Contenu       | Tutoriels        |
| ------------ | ------------- | ---------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/macos/macos-workflow-unsigned.yaml" download="codemagic.yaml">Télécharger</a>     | Configuration d'une exportation macOS non signée. | [Allez au tutoriel](./workflows/macos-workflow.md#configuration) |
| <a href="/codemagic-godot-pipeline/templates/fr/macos/macos-workflow-rcodesign.yaml" download="codemagic.yaml">Télécharger</a>    | Configuration de rcodesign pour une exportation macOS avec Godot. | [Allez au tutoriel](./workflows/macos-workflow.md#configure-rcodesign) |
| <a href="/codemagic-godot-pipeline/templates/fr/macos/macos-workflow-notarization.yaml" download="codemagic.yaml">Télécharger</a> | Configuration de la notarisation pour l'exportation macOS avec Godot . | [Allez au tutoriel](./workflows/macos-workflow.md#configure-notarization) |


## Web

| Fichier   | Contenu        | Tutoriels                        |
| --------- | -------------- | -------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/web/web-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation vers le Web avec Godot | [Aller au tutoriel](./workflows/web-workflow.md) |


## Windows Desktop

| Fichier                      | Contenu                          | Tutoriels                        |
| ---------------------------- | --------------------------------- | -------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/windows/windows-desktop-workflow-unsigned.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation Windows non signée avec Godot | [Aller au tutoriel](./workflows/windows-desktop-workflow.md#minimal-configuration) |
| <a href="/codemagic-godot-pipeline/templates/fr/windows/windows-desktop-workflow-rcedit-config.yaml" download="codemagic.yaml">Télécharger</a> | Configuration de rcedit pour l'exportation Windows avec Godot | [Aller au tutoriel](./workflows/windows-desktop-workflow.md#rcedit-configuration) |
| <a href="/codemagic-godot-pipeline/templates/fr/windows/windows-desktop-workflow-signed.yaml" download="codemagic.yaml">Télécharger</a> | Configuration de la signature de code pour l'exportation Windows avec Godot | [Aller au tutoriel](./workflows/windows-desktop-workflow.md#code-signing) |


## Compilation {#compiling}

| Fichier    | Contenu         | Tutoriel                        |
| ---------- | --------------- | ------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/compiling.yaml" download="codemagic.yaml">Télécharger</a> | Configuration pour la compilation de modèles d'exportation Godot | [Aller au tutoriel](./workflows/compiling.md) |


## Flux tout en un {#all-in-one-workflow}

| Fichier    | Contenu         | Tutoriel                        |
| ---------- | --------------- | ------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/all-in-one-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Combinaison de plusieurs flux de travail pour la compilation et l'exportation avec Godot | [Aller au tutoriel](./workflows/compiling.md) |