#!/bin/bash

volumeicon &

# Audio
pulseaudio -k &
sleep 1 &
pulseaudio -D &


# MX Master Mouse
echo sparky | sudo -S solaar -w hide &

nm-applet &

cbatticon -u 5 &

udiskie -t &

nitrogen --restore

picom -b
