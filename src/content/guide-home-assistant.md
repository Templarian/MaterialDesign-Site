# Home Assistant Guide

## Home Assistant

[Home Assistant](https://www.home-assistant.io/) is an open-source home automation platform running on Python. Home Assistant provides a clean, Material-based UI to control all of your connected devices in one place.

## How to use Material Design Icons in Home Assistant

Most entities in Home Assistant have default icons already set. For example, all `light` entities use [`lightbulb`](http://materialdesignicons.com/icon/lightbulb).

On any entities that allow the `icon` configuration variable, you can provide the name of any Material Design Icon by simply prefixing the icon name with `mdi:`.

```yaml
switch.front_yard:
  friendly_name: Front Yard Sprinklers
  icon: \mdi:sprinkler
```

For more information on customizing entities in Home Assistant, [see their official documentation](https://www.home-assistant.io/docs/configuration/customizing-devices/).

## Common Home-based Icons

Below we have currated a list of commonly used icons in Home Assistant.

| Category         | Icons |
|------------------|-------|
| Logo             | mdi:home-assistant |
| Home             | mdi:home mdi:home-modern mdi:caravan mdi:rv-truck mdi:sail-boat mdi:floor-plan mdi:home-outline mdi:home-variant mdi:home-variant-outline mdi:home-automation mdi:home-analytics mdi:home-alert mdi:home-account mdi:home-heart mdi:home-map-marker mdi:home-thermometer mdi:home-thermometer-outline mdi:home-lock mdi:home-lock-open mdi:home-floor-b mdi:home-floor-negative-1 mdi:home-floor-g mdi:home-floor-0 mdi:home-floor-1 mdi:home-floor-2 mdi:home-floor-3 mdi:home-floor-l mdi:home-floor-a |
| Lighting         | mdi:lightbulb mdi:lightbulb-outline mdi:lamp mdi:ceiling-light mdi:floor-lamp mdi:floor-lamp-dual mdi:floor-lamp-variant mdi:desk-lamp mdi:wall-sconce mdi:wall-sconce-variant mdi:wall-sconce-flat mdi:track-light mdi:led-strip mdi:coach-lamp mdi:outdoor-lamp mdi:light-switch mdi:lava-lamp mdi:vanity-light mdi:led-off mdi:led-outline |
| Power            | mdi:power-plug mdi:power-socket-us mdi:power-socket-eu mdi:power-socket-uk mdi:power-socket-fr mdi:power-socket-de mdi:power-socket-au mdi:power-socket-jp mdi:power-socket |
| HVAC             | mdi:thermostat mdi:thermostat-box mdi:water-boiler mdi:water-boiler-alert mdi:air-purifier mdi:air-humidifier mdi:air-conditioner mdi:radiator mdi:radiator-disabled mdi:fireplace mdi:fireplace-off mdi:patio-heater |
| Fan              | mdi:fan mdi:fan-off |
| Audio            | mdi:speaker mdi:speaker-multiple mdi:speaker-wireless mdi:radio mdi:amplifier mdi:boombox mdi:record-player |
| Television       | mdi:television mdi:television-classic mdi:set-top-box mdi:disc-player mdi:audio-video mdi:projector mdi:projector-screen |
| Security         | mdi:lock-smart mdi:lock mdi:lock-outline mdi:lock-open mdi:lock-open-outline mdi:gate mdi:gate-open mdi:gate-arrow-right mdi:shield-lock mdi:shield-lock-outline mdi:alarm-bell mdi:alarm-light mdi:alarm-light-outline |
| Doorbell         | mdi:doorbell-video mdi:bell mdi:bell-outline mdi:bell-ring mdi:bell-ring-outline |
| Camera           | mdi:cctv mdi:webcam mdi:camera mdi:camera-outline mdi:video mdi:video-outline mdi:video-wireless mdi:video-wireless-outline |
| Sensors          | mdi:thermometer mdi:thermometer-lines mdi:water-percent mdi:run-fast mdi:motion-sensor mdi:flash mdi:flash-outline mdi:flash-circle mdi:white-balance-sunny mdi:pipe-leak mdi:gauge  |
| Window           | mdi:window-closed mdi:window-open mdi:window-closed-variant mdi:window-open-variant mdi:blinds mdi:blinds-open mdi:window-shutter mdi:window-shutter-open mdi:window-shutter-alert |
| Door             | mdi:door mdi:door-closed mdi:door-open mdi:door-closed-lock |
| Garage           | mdi:garage mdi:garage-open mdi:garage-alert |
| Kitchen          | mdi:fridge mdi:fridge-bottom mdi:fridge-top mdi:fridge-outline mdi:stove mdi:microwave mdi:toaster-oven mdi:washing-machine mdi:tumble-dryer mdi:dishwasher mdi:coffee-maker mdi:toaster mdi:kettle mdi:kettle-outline mdi:water-pump |
| Bedroom          | mdi:bed mdi:bed-empty mdi:bed-king mdi:bed-king-outline mdi:bed-queen mdi:bed-queen-outline mdi:bed-double mdi:bed-double-outline mdi:bed-single mdi:bed-single-outline |
| Bathroom         | mdi:shower mdi:toilet mdi:scale-bathroom |
| Garden           | mdi:sprinkler mdi:sprinkler-variant |
| Vacuum           | mdi:robot-vacuum mdi:robot-vacuum-variant |
| Lawn Mower       | mdi:robot-mower mdi:robot-mower-outline |
| Energy           | mdi:solar-power mdi:solar-panel mdi:solar-panel-large |
| Car              | mdi:car mdi:car-electric mdi:car-key mdi:car-connected mdi:car-side mdi:car-hatchback mdi:car-estate mdi:car-convertible mdi:car-pickup mdi:car-sports mdi:bugle mdi:car-door mdi:car-door-lock mdi:car-defrost-front mdi:car-defrost-rear mdi:gas-station mdi:ev-station |
| Computer         | mdi:laptop mdi:laptop-windows mdi:laptop-mac mdi:laptop-chromebook mdi:monitor mdi:monitor-multiple mdi:monitor-speaker mdi:desktop-tower mdi:desktop-mac mdi:desktop-classic mdi:desktop-tower-monitor |
| Printer          | mdi:printer mdi:printer-wireless mdi:printer-3d mdi:printer-alert mdi:printer-3d-nozzle mdi:printer-3d-nozzle-outline mdi:printer-3d-nozzle-alert mdi:printer-3d-nozzle-alert-outline  |
| Remote           | mdi:remote-tv mdi:remote mdi:power mdi:play mdi:pause mdi:play-pause mdi:stop mdi:skip-previous mdi:skip-next mdi:skip-backward mdi:skip-forward mdi:record mdi:record-rec mdi:volume-high mdi:volume-off mdi:volume-plus mdi:volume-minus mdi:volume-medium mdi:volume-low mdi:arrow-up mdi:arrow-right mdi:arrow-down mdi:arrow-left mdi:checkbox-blank-circle-outline mdi:keyboard-return mdi:gamepad mdi:dolby mdi:surround-sound mdi:microsoft-xbox-controller-view mdi:microsoft-xbox-controller-menu |
| Smoke Alarm      | mdi:smoke-detector |
| Health           | mdi:scale-bathroom mdi:heart-pulse mdi:walk mdi:google-fit mdi:shoe-print |
| Cast             | mdi:cast mdi:cast-off mdi:cast-connected mdi:cast-audio mdi:google-chrome mdi:apple-airplay |
| Furniture        | mdi:cupboard mdi:cupboard-outline mdi:dresser mdi:dresser-outline mdi:wardrobe mdi:wardrobe-outline mdi:table-chair
| Video Games      | mdi:nintendo-switch mdi:sony-playstation mdi:xbox mdi:google-controller mdi:microsoft-xbox-controller mdi:gamepad-square mdi:gamepad-square-outline mdi:gamepad-variant mdi:gamepad-variant-outline mdi:controller-classic mdi:controller-classic-outline |
| Battery          | mdi:battery mdi:battery-charging mdi:battery-unknown mdi:battery-alert mdi:battery-outline mdi:battery-10 mdi:battery-20 mdi:battery-30 mdi:battery-40 mdi:battery-50 mdi:battery-60 mdi:battery-70 mdi:battery-80 mdi:battery-90 mdi:battery-charging-20 mdi:battery-charging-30 mdi:battery-charging-40 mdi:battery-charging-60 mdi:battery-charging-80 mdi:battery-charging-90 mdi:battery-charging-100 mdi:battery-charging-wireless-outline mdi:battery-charging-wireless-10 mdi:battery-charging-wireless-20 mdi:battery-charging-wireless-30 mdi:battery-charging-wireless-40 mdi:battery-charging-wireless-50 mdi:battery-charging-wireless-60 mdi:battery-charging-wireless-70 mdi:battery-charging-wireless-80 mdi:battery-charging-wireless-90 mdi:battery-charging-wireless mdi:battery-charging-wireless-alert mdi:battery-plus mdi:battery-minus mdi:battery-positive mdi:battery-negative |
| Assistants       | mdi:google-home mdi:amazon-alexa |
| Public Transport | mdi:bus mdi:bus-side mdi:bus-double-decker mdi:bus-school mdi:bus-articulated-front mdi:train mdi:train-variant mdi:subway-variant mdi:subway mdi:car-multiple mdi:train-car mdi:airplane mdi:gondola |
