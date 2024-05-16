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
    skillName: "Vanila JS",
    percentage: "90%",
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
    styleWidth: "80%",
  },
  {
    title: "Qubit",
    logo: "https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoiY292ZW9cL2FjY291bnRzXC8xM1wvNDAwMDI0NVwvcHJvamVjdHNcLzE0XC9hc3NldHNcLzRiXC8yMjA0XC8zMDEwM2ZjYzQ4NWEyYmM3MmNlMDlhZTZmMDUwNjE1Yy0xNjEwMzg2OTIyLnBuZyJ9:coveo:C6Z0wEZF_Ct-Eygab2oed7n1-8MALZA4SdvCqS6ci74?width={width}&rect=0,0,800,204&reference_width=800",
    styleWidth: "80%",
  },
  {
    title: "VWO",
    logo: "https://static.wingify.com/gcp/images/vwo-logo-color.svg",
    styleWidth: "60%",
  },
  {
    title: "Dynamic Yield",
    // logo: "https://www.guberman.co.il/sites/guberman/files/client_logos/dynamic-yield-logo-300x145.png",
    logo: "https://www.papayaglobal.com/wp-content/uploads/2022/10/Dynamic-Yield-logo.png",
    styleWidth: "50%",
  },
  {
    title: "Optimizely",
    logo: "https://res.cloudinary.com/tedgustaf/image/upload/f_auto,dpr_auto,q_auto,fl_progressive/w_767,h_264,c_scale/www-prod/optimizely/95e25aa1-042f-471b-a66f-f6dce69bbfdd/optimizely_logo_full-color_light.png",
    styleWidth: "95%",
  },
  {
    title: "Kameleoon",
    logo: "https://asset.brandfetch.io/idTHcm8P6O/idY6dAZSFY.png",
    styleWidth: "90%",
  },
  {
    title: "Convert",
    logo: "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsPSJDb252ZXJ0IExvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MyAzMyIgY2xhc3M9InN2Zy13aGl0ZSIgc3R5bGU9IgogICAgZmlsbDogI2ZhZmJmZjsKIj48cGF0aCBkPSJNMTcuOTQgMjQuODIzaDQuNjk5Yy0uNjkgMi42MzQtMi4wMDcgNC42NC0zLjk0NyA2LjAxOEMxNi43NDggMzIuMjgzIDE0LjMwOCAzMyAxMS4zNjUgMzNjLTMuNTcgMC02LjM1NS0xLjE1Ny04LjM2LTMuNDc1QzEgMjcuMjcgMCAyNC4wNCAwIDE5LjgzN2MwLTQuMDA5Ljk2OC03LjE0MiAyLjkxMi05LjM5NyAyLTIuMzE5IDQuNzktMy40ODIgOC4zNi0zLjQ4MiAzLjc2IDAgNi42NjggMS4xMyA4LjczNiAzLjM4NSAxLjEyNyAxLjM4IDEuOTQgMi45NzggMi40NDQgNC43OTRoLTYuNTc4Yy0uMzE0LS42MjQtLjYyNi0xLjA5Mi0uOTM2LTEuNDA5LS44Mi0uODc4LTEuOTc2LTEuMzE3LTMuNDc2LTEuMzE3LTEuMzgyIDAtMi41MDguNDQtMy4zODMgMS4zMTctMS4xMjcgMS4yNTQtMS42OTEgMy4zMjctMS42OTEgNi4yMSAwIDIuODguNTY0IDQuOTE1IDEuNjkgNi4xMDcuODEgMS4wMDIgMi4wMyAxLjUwMyAzLjY2NCAxLjUwMyAxLjA2NSAwIDEuOTY4LS4yMTcgMi43MjQtLjY1Ny4xODgtLjA2MS4zNTgtLjE3My41MTQtLjMyOS4xNTgtLjE2LjMyOS0uMzMuNTItLjUxNy4xMjItLjE5LjM3NC0uNDM4Ljc0OC0uNzUyLjM4MS0uMzEuOTQyLS40NyAxLjY5Mi0uNDciPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjMxNCAyNS43MmMuNTYxIDEuOTEyIDEuNTA1IDMuNDMgMi44MTggNC41NTcgMS4yNTIgMS4xMjcgMi45MzEgMS45MjggNS4wMjkgMi4zOTQgMi4wOTUuNDc0IDQuMTguNDMgNi4yNDYtLjEzOCAyLjMxNC0uNTAyIDQuMjI1LTEuNzg4IDUuNzM1LTMuODU1LjY4MS0xLjAwMiAxLjI1LTIuMjIyIDEuNjg4LTMuNjYzLjQzNi0xLjQ0Mi42NTUtMy4xNjYuNjU1LTUuMTc4IDAtMi43NTYtLjUzNS01LjE2NS0xLjYtNy4yMzYtMS4xMjQtMi4zMTYtMi44NzYtMy45NS01LjI1NS00Ljg4OC0yLjA2Ni0uNzU2LTQuMzg0LS45NTUtNi45NTMtLjYxMy0yLjU2OS4zNDYtNC42NjcgMS40Ni02LjI5NCAzLjM0LTEuMDA3IDEuMTI0LTEuNzQgMi41MzktMi4yMTQgNC4yMzJhMTkuMTIgMTkuMTIgMCAwMC0uNyA1LjA3OGMwIDIuMDYuMjggNC4wNTYuODQ1IDUuOTd6bTUuNTQ5LTUuNTVjLS4xMjktMi44NTMuNDY0LTQuOTk4IDEuNzc5LTYuNDQyLjQzOC0uNDM2IDEuMTMtLjc5OCAyLjA2OC0xLjA4MWE0LjU4IDQuNTggMCAwMTIuODE1LjA0OGMuOTQyLjMxNiAxLjc3NSAxLjAzMyAyLjQ5MSAyLjE2NC43MjQgMS4xMjcgMS4wODEgMi44MiAxLjA4MSA1LjA3OC0uMDYgMi41MDMtLjQ2NyA0LjMyMS0xLjIyIDUuNDQ5LS43NTEgMS4xMjctMS42MTcgMS44MzItMi41ODUgMi4xMTdhNC40NyA0LjQ3IDAgMDEtMi44NjctLjA5N2MtLjkzNS0uMzQyLTEuNTk0LS43NjMtMS45NjgtMS4yNjctLjk0Mi0xLjEyNC0xLjQ3NS0zLjExMy0xLjU5NC01Ljk3eiI+PC9wYXRoPjxwYXRoIGQ9Ik02OS4zMTEgMzIuNTM0aC0zLjI4NWMtLjk0IDAtMS43MDgtLjMtMi4zMDItLjg5NS0uNTk3LS41OTgtLjg5LTEuMzYyLS44OS0yLjMwMlYxNi41NTJjMC0xLjUwNS0uNDU4LTIuNjA0LTEuMzY2LTMuMjk1YTQuOTI4IDQuOTI4IDAgMDAtMy4wNTQtMS4wMzQgNC43MyA0LjczIDAgMDAtMy4wMDQgMS4wMzRjLS44NzguNjktMS4zMTcgMS43OS0xLjMxNyAzLjI5NXYxNS45ODJoLTYuNTcyVjE3Ljg2N2MwLTQuMjYgMS4xMDctNy4xMTMgMy4zMzQtOC41NTggMi4yMjEtMS40NCA0LjY3Ny0yLjIyMiA3LjM3My0yLjM1MSAyLjc1NiAwIDUuMjkuNzIzIDcuNjEgMi4xNjQgMi4zMTggMS40NCAzLjQ3MyA0LjM1OCAzLjQ3MyA4Ljc0NXYxNC42Njd6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTguNjY3IDI0LjgyM2gtNC42OThjLS43NDcgMC0xLjMzMy4xNTktMS43MzUuNDctLjQwOC4zMTQtLjY0Ny41NjItLjcwNC43NTJsLS4xNDguMTQ3LS4zNzIuMzdhMS4zMyAxLjMzIDAgMDEtLjUxNy4zM2MtLjc1MS40NC0xLjY1OS42NTYtMi43MjIuNjU2LTEuNjI5IDAtMi44NTUtLjUwMS0zLjY2Ni0xLjUwMy0uODc3LS45NC0xLjM0Ni0yLjM4My0xLjQwNi00LjMyNmgxNi4yNDljLjA2NC0uMTIzLjA5NS0uMzQxLjA5NS0uNjU4di0xLjAzNGMwLTQuMTM0LS45OTktNy4zNjItMy4wMDMtOS42ODQtMi4wNzEtMi4yNTUtNC45ODItMy4zODUtOC43NDItMy4zODUtMy41NjMgMC02LjM1NSAxLjE2My04LjM1NyAzLjQ4Mi0xLjk0MiAyLjI1NS0yLjkxNyA1LjM4OC0yLjkxNyA5LjM5NyAwIDQuMjAzIDEuMDAzIDcuNDMzIDMuMDA4IDkuNjg4IDIuMDA0IDIuMzE4IDQuNzk0IDMuNDc1IDguMzYyIDMuNDc1IDIuOTQ1IDAgNS4zODgtLjcxOCA3LjMzMS0yLjE2IDEuOTM2LTEuMzc4IDMuMjU0LTMuMzg0IDMuOTQyLTYuMDE3em0tNi4zODktNy4zMzVoLTkuNTc5Yy4wNi0xLjYyOC41MjktMi44OCAxLjQwNy0zLjc2Ljg3OC0uODc4IDIuMDAzLTEuMzE3IDMuMzgtMS4zMTcgMS41MDQgMCAyLjY2Mi40NCAzLjQ4IDEuMzE3Ljc1MS44MTQgMS4xODYgMi4wNjcgMS4zMTIgMy43NnoiPjwvcGF0aD48cGF0aCBkPSJNMTIwLjA3NyAzMi41MzNWMjAuNDAyYzAtMi40NDIuMzYyLTQuNDk0IDEuMDgtNi4xNTcuNzIxLTEuNjYgMS43MDUtMi45OTEgMi45Ni0zLjk5MiAxLjE5LS45NDQgMi41ODMtMS42MzIgNC4xODItMi4wN2ExOC41NTIgMTguNTUyIDAgMDE0LjkyOC0uNjZIMTM0LjE2OFYxNC4yaC0yLjE1OGMtMS44MTggMC0zLjE2OC40NC00LjA0IDEuMzExLS44NzkuODgyLTEuMzE4IDIuMjYyLTEuMzE4IDQuMTQydjEyLjg4aC02LjU3NXpNMTQ1LjkwNyAzMi41MzNjLTIuMDYyLjEyMS00LjMwNC4wOTMtNi43MTMtLjA5NS0yLjQxNC0uMTg4LTMuNjE0LTEuNzIzLTMuNjE0LTQuNjA2Vi4xODdoMy4zODFjLjgxIDAgMS41MzMuMzE3IDIuMTU4Ljk0My42MjcuNjI3Ljk0MSAxLjM4Ljk0MSAyLjI1OHY0LjIyOWgzLjg0NnYxLjMxN2MwIC45MzctLjMxIDEuNzA2LS45MzMgMi4zMDRhMy4xNjMgMy4xNjMgMCAwMS0yLjI1Ny44OTRoLS42NTV2MTMuOTEzYzAgMS4wNjMuNjIxIDEuNTk4IDEuODc4IDEuNTk4aDEuOTY3djQuODloLjAwMXoiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIuNSIgZD0iTTcxLjgzOSA4Ljk4NWwtMS40NyAzLjYxIDMuMDczIDYuOTUgMy4zNDEtOC42ODktNC45NDQtMS44NzF6IiBmaWxsPSJpbmhlcml0Ij48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjc1IiBkPSJNODAuMzkgOC4zMTZsLTUuNDc4IDE0LjQzOCAzLjA3MyA3LjA4NSA3LjYxNy0xOS41MTctNS4yMTEtMi4wMDZ6IiBmaWxsPSJpbmhlcml0Ij48L3BhdGg+PHBhdGggZD0iTTk2LjAyNSAxMC4zMjJMOTQuNDIgMS4wOThsLTcuMzUgNS42MTQgMi4wMDUuODAyLTkuNzU0IDI1LjI2Nmg1LjYxMkw5NC4wMiA5LjUybDIuMDA1LjgwMnpNMTQ5LjkwNiAzLjEyNGMtMS40OTIgMC0yLjcgMS4yMjYtMi43IDIuNzE1IDAgMS41IDEuMjA4IDIuNzE0IDIuNyAyLjcxNGEyLjcxNSAyLjcxNSAwIDAwMC01LjQzem0wIDQuOTA0YTIuMTc2IDIuMTc2IDAgMDEtMi4xNzgtMi4xOWMwLTEuMjA0Ljk2OS0yLjE4OSAyLjE3OC0yLjE4OWEyLjE5IDIuMTkgMCAwMTAgNC4zNzl6bTEuMTk4LS44ODdjLS41NzctMS4wNjItLjU0NC0xLjAwNy0uNTc3LTEuMDUuMjYxLS4xNTQuNDI1LS40Ni40MjUtLjgxIDAtLjU3LS4zMjctLjkzMS0xLjEtLjkzMWgtLjg2MWEuMTMyLjEzMiAwIDAwLS4xMy4xMzF2Mi43MTVjMCAuMDc3LjA1NC4xMzEuMTMuMTMxaC40MjVhLjEzMy4xMzMgMCAwMC4xMzEtLjEzMXYtLjkwOWguMzQ4bC41MTIuOTc1Yy4wMjIuMDQzLjA3Ni4wNjUuMTIuMDY1aC40NTdjLjEwOSAwIC4xNjQtLjA5OC4xMi0uMTg2em0tMS4xOTgtMS40NzhoLS4zNTl2LS43aC4yOTRjLjM0OCAwIC40MjQuMTMxLjQyNC4zNSAwIC4yMy0uMTMuMzUtLjM1OS4zNXoiPjwvcGF0aD48L3N2Zz4=",
    styleWidth: "75%",
  },
  {
    title: "ABLyft",
    logo: "https://ablyft.com/images/logo-light.svg",
    styleWidth: "75%",
  },
];

const offices = [
  {
    title: "",
    logo: "https://dreamlpg.com/assets/images/logo/logo2.png",
  },
  {
    title: "Setcol",
    logo: "https://i.ibb.co/Cw4cFTr/download.png",
  },
  {
    title: "Kernel",
    logo: "https://i.ibb.co/682Pkby/1640089257430-removebg-preview.png",
  },
  {
    title: "Echologyx",
    logo: "https://i.ibb.co/SJ0mQ3y/Echo-Logyx-logo-RGB-white-1-6.png",
  },
];

function getAllskills() {
  return skillsData;
}

function getCroTools() {
  return croTools;
}

function getOffices() {
  return offices;
}

export { getAllskills, getCroTools, getOffices };
