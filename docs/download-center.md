---
title: Download Center
description: "This page provides a download center for all files downloadable from this site."
---

# Download center

<br>

:::warning Caution!!!
**To use the scripts on this page effectively, please consult the [tutorials](#tutorial-table) specific to each export platform.**
:::


## Tutorial table

| Platform         | Tutorial Link                                  | Configuration                                           |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------- |
| Android          | [Jump to tutorial](./workflows/android-workflow.md)         | [Overview](./workflows/android-workflow.md#overview)         |
| iOS              | [Jump to tutorial](./workflows/ios-workflow.md)             | [Overview](./workflows/ios-workflow.md#overview)             |
| Linux            | [Jump to tutorial](./workflows/linux-workflow.md)           | [Overview](./workflows/linux-workflow.md#overview)           |
| macOS            | [Jump to tutorial](./workflows/macos-workflow.md)           | [Overview](./workflows/macos-workflow.md#overview)           |
| Web              | [Jump to tutorial](./workflows/web-workflow.md)             | [Overview](./workflows/web-workflow.md#overview)             |
| Windows Desktop  | [Jump to tutorial](./workflows/windows-desktop-workflow.md) | [Overview](./workflows/windows-desktop-workflow.md#overview) |
| Compiling  | [Jump to tutorial](./workflows/compiling.md) | [Overview](./workflows/compiling) |


## Workflow Configuration

| File    | Content | Tutorial |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/en/workflow-configuration.yaml" download="codemagic.yaml">Donwload</a> | Basic configuration used in all tutorials on this site | [Jump to tutorial](./workflows/workflow-configuration.md#workflow-configuration) |


## Android

| File      | Content     | Tutorials |
| --------- | ----------- | --------- |
| <a href="/codemagic-godot-pipeline/templates/en/android/android-workflow-auto-debug-signed.yaml" download="codemagic.yaml">Download</a> | Self generated debug keystore configuration | [See tutorial](./workflows/android-workflow.md#self-generated-debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/en/android/android-workflow-debug-signed.yaml" download="codemagic.yaml">Download</a>      | Debug keystore configuration  | [See tutorial](./workflows/android-workflow.md#debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/en/android/android-workflow-release-signed.yaml" download="codemagic.yaml">Download</a>    | Release keystore configuration           | [See tutorial](./workflows/android-workflow.md#release-keystore) |
| <a href="/codemagic-godot-pipeline/templates/en/android/android-workflow.yaml" download="codemagic.yaml">Download</a>                   | Debug and Release keystore configuration | [See tutorial](./workflows/android-workflow.md#debug-keystore) |
| <a href="/codemagic-godot-pipeline/templates/en/android/android-workflow-gradle-build.yaml" download="codemagic.yaml">Download</a> | Gradle Android build configuration | [See tutorial](./workflows/android-workflow.md#gradle-builds) |


## iOS

| File    | Content | Tutorial |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/en/ios/ios-workflow.yaml" download="codemagic.yaml">Download</a> | Unsigned Godot iOS Export Configuration | [Jump to tutorial](./workflows/ios-workflow.md#configuration) |
| <a href="/codemagic-godot-pipeline/templates/en/ios/ios-workflow-signed.yaml" download="codemagic.yaml">Download</a> | Signed Godot iOS Export Configuration | [Jump to tutorial](./workflows/ios-workflow.md#credentials) |


## Linux

| File | Content | Tutorial |
| ---- | ------- | -------- |
| <a href="./codemagic-godot-pipeline/templates/en/linux/linux-workflow.yaml" download="codemagic.yaml">Download</a> | Godot Linux Export Configuration | [Jump to tutorial](#linux-workflow) |


## Web

| File | Content | Tutorial |
| ---- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/en/web/web-workflow.yaml" download="codemagic.yaml">Download</a> | Godot Web Export Configuration | [Jump to tutorial](./workflows/web-workflow.md#web-workflow) |


## macOS

| File               | Content              | Tutorials        |
| ------------------ | -------------------- | ---------------- |
| <a href="/codemagic-godot-pipeline/templates/en/macos/macos-workflow-unsigned.yaml" download="codemagic.yaml">Download</a>     | Unsigned macOS export with your build. | [Jump to tutorial](./workflows/macos-workflow.md#configuration) |
| <a href="/codemagic-godot-pipeline/templates/en/macos/macos-workflow-rcodesign.yaml" download="codemagic.yaml">Download</a>    | rcodesign Configuration for Godot macOS Export | [Jump to tutorial](./workflows/macos-workflow.md#configure-rcodesign) |
| <a href="/codemagic-godot-pipeline/templates/en/macos/macos-workflow-notarization.yaml" download="codemagic.yaml">Download</a> | Notarization Configuration for Godot macOS Export | [Jump to tutorial](./workflows/macos-workflow.md#configure-notarization) |


## Windows Desktop

| File                  | Content          | Tutorials          |
| --------------------- | ---------------- | ------------------ |
| <a href="/codemagic-godot-pipeline/templates/en/windows/windows-desktop-workflow-simple-export.yaml" download="codemagic.yaml">Download</a> | Unsigned Godot Windows Export Configuration | [Jump to tutorial](./workflows/windows-desktop-workflow.md#minimal-configuration) |
| <a href="/codemagic-godot-pipeline/templates/en/windows/windows-desktop-workflow-rcedit-config.yaml" download="codemagic.yaml">Download</a>   | rcedit Configuration for Godot Windows Export  | [Jump to tutorial](./workflows/windows-desktop-workflow.md#rcedit-configuration)   |
| <a href="/codemagic-godot-pipeline/templates/en/windows/windows-desktop-workflow-signed.yaml" download="codemagic.yaml">Download</a>   | Code Signing Configuration for Godot Windows Export | [Jump to tutorial](./workflows/windows-desktop-workflow.md#code-signing)   |


## Compiling

| File       | Content         | Tutorial                        |
| ---------- | --------------- | ------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/en/compiling.yaml" download="codemagic.yaml">Download</a> | Configuration for compiling Godot export templates | [Jump to turorial](./workflows/compiling.md) |


## All in on workflow

| File       | Content         | Tutorial                        |
| ---------- | --------------- | ------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/en/all-in-one-workflow.yaml" download="codemagic.yaml">Download</a> | Combining multiple workflows for building and exporting with Godot | [Jump to turorial](./workflows/compiling.md) |