#!/bin/bash

volumeicon &

# Audio
pulseaudio --start &

sleep 5 &

pulseaudio -k &
killall pulseaudio &

sleep 5 &


pulseaudio --start  &




# MX Master Mouse

nm-applet &

cbatticon -u 5 &

udiskie -t &

nitrogen --restore &

picom -b &

blueman-applet &

xfce4-power-manager &

