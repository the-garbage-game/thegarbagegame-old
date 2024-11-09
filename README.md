# The Garbage Game Web App
*Created and maintained by [`@roboisaac11`](https://www.github.com/roboisaac11) and [`@thecommunityofperfection`](https://www.github.com/thecommunityofperfection)*

## About
The Garbage Game was originally an entry for the [Caring for our Watersheds](https://caringforourwatersheds.com/) contest. It's purpose is to alert people of areas in their community with lots of litter, and reward people for cleaning it up. For more information on the project, check out our [proposal](https://docs.google.com/document/d/1k0FpT4Au05AOyUyrp7CIQXZwANTp-ZvLDw6DBLETVSo/edit?usp=sharing).

## Development

### Project workflow
To minimise errors and make it easiser to collaborate on the project, we have a workflow we should follow. The order it works in is as follows:

1. Create new branch with updated code
2. Run unit tests
3. File a Pull Request
4. Another dev will review code for any bugs / improvements that could be made
5. Branch merges into `main`
6. Once ready for release, `main` will be merged into the `release` branch

> [!NOTE]
> As of now, the project is not stable and will not be released

The following sections will provide more detail on these steps.

### Instalations
To work on this project, you will need a few different tools installed. You will need **`git`, `node.js`, and `angular`**. You can install these tools by following the instructions on the following websites:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Angular](https://angular.io/guide/setup-local)
Installing node.js should come withh `npm` installed, which is used to install angular.

### Adding features
To ensure all code is working correctly and efficiently, **we do not write code directly on the `main` branch**. When you want to work on a part of the project, the first thing you should do is create a new branch with the up-to-date code on `main`.

Open up your project directory in VS Code. If you do not currently have the project, press `Code` > `Download Zip` on the [`main branch`](https://github.com/the-garbage-game/thegarbagegame-webapp/tree/main), or run

```cmd
git clone https://github.com/the-garbage-game/thegarbagegame-webapp.git
```

to download the folder into your current directory.

To make sure the code in your local project is up-to-date, run this command:
```cmd
git pull
```

> [!IMPORTANT]
> Make sure you are in the `main` branch. In VSCode the branch is displayed in the bottom left, but you can also check with `git branch --show-current`. To change your branch to `main`, run `git checkout main`.

The first thing you should do is make sure you all the required node modules. To do this, run:

```cmd
npm install
```

This will install all the required node modules for the project. These are not included in the github repo because they are large files.

Now that you have the current code you can almost begin programming. First you will need to create a new branch for your modifications. To create a new branch, run:
```cmd
git checkout -b <branch-name>
```
Replace `<branch-name>` with the name of your new branch.

This is not strictly necessary, but the branch name should include your name, the type of change your making, and a short title for it, all separated by a `-`. For example,
```cmd
git checkout -b roboisaac11-bugfix-auth_system
```
Some examples of change types could be:
- feature (something new was added)
- bugfix (fixed a bug)
- improvement (more efficient, better practice, etc.)
- documentation (comments, updated readme, etc.)

These are all just examples, and you don't **need** to have a special name, but it is encouraged.

> [!NOTE]
> When you want to add some code, try to only focus on one type of change. If you fixing a bug, just fix that bug and related ones in that branch. You can still make a different change, just give it it's own branch for that.

Now that you are in your nice new branch, you can start making some changes. Once you feel like you've completed your task, we need to make this branch availible on Github! We just need to run three commands:

```cmd
$ git add .
$ git commit -m "<message>"
$ git push -u origin <branch-name>
```

Replace `<branch-name>` with the name of your branch, and `<message>` with a short title for your changes. So for example,

```cmd
$ git add .
$ git commit -m "Fixed bug in auth system"
$ git push -u origin roboisaac11-bugfix-auth_system
```

You only need to have the `-u origin roboisaac11-bugfix-auth_system` part once for every branch. So If you want to push another thing later onto the same branch, you can just run `git push` and it will automatically push to the same branch.

Great, now we can move on.

### Pull Requests
All of that code that you worked on is in a separate branch than the main branch. So we need to merge it over. We do this with **pull requests**. Basically all were doing is making a request on Github saying, "I want this code to be included into the actual project," and then if another member approves your code, it's good to go! Here is how to file a PR:

1. On The Garbage Game Github repo, click the `Pull Requests` tab on the navbar
2. You should see a info box appear saying something like: `<branch name> had recent pushes`. Click the `Compare & pull request` button.
   - If that doesn't show up, click `New pull request`
   - You should see two dropdown menus, one saying `base: main` and the other `compare: main`. Leave the first one as `base: main`, but set the other one to the branch with your new code
3. You can now create a title for your PR, something like, `fixed login bug`, or `added profile picture support`. Something short
4. You don't have to, but if you want to describe your changes in more detail you can add a description
5. Once your done, click `Create pull request`

Great, now your PR is ready! Just wait for another person to approve your code, and it will be merged into `main`! Once it has been merged, the old branch with your code can be deleted. Back on you local computer, first we need to switch back to the `main` branch with:

```cmd
git checkout main
```

And now use this command to delete the old branch:

```cmd
git branch -d <branch name>
```
> [!NOTE]
> This command will only delete the branch if it has been fully merged. If you want to delete a branch even if it has not been merged, run
> `git branch -D <branch name>` with a capital `D`

So if I just made an edit in a branch `roboisaac11-bugfix-auth_failure` and it just got merged, I would run:
```cmd
$ git checkout main
$ git branch -d roboisaac11-bugfix-auth_failure
```

And because the `main` branch was modified, to get the lasted code on my computer:
```cmd
git pull
```
