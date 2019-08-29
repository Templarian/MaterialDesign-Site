# Home Assistant Guide

## Home Assistant

[Home Assistant](https://www.home-assistant.io/) is an open-source home automation platform running on Python. Home Assistant provides a clean, Material-based UI to control all of your connected devices in one place.

## How to use Material Design Icons in Home Assistant

Most entities in Home Assistant have default icons already set. For example, all `light` entities use [`lightbulb`](http://materialdesignicons.com/icon/lightbulb).

On any entities that allow the `icon` configuration variable, you can provide the name of any Material Design Icon by simply prefixing the icon name with `mdi:`.

```yaml
switch.front_yard:
  friendly_name: Front Yard Sprinklers
  icon: \mdi:water-pump
```

For more information on customizing entities in Home Assistant, [see their official documentation](https://www.home-assistant.io/docs/configuration/customizing-devices/).

## Common Home-based Icons

Below we have currated a list of commonly used icons in Home Assistant.

| Category    | Icons |
|-------------|-------|
| Logo        | mdi:home-assistant |
| Home        | mdi:home mdi:home-variant mdi:home-automation mdi:home-alert mdi:home-lock mdi:home-lock-open mdi:home-map-marker mdi:home-outline mdi:home-modern mdi:caravan mdi:floor-plan |
| Alarm       | mdi:bell mdi:bell-off mdi:bell-ring mdi:alarm-light |
| Assistants  | mdi:google-home mdi:amazon-alexa |
| Audio       | mdi:speaker mdi:speaker-off mdi:speaker-wireless mdi:audio-video mdi:radio mdi:amplifier mdi:boombox mdi:dolby |
| Bathroom    | mdi:shower mdi:toilet mdi:scale-bathroom |
| Battery     | mdi:battery mdi:battery-alert mdi:battery-unknown mdi:battery-plus mdi:battery-minus mdi:battery-positive mdi:battery-negative mdi:battery-charging mdi:battery-outline mdi:battery-10 mdi:battery-20 mdi:battery-30 mdi:battery-40 mdi:battery-50 mdi:battery-60 mdi:battery-70 mdi:battery-80 mdi:battery-90 mdi:battery-charging-20 mdi:battery-charging-30 mdi:battery-charging-40 mdi:battery-charging-60 mdi:battery-charging-80 mdi:battery-charging-90 mdi:battery-charging-100 mdi:battery-charging-wireless-outline mdi:battery-charging-wireless-10 mdi:battery-charging-wireless-20 mdi:battery-charging-wireless-30 mdi:battery-charging-wireless-40 mdi:battery-charging-wireless-50 mdi:battery-charging-wireless-60 mdi:battery-charging-wireless-70 mdi:battery-charging-wireless-80 mdi:battery-charging-wireless-90 mdi:battery-charging-wireless mdi:battery-charging-wireless-alert |
| Bedroom     | mdi:hotel mdi:bed-empty |
| Camera      | mdi:cctv mdi:webcam mdi:video mdi:video-off mdi:camera |
| Computer    | mdi:desktop-tower mdi:desktop-mac mdi:desktop-classic mdi:laptop mdi:laptop-off mdi:laptop-chromebook mdi:laptop-windows mdi:laptop-mac mdi:monitor mdi:monitor-multiple |
| Cast        | mdi:cast mdi:cast-off mdi:cast-connected mdi:airplay |
| Door        | mdi:door mdi:door-closed mdi:door-open |
| Doorbell    | mdi:doorbell-video mdi:bell |
| Fan         | mdi:fan mdi:fan-off |
| Garage      | mdi:garage mdi:garage-open mdi:garage-alert |
| Health      | mdi:scale-bathroom mdi:heart-pulse mdi:walk mdi:google-fit |
| HVAC        | mdi:thermostat mdi:thermostat-box mdi:radiator mdi:radiator-off mdi:air-conditioner |
| Kitchen     | mdi:fridge mdi:fridge-bottom mdi:fridge-top mdi:fridge-outline mdi:stove mdi:dishwasher mdi:washing-machine mdi:toaster-oven mdi:microwave |
| Lighting    | mdi:lamp mdi:ceiling-light mdi:floor-lamp mdi:wall-sconce mdi:desk-lamp mdi:track-light mdi:light-switch mdi:lava-lamp mdi:led-strip mdi:lightbulb mdi:lightbulb-outline mdi:lightbulb-on mdi:lightbulb-on-outline mdi:spotlight mdi:spotlight-beam mdi:led-on mdi:led-off mdi:led-outline mdi:led-variant-on mdi:led-variant-off mdi:led-variant-outline |
| Power       | mdi:power-plug mdi:power-plug-off mdi:power-socket mdi:power-socket-us mdi:power-socket-eu mdi:power-socket-uk |
| Printer     | mdi:printer mdi:printer-alert mdi:printer-3d mdi:cloud-print mdi:cloud-print-outline |
| Projector   | mdi:projector mdi:projector-screen |
| Remote      | mdi:remote mdi:power mdi:play mdi:pause mdi:play-pause mdi:skip-previous mdi:skip-next mdi:skip-backward mdi:skip-forward mdi:record mdi:record-rec mdi:volume-high mdi:volume-medium mdi:volume-low mdi:volume-off mdi:volume-minus mdi:volume-plus mdi:gamepad |
| Security    | mdi:security-home mdi:lock mdi:lock-open mdi:lock-outline mdi:lock-open-outline mdi:gate |
| Sensors     | mdi:thermometer mdi:thermometer-lines mdi:gauge mdi:water-percent mdi:run-fast mdi:bell mdi:brightness-7 mdi:pipe-leak |
| Smoke Alarm | mdi:smoke-detector |
| Television  | mdi:television mdi:television-guide mdi:television-classic |
| Transport   | mdi:car mdi:car-side mdi:bus mdi:bus-school mdi:train mdi:gas-station mdi:ev-station |
| User        | mdi:account mdi:account-plus |
| Vaccum      | mdi:robot-vacuum |
| Video Games | mdi:xbox mdi:playstation mdi:gamepad mdi:gamepad-variant mdi:controller-classic mdi:controller-classic-outline mdi:xbox-controller mdi:xbox-controller-off mdi:google-controller mdi:google-controller-off |
| Weather     | mdi:weather-sunny mdi:weather-partly-cloudy mdi:weather-cloudy mdi:weather-rainy mdi:weather-pouring mdi:weather-snowy |
| Window      | mdi:window-closed mdi:window-open |
