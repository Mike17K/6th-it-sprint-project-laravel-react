# The first week of preparing for the 6th IT Sprint

Hey there!

Let's get ready for the 6th IT Sprint! In the next three weeks, we will work together to get all set up for the awesomest IT
learning experience imaginable. In this first week, we'll set up your computers to run as uniform an environment as possible.
To achieve that we'll get you familiar with two widespread technologies: docker and git. On this page, you'll mostly find information and tutorials on those two technologies.

## Goals of the week

The two goal of this week are:

- create a new branch of this repo, telling us about your favorite dish! [Instructions](#add-content-to-this-repo).
- to successfully run `./mange up -d`. The [README](../README.md) tells you how to achieve that.

Good luck! 🍀

## Command Line Interfaces

This is a bit a a stream-of-consciousness introduction into command line interfaces, more specifically that of your OS' shell. Of course, people have tried harder before, so feel free to also/just refer to these resources:

- [What is the shell?](https://en.wikipedia.org/wiki/Shell_(computing))
- [For MacOS and Linux users](https://swcarpentry.github.io/shell-novice/01-intro/index.html)
- [For Windows users](https://learn.microsoft.com/en-us/training/modules/introduction-to-powershell/)

We all grew up using computer through what is called a Graphical User Interface (GUI), i.e. using the mouse to navigate and trigger functionality and typing text into text fields. Before GUIs were around, there were Command Line Interfaces (CLI). In a command line interface, you interact with the computer in a way that will feel more limited to most people: you type a command, hit enter, and the computer will do what it thinks you told it to do. The CLI that you use to directly interact with the operating system is also referred to as shell.

There are up and down sides to both kinds of interfaces. A CLI is usually not/less intuitive. You have to know what commands to use, or at least how to look them up, while in a GUI, the basic functionality of many programs can be guessed. On the other hand, it is easier to clearly communicate actions done via CLI. the clearly defined inputs and outputs of interactions with a computer via a CLI can make it easier to communicate about them. Furthermore, CLI commands can be bundled into scripts, which enables automation of more complex/specialized tasks.

Different operating systems offer different shells per default:

### Windows: powershell

PowerShell is a command-line shell and a scripting language all in one. It was designed as a task engine that uses cmdlets to wrap tasks that people need to do. In PowerShell, you can run commands on local or remote machines. You can do tasks like managing users and automating workflows.

### Linux and MacOS: bash/zsh

There is a whole family of CLIs that end in *sh. The distributions (variants) of Linux as well as MacOS user one of those per default.
For our purposes, we can consider them equivalent.

Open the application called `terminal` to access the shell. You will usually see some information about which directory/folder you are in* and you should have a cursor that turns into a letter if you press on your keyboard and moves to the right. This is how you write commands.

*Your shell is always in the context of a directory/folder. Type `echo $PWD` and hit `enter` to see it's path (should usually be to the left of your cursor in some form). You can use the `ls` command, to see the contents of the directory you are in. You can move to a different directory with the 'change directory' command: `cd [path of the directory you want to navigate to]`.
To print the contents of a file in the current directory, use `cat [filename]`. To run an executable file (program) in the current directory, you use the following notation: `./[filename]`.

Commands can usually be modified with **flags** and many commands take **arguments**. You already tried `echo` with the **argument** `$PWD`. We can modify `ls` to show us some additional useful information using the **boolean flag** `-l`. To try it out, type `ls -l` and hit enter.

### Resources

- [Unix for the Beginning Mage](https://dasher.wustl.edu/chem430/readings/unix-tutorial.pdf)
- [The Linux OS - Freecodecamp](https://www.youtube.com/watch?v=ROjZy1WbCIA)

## Docker

### What is docker?

Docker is a set of tools to bundle programs together in a standardized way. It will (hopefully) abstract away the messiness of
dealing with different operating systems, software versions, etc.

Here is a [100s video](https://www.youtube.com/watch?v=Gjnup-PuquQ) to give you a basic understanding what docker is. We will go into some more detail of what docker is in Skopje, for now it is definitely enough to just follow the [README](../README.md) and try to get it running. Of course, you are always welcome to read deeper into the topic, a good place to start is [Get started with Docker (by Docker)](https://docs.docker.com/get-started/). Leo and Alex are always there for you for questions and troubleshooting!

### More

Leo, Alex and George (former ITT admins coordinator) have taken a shot at giving an overview of docker before. [Here's the result.](https://www.youtube.com/watch?v=QI403KJ01qA&list=PLYYrqvGMR7ScHDbbdW9GNXsRIAwmY6SPK&index=1)

## Git

### What is git?

Git is a version control system: Using git, you will never have to stress about changes you make to your files! As long as you commit to your changes frequently enough (i.e. tell git: "this is a set of changes that make sense together"), you can always go back. Isn't that nice?! Here's another [100s video](https://www.youtube.com/watch?v=hwP7WQkmECE) that tells you a little bit more about that program.

### Get to know git: Clone this Repository

We want to use git and GitLab to exchange files at the 6th IT Sprint.
Therefore, it is important that you already get some practice with the basics of git. It starts with getting this Repository (think 'folder managed/tracked/version controlled using git') onto your local machine.

#### Install git

If you are on Linux, you'll usually have git already installed. On MacOS you can install it - for example - with homebrew. For Windows, download from [here](https://git-scm.com/download/win), follow the default options in the installation process.

#### Clone this Repo

To be able to clone (read 'download') repos from gitlab to your machine, it is advisable to set our gitlab account up for communication via ssh. Follow these [instructions](https://docs.gitlab.com/ee/user/ssh.html)

To get this repo locally, you run `git clone git@gitlab.com:eestec/it-sprint/6th-it-sprint.git`.

### Add content to this repo

Git was created to make collaboration between developers easier. So let's use git collaboratively to compile a list of our favorite dishes! To participate, create a branch locally, by running

```bash
git checkout -b [replace with your first name]
```

then, add a line to the [its-cookbook](its-cookbook.md) with your favorite dishes' name and a short description.

If you are happy with your line, commit (to) your change (a **commit** as an object in git is a set of changes to files in the repository):

```bash
git add week1/its-cookbook.md # this tells git to "stage" (> make part of the next commit) the changes you made to this file
git commit -m "added a yummy dish to the cookbook" # this creates the commit. Feel free to change the message to something more creative!
git push # will push your change to GitLab. If you get an error, just follow the instructions in the error message
```

Congrats, you reached the first goal of the week!

### Learn more (about) git

In the beginning of the association year, Thomas, an ITT dinosaur, held a fun talk on git. Find the recording [here](https://www.youtube.com/watch?v=4uNVFTg-MBM&list=PLYYrqvGMR7ScHDbbdW9GNXsRIAwmY6SPK&index=2)!

Additionally, there are websites that teach you git as a game, which sounds pretty fun:

- [Oh my git](https://discord.com/channels/1033679602775756820/1066762319868219452/1067046822746529893)
- [Learn git branching](https://learngitbranching.js.org/)
