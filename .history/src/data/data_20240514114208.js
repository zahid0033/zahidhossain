const skillsData = [
  {
    skillName: "React",
    percentage: "80%",
  },
  {
    skillName: "Node",
    percentage: "70%",
  },
  {
    skillName: "Laravel",
    percentage: "60%",
  },
  {
    skillName: "Docker",
    percentage: "50%",
  },
  {
    skillName: "HTML",
    percentage: "95%",
  },
  {
    skillName: "CSS",
    percentage: "90%",
  },

  {
    skillName: "React",
    percentage: "80%",
  },
];

const croTools = [
  {
    title: "Abtasty",
    logo: "https://www.abtasty.com/wp-content/uploads/2024/01/cropped-logo-abtasty-green.png",
  },
  {
    title: "Qubit",
    logo: "https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg",
  },
  {
    title: "VWO",
    logo: "https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg",
  },
  {
    title: "Dynamic Yield",
    logo: "https://ww1.prweb.com/prfiles/2018/06/12/15690859/dynamic_yield.png",
  },
  {
    title: "Optimizely",
    logo: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTYyIDM4IiB3aWR0aD0iMTUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtbGFiZWw9IkJhY2sgdG8gaG9tZXBhZ2UiPjx0aXRsZT5PcHRpbWl6ZWx5IExvZ288L3RpdGxlPjxwYXRoIGQ9Im0xMi44MzU5IDIwLjQ1NTZ2NC40ODVjMy40MjIxLS4wMDQgNi43MDI5LTEuMzIzNSA5LjEyMjctMy42NjkxczMuNzgxLTUuNTI1NyAzLjc4NTItOC44NDI4aC00LjYyN2MtLjAwMjcgMi4xMjgtLjg3NjEgNC4xNjgyLTIuNDI4NCA1LjY3MjktMS41NTI0IDEuNTA0OC0zLjY1NzEgMi4zNTEzLTUuODUyNSAyLjM1NHoiIGZpbGw9IiMzYmUwODEiPjwvcGF0aD48cGF0aCBkPSJtMTIuODM0NiAzMi44MDk5Yy0yLjE3OTYgMC00LjI2OTg5LS44MzkzLTUuODExMDgtMi4zMzMyLTEuNTQxMi0xLjQ5MzktMi40MDcwMy0zLjUyMDEtMi40MDcwMy01LjYzMjggMC0yLjExMjguODY1ODMtNC4xMzg5IDIuNDA3MDMtNS42MzI5IDEuNTQxMTktMS40OTM5IDMuNjMxNDgtMi4zMzMyIDUuODExMDgtMi4zMzMydi00LjQ1MmMtMS42ODMxLS4wMDIzLTMuMzUwMTEuMzE2Ny00LjkwNTk3LjkzODktMS41NTU4Ni42MjIxLTIuOTcwMDcgMS41MzUzLTQuMTYxODcgMi42ODcycy0yLjEzNzg2IDIuNTIwMi0yLjc4NDE1OSA0LjAyNjVjLS42NDYzIDEuNTA2NC0uOTgwMTgzNTUgMy4xMjE0LS45ODI1ODc5MiA0Ljc1MjhzLjMyNjcxNzkyIDMuMjQ3My45Njg1NzQ5MiA0Ljc1NTVjLjY0MTg2MiAxLjUwODEgMS41ODM4ODIgMi44Nzg5IDIuNzcyMjgyIDQuMDM0MiAxLjE4ODQgMS4xNTUyIDIuNTk5OTEgMi4wNzIzIDQuMTUzOTMgMi42OTg3IDEuNTU0MDIuNjI2NSAzLjIyMDEuOTUwMiA0LjkwMzIuOTUyNWguMDM2NnoiIGZpbGw9IiMwMDM3ZmYiPjwvcGF0aD48cGF0aCBkPSJtMTIuODM1OSAzMi44MXY0LjQ1MmMzLjM5OTEgMCA2LjY1OS0xLjMwODggOS4wNjI1LTMuNjM4NnMzLjc1MzgtNS40ODk3IDMuNzUzOC04Ljc4NDVoLTQuNTk4MWMtLjAwMTQgMi4xMTI3LS44Njc1IDQuMTM4Ny0yLjQwODMgNS42MzMxLTEuNTQwNyAxLjQ5NDQtMy42MzAyIDIuMzM1My01LjgwOTkgMi4zMzh6IiBmaWxsPSIjMGNmIj48L3BhdGg+PHBhdGggZD0ibTEyLjgzNTkgNy45NzExdjQuNDUyYzMuMzk5MSAwIDYuNjU5LTEuMzA4OCA5LjA2MjUtMy42Mzg2MSAyLjQwMzUtMi4zMjk3OSAzLjc1MzgtNS40ODk2NyAzLjc1MzgtOC43ODQ0OWgtNC41OTgxYy0uMDAxNCAyLjExMjc4LS44Njc1IDQuMTM4NzEtMi40MDgzIDUuNjMzMTQtMS41NDA3IDEuNDk0NDQtMy42MzAyIDIuMzM1MjctNS44MDk5IDIuMzM3OTZ6IiBmaWxsPSIjODYxZGZmIj48L3BhdGg+PHBhdGggZD0ibTI1LjcyNjYgNy45NzExdjQuNDUyYzMuMzk5MSAwIDYuNjU4OS0xLjMwODggOS4wNjI0LTMuNjM4NjEgMi40MDM2LTIuMzI5NzkgMy43NTM4LTUuNDg5NjcgMy43NTM4LTguNzg0NDloLTQuNTk1NWMtLjAwMTQgMi4xMTMyMS0uODY3OSA0LjEzOTUzLTIuNDA5MiA1LjYzNDA0LTEuNTQxMyAxLjQ5NDUtMy42MzE0IDIuMzM1MDQtNS44MTE1IDIuMzM3MDZ6IiBmaWxsPSIjZmY4MTEwIj48L3BhdGg+PGcgZmlsbD0iIzAwMCI+PHBhdGggZD0ibTU5Ljk0NTMgMTguNjAxNmgyLjM2NzFsLjU1NzEgMS4yMTE5Yy4yOTU4LS4yNjI0LjYyMzQtLjQ4ODguOTc1Ni0uNjc0NC4zNjctLjE4MjEuNzQ4My0uMzM1NSAxLjE0MDQtLjQ1ODkuNDg2NC0uMTQ4Ny45OTQtLjIyMTUgMS41MDQtLjIxNTUuNzg3OS0uMDA0NCAxLjU2NzUuMTU1NiAyLjI4Ni40NjkuNzIwNy4zMTE3IDEuMzY5Mi43NjA5IDEuOTA2NyAxLjMyMDkuNTU4OS41ODcyIDEuMDAyMSAxLjI2ODYgMS4zMDc4IDIuMDEwNi42NDcyIDEuNjMyLjY0NzIgMy40Mzg2IDAgNS4wNzA2LS4zMDUuNzQyMy0uNzQ4MyAxLjQyMzgtMS4zMDc4IDIuMDEwNi0uNTM3Ni41NjA1LTEuMTg2MSAxLjAxMDYtMS45MDY3IDEuMzIzNC0uNzE3OS4zMTI3LTEuNDk2NC40NzM1LTIuMjgzNC40NzE2LS40NzYzLjAwODctLjk1MS0uMDU0Ni0xLjQwNzItLjE4NzYtLjM1ODMtLjExMDctLjcwOC0uMjQ2My0xLjA0NjItLjQwNTctLjMyMTUtLjE3MjMtLjYyMDktLjM4MDgtLjg5MTktLjYyMTF2NS4zOTc3aC0zLjIwMTV6bTYuMTI1NyA5LjU4MWMuNDI1NS4wMDk3Ljg0ODUtLjA2NjkgMS4yNDE3LS4yMjUuMzkzMi0uMTU4Ljc0OC0uMzk0IDEuMDQxNy0uNjkyOC42MTU1LS42MTE4LjkyMjQtMS40MzA3LjkyMDYtMi40NTY3LjAyMjItLjQ0ODItLjA0NzctLjg5NjItLjIwNTgtMS4zMTgtLjE1OC0uNDIxOC0uNDAxLS44MDg4LS43MTQ4LTEuMTM4Ny0uMjk5NS0uMjkwNC0uNjU1MS0uNTIwOC0xLjA0NjQtLjY3NzktLjM5MTQtLjE1NzItLjgxMDgtLjIzODEtMS4yMzQ0LS4yMzgxcy0uODQzMS4wODA5LTEuMjM0NC4yMzgxYy0uMzkxMy4xNTcxLS43NDY5LjM4NzUtMS4wNDY0LjY3NzktLjYxMi42MTM1LS45MTgxIDEuNDMyNC0uOTE4MSAyLjQ1NjdzLjMwNjEgMS44NDMyLjkxODEgMi40NTY3Yy4yOTM2LjI5ODguNjQ4NS41MzQ4IDEuMDQxNy42OTI4LjM5MzIuMTU4MS44MTYxLjIzNDcgMS4yNDE3LjIyNXoiPjwvcGF0aD48cGF0aCBkPSJtODAuMTM0MSAzMS4xNTI0Yy0uNTk1OC4wMDY5LTEuMTg3NC0uMDk4MS0xLjc0Mi0uMzA5My0uNTE4Mi0uMjAwOC0uOTg0My0uNTA5OS0xLjM2NTMtLjkwNTEtLjM4NzctLjQwNzktLjY4OTctLjg4NDktLjg4OTMtMS40MDQ2LS4yMjI5LS41ODc1LS4zMzItMS4yMDk4LS4zMjE3LTEuODM1NnYtNS4yNjM0aC0xLjk0ODZ2LTIuNTYzMmguODM0NGMxLjAyMTggMCAxLjUzMjctLjQ5NTIgMS41MzI3LTEuNDg1N3YtMS43NDY4aDIuNzg1NnYyLjk3MTRoMi43ODI5djIuODMyaC0yLjc4Mjl2NS4xMjg5Yy0uMDE3Ni4yMTM0LjAwODQuNDI4MS4wNzY1LjYzMThzLjE3NjkuMzkyNC4zMjAyLjU1NTMuMzE4My4yOTY5LjUxNS4zOTQyYy4xOTY3LjA5NzQuNDExMy4xNTYyLjYzMTQuMTczMi4wODcxLjAwNzMuMTc0Ni4wMDczLjI2MTYgMCAuMTIwMi4wMDYuMjQwNy4wMDYuMzYxIDAgLjA4ODEtLjAwNjguMTc1Ni0uMDIwNC4yNjE1LS4wNDA2LjA3NjgtLjAxOTQuMTUxMy0uMDQ2Ni4yMjIzLS4wODExdjIuNzAwMWMtLjE0MzQuMDU4NS0uMjkyMy4xMDM1LS40NDQ2LjEzNDQtLjM1NjIuMDg3Ni0uNzIzNC4xMjYxLTEuMDkwNy4xMTQxeiI+PC9wYXRoPjxwYXRoIGQ9Im04Ni4xMiAxNy4xMTZjLS40MzA4LjAxMDYtLjg1Mi0uMTI0Ny0xLjE5MTEtLjM4MjQtLjMzOTEtLjI1NzgtLjU3NS0uNjIyLS42NjcyLTEuMDMwMS0uMDkyMi0uNDA4LS4wMzQ5LS44MzQ1LjE2MjEtMS4yMDYuMTk2OS0uMzcxNi41MjEyLS42NjUuOTE3Mi0uODMuMzk1OS0uMTY0OS44Mzg4LS4xOTEgMS4yNTI0LS4wNzM4LjQxMzcuMTE3Mi43NzIzLjM3MDMgMS4wMTQzLjcxNnMuMzUyMi43NjIyLjMxMTcgMS4xNzgxYy0uMDQwNC40MTU5LS4yMjkxLjgwNTItLjUzMzUgMS4xMDA5LS4xNjI2LjE2NzEtLjM1ODguMzAwMS0uNTc2Ni4zOTA4LS4yMTc3LjA5MDctLjQ1MjMuMTM3MS0uNjg5My4xMzY1em0tMS42NzEzIDEuNDg1N2gzLjIwMTR2MTIuNDIzMmgtMy4yMDE0eiI+PC9wYXRoPjxwYXRoIGQ9Im05MC43MTA5IDE4LjYwMThoMi4zNjcxbC41NTcxIDEuMjExOWMuMjYyNS0uMjUzNy41NTE4LS40Nzk3Ljg2MzItLjY3NDUuMzAyMi0uMTgwOC42MjA5LS4zMzQ0Ljk1Mi0uNDU4OC40LS4xNDc3LjgyNS0uMjIwOCAxLjI1MjktLjIxNTUuNTY4My0uMDE0IDEuMTM0Ni4wNzE5IDEuNjcxMy4yNTM1LjQwMTEuMTQxNS43ODM5LjMyNzggMS4xNDA0LjU1NTIuMzE5NS4yMTc5LjU5NDEuNDkyMy44MDgxLjgwODguMzA2LS4zMTE4LjY1Mi0uNTgzNyAxLjAzMS0uODA4OC4zODEtLjIyLjc4Mi0uNDA1OCAxLjE5OC0uNTU1Mi40OS0uMTczNyAxLjAwOC0uMjU5NyAxLjUzLS4yNTM1IDEuMzk0IDAgMi41MDUuNDMzNSAzLjM0MiAxLjI5NTVzMS4yNTMgMi4xNDI0IDEuMjUzIDMuODMzNHY3LjQyMzVoLTMuMjA2di03LjE1MjJjLjAzNS0uNjQ3OS0uMTktMS4yODM5LS42MjgtMS43NzQ3LS4xNjYtLjE4NjQtLjM2OC0uMzM5Mi0uNTk1LS40NDk3LS4yMjYtLjExMDYtLjQ3My0uMTc2Ny0uNzI3LS4xOTQ2LS4yNTMtLjAxNzktLjUwNy4wMTI4LS43NDguMDkwM3MtLjQ2NC4yMDAyLS42NTYuMzYxM2MtLjA3LjA2MDQtLjEzNi4xMjQ3LS4xOTguMTkyNy0uNDM4LjQ5MDUtLjY2MyAxLjEyNjktLjYyNSAxLjc3NDd2Ny4xNTIyaC0zLjIwNDV2LTcuMTUyMmMuMDM3MS0uNjQ3OC0uMTg3MS0xLjI4NDItLjYyNTItMS43NzQ3LS4xNjU5LS4xODY0LS4zNjgyLS4zMzkzLS41OTUyLS40NDk5cy0uNDc0Mi0uMTc2Ny0uNzI3Ni0uMTk0NmMtLjI1MzMtLjAxNzktLjUwNzkuMDEyOC0uNzQ5LjA5MDNzLS40NjQxLjIwMDQtLjY1NjIuMzYxNWMtLjA2OTkuMDU5Ny0uMTM1NS4xMjQxLS4xOTYyLjE5MjctLjQzNzguNDkwOC0uNjYyNyAxLjEyNjgtLjYyNzcgMS43NzQ3djcuMTUyMmgtMy4yMDE1eiI+PC9wYXRoPjxwYXRoIGQ9Im0xMTMuMjY4IDE3LjExNTRjLS40MzIuMDExLS44NTUtLjEyNDItMS4xOTUtLjM4MjYtLjM0MS0uMjU4My0uNTc4LS42MjM1LS42Ny0xLjAzMjktLjA5My0uNDA5My0uMDM2LS44MzcxLjE2Mi0xLjIxLjE5Ny0uMzcyOC41MjMtLjY2NzIuOTItLjgzMjdzLjg0MS0uMTkxNiAxLjI1Ni0uMDczOS43NzUuMzcxOCAxLjAxNy43MTg3Yy4yNDMuMzQ2OS4zNTMuNzY0OS4zMTIgMS4xODIxcy0uMjMuODA3Ni0uNTM2IDEuMTAzOWMtLjE2My4xNjcxLS4zNTkuMzAwMS0uNTc3LjM5MDgtLjIxNy4wOTA3LS40NTIuMTM3Mi0uNjg5LjEzNjZ6bS0xLjY3MSAxLjQ4NTdoMy4yMDl2MTIuNDIzMWgtMy4yMDl6Ij48L3BhdGg+PHBhdGggZD0ibTExNy4xNiAyOC40NTEzIDUuNTY5LTYuODgwOWgtNS41Njl2LTIuOTY4OGg5LjYwN3YyLjU2MzJsLTUuNTYzIDYuODk2MWg1Ljg0NnYyLjk2ODloLTkuODl6Ij48L3BhdGg+PHBhdGggZD0ibTEzNS4xMzEgMzEuMTUxN2MtLjg0OS4wMDMxLTEuNjg5LS4xNjk4LTIuNDY0LS41MDctLjc2MS0uMzI0OC0xLjQ1MS0uNzg3OC0yLjAzMi0xLjM2NDEtLjU4OS0uNTgwOS0xLjA2Mi0xLjI2MjYtMS4zOTQtMi4wMTA1LS4zNC0uNzgxNy0uNTE0LTEuNjIxMy0uNTE0LTIuNDY5NHMuMTc0LTEuNjg3Ny41MTQtMi40Njk0Yy4zMzItLjc0NzkuODA1LTEuNDI5NiAxLjM5NC0yLjAxMDUuNTgyLS41NzU1IDEuMjcxLTEuMDM4NCAyLjAzMi0xLjM2NC43NjEtLjMyMiAxLjU4MS0uNDkxNiAyLjQxMS0uNDk4Ni44My0uMDA2OSAxLjY1My4xNDg4IDIuNDIuNDU4LjczMi4zMDE0IDEuMzk1Ljc0MTkgMS45NDggMS4yOTU2LjU3Mi41ODA4IDEuMDIxIDEuMjYzNiAxLjMyNCAyLjAxMDUuMzMyLjgyMTEuNDk3IDEuNjk2Ni40ODYgMi41Nzg0LjAwMS4xMzk5LS4wMDguMjc5Ni0uMDI2LjQxODMtLjAyMS4xMzQ0LS4wMzkuMjY2My0uMDU3LjM5My0uMDE5LjEyNjgtLjAzNy4yNzg5LS4wNTUuNDAzMWgtOC45MTFjLjEzOC41OTc2LjQ3IDEuMTM2Ni45NDYgMS41MzkuNTU3LjQzODcgMS4yNjIuNjYwMiAxLjk3OC42MjExLjM2Mi4wMDc0LjcyNC0uMDM3OSAxLjA3Mi0uMTM0My4yNTktLjA3ODQuNTA3LS4xODc0LjczOC0uMzI0Ni4yMS0uMTMzOS4zOTgtLjI5ODEuNTU3LS40ODY3aDMuMzQzYy0uMTg2LjUwMDgtLjQ0NC45NzM3LS43NjcgMS40MDQ1LS4zNS40ODA0LS43NzMuOTA3Ni0xLjI1MyAxLjI2NzctLjUwOS4zNzc1LTEuMDcyLjY4MjMtMS42NzEuOTA1MS0uNjQ1LjIzNDQtMS4zMy4zNTEzLTIuMDE5LjM0NDh6bTMuMDYzLTcuMjg2NWMtLjEzMy0uNjkzNC0uNTEyLTEuMzE5OS0xLjA3Mi0xLjc3MDgtLjU1OS0uNDUwOS0xLjI2NC0uNjk3OC0xLjk5MS0uNjk3OC0uNzI4IDAtMS40MzIuMjQ2OS0xLjk5Mi42OTc4LS41NTkuNDUwOS0uOTM4IDEuMDc3NC0xLjA3MSAxLjc3MDh6Ij48L3BhdGg+PHBhdGggZD0ibTE0My42MjEgMTQuMDEyMmgzLjIwMnYxNy4wMDQ1aC0zLjIwMnoiPjwvcGF0aD48cGF0aCBkPSJtMTUxLjY4NiAzNS40NzE3Yy0uMTQ3IDAtLjI5MS0uMDA1MS0uNDMyLS4wMTUyLS4xMTctLjAwNi0uMjMzLS4wMTk2LS4zNDgtLjA0MDYtLjExMy0uMDEzMi0uMjI1LS4wNDA1LS4zMzItLjA4MTF2LTIuNTYzMmMuNTgxLjAzNzEgMS4xNTctLjEyNTQgMS42MjctLjQ1ODkuMzg3LS4zMTE1LjY4OC0uNzEwMy44NzktMS4xNjEybC4yNzctLjY3NDQtNC44NzMtMTEuODc1NWgzLjM0M2wzLjIwMiA4LjA5NTMgMi45MzQtOC4wOTUzaDMuMzQzYy0uOTEgMi4yNjY2LTEuNzM3IDQuMzE3Ni0yLjQ4IDYuMTUzMi0uMzE2Ljc5MS0uNjI3IDEuNTY2OS0uOTMzIDIuMzE5OS0uMzA2Ljc1MjktLjU3OCAxLjQ0NTEtLjgyMiAyLjA2NjMtLjI0My42MjExLS40NDQgMS4xMzgzLS42MTIgMS41NTE2LS4xNjcuNDEzMi0uMjYxLjY1NjYtLjMwNi43MzAyLS4yNjkuNjQzNS0uNTggMS4yNjk0LS45MzQgMS44NzM2LS4yNjQuNDYyNy0uNTk3Ljg4NTUtLjk4OCAxLjI1NS0uMzI2LjMwODQtLjcxNC41NDc2LTEuMTQxLjcwMjItLjQ1MS4xNTIxLS45MjYuMjI1OS0xLjQwNC4yMTgxeiI+PC9wYXRoPjxwYXRoIGQ9Im00OC4wODY0IDEyLjQyNThjLTEuOTA5OSAwLTMuNzc3LjU0OS01LjM2NSAxLjU3NzVzLTIuODI1NyAyLjQ5MDQtMy41NTY2IDQuMjAwOC0uOTIyMiAzLjU5MjUtLjU0OTYgNS40MDgzYy4zNzI2IDEuODE1NyAxLjI5MjQgMy40ODM2IDIuNjQyOSA0Ljc5MjdzMy4wNzExIDIuMjAwNiA0Ljk0NDMgMi41NjE3YzEuODczMy4zNjEyIDMuODE0OS4xNzU5IDUuNTc5NC0uNTMyNnMzLjI3MjctMS45MDgyIDQuMzMzOC0zLjQ0NzZjMS4wNjExLTEuNTM5MyAxLjYyNzQtMy4zNDkgMS42Mjc0LTUuMjAwNC4wMDA0LTEuMjI5My0uMjQ5Mi0yLjQ0NjYtLjczNDMtMy41ODI0LS40ODUyLTEuMTM1OS0xLjE5NjUtMi4xNjc5LTIuMDkzMy0zLjAzNzEtLjg5NjctLjg2OTMtMS45NjE0LTEuNTU4OC0zLjEzMzItMi4wMjkxLTEuMTcxNy0uNDcwMy0yLjQyNzYtLjcxMjItMy42OTU4LS43MTE4em0wIDE1LjQ2NTVjLTEuMjQ4Ni4wMTQ1LTIuNDczNC0uMzMwNC0zLjUxOTYtLjk5MTEtMS4wNDYxLS42NjA3LTEuODY2NS0xLjYwNzUtMi4zNTcyLTIuNzIwNC0uNDkwNy0xLjExMy0uNjI5Ny0yLjM0Mi0uMzk5My0zLjUzMTUuMjMwNC0xLjE4OTYuODE5Ny0yLjI4NjEgMS42OTM0LTMuMTUwOC44NzM3LS44NjQ2IDEuOTkyNS0xLjQ1ODUgMy4yMTQ2LTEuNzA2NSAxLjIyMjEtLjI0NzkgMi40OTI3LS4xMzg4IDMuNjUwOC4zMTM2IDEuMTU4MS40NTI1IDIuMTUxNiAxLjIyNzggMi44NTQ4IDIuMjI4LjcwMzIgMS4wMDAxIDEuMDg0NCAyLjE4IDEuMDk1NCAzLjM5MDN2LjA3MDljLjAwNTUgMS42MDk5LS42NDczIDMuMTU2My0xLjgxNTUgNC4zMDA2cy0yLjc1NjcgMS43OTMxLTQuNDE3NCAxLjgwNDV6Ij48L3BhdGg+PC9nPjwvc3ZnPg==",
  },
  {
    title: "Kameleoon",
    logo: "https://media.trustradius.com/vendor-logos/hj/KM/3RT163VGVFQZ-180x180.PNG",
  },
  {
    title: "Abtasty",
    logo: "",
  },
];

function getAllskills() {
  return skillsData;
}

function getCroTools() {
  return croTools;
}

export { getAllskills, getCroTools };
