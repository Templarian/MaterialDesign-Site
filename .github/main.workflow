workflow "Build and deploy on push" {
  on = "push"
  resolves = ["FTP Deploy"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "Install angular-cli" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm install"]
  runs = "npm install -g @angular/cli"
}

action "ng build production" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install angular-cli"]
  runs = "ng build --prod"
}

action "FTP Deploy" {
  uses = "SamKirkland/FTP-Deploy-Action@master"
  needs = ["ng build production"]
  secrets = ["FTP_PASSWORD", "FTP_SERVER", "FTP_USERNAME", "REMOTE_DIR", "LOCAL_DIR"]
}
