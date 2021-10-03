How to run the bot:
1. First Download or Clone the repo.
2. Run `npm install` to install all the modules [ Needs Testing ].

After doing all that , create a file called `config.json` and add the following things:
```
{
    "clientId": "",
	"guildId": "",

	"token": ""
}
```

After doing that , run `node deploy-cmds.js` and then `node .` or you might get some errors.

In the `clientId` , you have to add the Bot's id ; In the `guildId` , you have to add the ServerId. You can add multiple servers by
 doing `['1ID' , '2ID']` ; In the `token` , you have to add the bots tokem.

**NOTE:** For getting `guildId` , you will need to have developer mode on.