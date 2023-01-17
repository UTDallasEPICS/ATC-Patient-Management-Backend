# Prerequisites for Running Frontend and Backend 

## Prep for Building and Running Backend + Frontend
> NOTE: It is recommended to develop this project on linux

1. Install WSL (Windows Subsystem for Linux)
    * Only for Windows devices
    * Run `wsl --set-default-version 2` in command prompt
    * Download [Distrod](https://github.com/nullpo-head/wsl-distrod)
        * run distrod_wsl_launcher.exe and follow wizard
            * enter `2`
            * enter `6` (archlinux, can choose other distro)
            * enter `1` (or some distro version)
            * enter a `username` and `password` for distro (Note, password will not be shown in terminal when typing)
            * done

* > NOTE: I am using Archliux in WSL terminal so the pacman package manager is used, may use other E.g, apt for Ubuntu

2. install [git](https://git-scm.com/), [npm](https://www.npmjs.com/), and [docker](https://www.docker.com/)
    * run `sudo pacman -S git`
    * run `sudo pacman -S npm`
    * run `sudo pacman -S docker`

3. Clone frontend and backend repository
    * > NOTE: `cd` and do these commands in the folder you want the repositories to be placed in
    * > NOTE: not needed if already done E.g, via VSCode
    * run `sudo git clone https://github.com/UTDallasEPICS/ATC-Patient-Management-frontend`
    * run `sudo git clone https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend`

<br/><br/>

## Micellaneous WSL Tips
* Home directory for WSL linux installation:  
    * `~`
    * `/home/username`
* Where userprofile for WSL is at in linux install:
    * `/mnt/c/Users/Windows_user_profile_name`
* Set custom alias to quickly switch to a directory
    * run `cd ~`
    * Add "alias home='cd /mnt/c/Users/Windows_user_profile_name'" to both .bashrc and .bash_profile with Nano text editor
        * run `nano .bashrc`
        * run `nano .bash_profile`
        * add the line to the file
        * > NOTE: before starting of a login shell, .bash_profile is sourced and before starting of a non-login shell .bashrc is sourced.

* List installed packages in arch
    * `pacman -Q`
    
* WSL commnd to trun off all distros
    * `wsl --shutdown`
    
* WSL command to view your distros
    * `wsl -l -v`

