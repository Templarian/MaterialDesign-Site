workflow "Build and deploy on push" {
  on = "push"
  resolves = ["HTTP client"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "build prod" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm install"]
  runs = "npm run build"
}

action "FTP Deploy" {
  uses = "SamKirkland/FTP-Deploy-Action@master"
  secrets = [
    "FTP_PASSWORD",
    "FTP_SERVER",
    "FTP_USERNAME",
    "LOCAL_DIR",
    "REMOTE_DIR",
  ]
  needs = ["build prod"]
}

action "HTTP client" {
  uses = "swinton/httpie.action@69125d73caa2c6821f6a41a86112777a37adc171"
  needs = ["FTP Deploy"]
  args = ["POST", "https://dev.materialdesignicons.com/api/admin/build"]
}
