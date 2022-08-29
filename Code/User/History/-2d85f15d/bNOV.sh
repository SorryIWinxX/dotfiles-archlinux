#!/bin/bash

volumeicon &

# Audio
pulseaudio --start &

sleep 5 &

pulseaudio -k &
killall pulseaudio

sleep 5 &


pulseaudio --start  &




# MX Master Mouse
echo sparky | sudo -S solaar -w hide &

nm-applet &

cbatticon -u 5 &

udiskie -t &

nitrogen --restore &

picom -b &

multi_static b600ff FF4A00 FF4A00 ff00fe &
