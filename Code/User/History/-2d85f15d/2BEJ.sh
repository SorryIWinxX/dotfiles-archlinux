#!/bin/bash

volumeicon &

# Audio
pulseaudio -k &
pulseaudio --start &

killall pulseaudio

pulseaudio



/usr/bin/pasuspender /bin/true




# MX Master Mouse
echo sparky | sudo -S solaar -w hide &

nm-applet &

cbatticon -u 5 &

udiskie -t &

nitrogen --restore

picom -b
