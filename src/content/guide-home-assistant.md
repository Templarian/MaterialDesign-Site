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
| Logos            | mdi:home-assistant mdi:amazon-alexa mdi:google-assistant mdi:apple mdi:zigbee mdi:z-wave |
| Home             | mdi:home mdi:home-outline mdi:home-variant mdi:home-variant-outline mdi:home-modern mdi:caravan mdi:rv-truck mdi:sail-boat mdi:submarine mdi:floor-plan |
| Home Modifiers   | mdi:home-account mdi:home-alert mdi:home-alert-outline mdi:home-analytics mdi:home-automation mdi:home-floor-b mdi:home-floor-negative-1 mdi:home-floor-g mdi:home-floor-0 mdi:home-floor-1 mdi:home-floor-2 mdi:home-floor-3 mdi:home-floor-l mdi:home-floor-a mdi:home-heart mdi:lightbulb mdi:lightbulb-outline mdi:home-lock mdi:home-lock-open mdi:home-map-marker mdi:home-thermometer mdi:home-thermometer-outline mdi:home-flood |
| Lighting         | mdi:light-switch mdi:lightbulb mdi:lightbulb-outline mdi:lightbulb-cfl mdi:lightbulb-cfl-spiral mdi:lightbulb-multiple mdi:lightbulb-multiple-outline mdi:lightbulb-group mdi:lightbulb-group-outline mdi:led-strip mdi:lamp mdi:ceiling-light mdi:globe-light mdi:floor-lamp mdi:floor-lamp-dual mdi:floor-lamp-variant mdi:desk-lamp mdi:lamps mdi:wall-sconce mdi:wall-sconce-variant mdi:wall-sconce-flat mdi:wall-sconce-flat-variant mdi:wall-sconce-round mdi:wall-sconce-round-variant mdi:dome-light mdi:track-light mdi:coach-lamp mdi:outdoor-lamp mdi:vanity-light mdi:string-lights mdi:lava-lamp mdi:television-ambient-light mdi:led-off mdi:led-outline |
| Power            | mdi:power-plug mdi:power-plug-outline mdi:power-socket-us mdi:power-socket-eu mdi:power-socket-uk mdi:power-socket-fr mdi:power-socket-de mdi:power-socket-it mdi:power-socket-au mdi:power-socket-jp mdi:power-socket mdi:transmission-tower mdi:solar-power mdi:wind-turbine mdi:hydro-power mdi:solar-panel mdi:solar-panel-large |
| HVAC             | mdi:thermostat mdi:thermostat-box mdi:water-boiler mdi:water-boiler-alert  mdi:air-conditioner mdi:air-purifier mdi:air-humidifier mdi:hvac mdi:radiator mdi:radiator-disabled mdi:fireplace mdi:fireplace-off mdi:patio-heater |
| Fan              | mdi:fan mdi:fan-off mdi:fan-chevron-down mdi:fan-chevron-up mdi:fan-speed-1 mdi:fan-speed-2 mdi:fan-speed-3 |
| Audio            | mdi:speaker mdi:speaker-multiple mdi:speaker-wireless mdi:speaker-bluetooth mdi:radio mdi:amplifier mdi:boombox mdi:record-player mdi:google-home |
| Television       | mdi:television mdi:television-classic mdi:set-top-box mdi:disc-player mdi:audio-video mdi:projector mdi:projector-screen |
| Inputs           | mdi:video-input-hdmi mdi:video-input-scart mdi:video-input-component mdi:serial-port mdi:video-input-svideo mdi:toslink mdi:video-input-antenna mdi:usb-port mdi:cable-data |
| Security         | mdi:lock mdi:lock-outline mdi:lock-open mdi:lock-open-outline mdi:lock-open-varaint mdi:lock-open-variant-outline mdi:lock-smart mdi:alarm-panel mdi:alarm-panel-outline mdi:gate mdi:gate-open mdi:gate-arrow-right mdi:shield-lock mdi:shield-lock-outline mdi:alarm-bell mdi:alarm-light mdi:alarm-light-outline |
| Door             | mdi:door mdi:door-closed mdi:door-open mdi:door-closed-lock |
| Window           | mdi:window-closed mdi:window-open mdi:window-closed-variant mdi:window-open-variant mdi:blinds mdi:blinds-open mdi:window-shutter mdi:window-shutter-open mdi:window-shutter-alert |
| Camera           | mdi:cctv mdi:webcam mdi:camera mdi:camera-outline mdi:video mdi:video-outline mdi:video-wireless mdi:video-wireless-outline |
| Doorbell         | mdi:doorbell-video mdi:doorbell mdi:bell mdi:bell-outline mdi:bell-ring mdi:bell-ring-outline |
| Sensors          | mdi:thermometer mdi:thermometer-lines mdi:water-percent mdi:run-fast mdi:motion-sensor mdi:brightness-6 mdi:flash mdi:flash-outline mdi:flash-circle mdi:white-balance-sunny mdi:waves mdi:pipe-leak mdi:gauge mdi:speedometer mdi:speedometer-medium mdi:speedometer-slow |
| Garage           | mdi:garage mdi:garage-open mdi:garage-alert mdi:garage-variant mdi:garage-open-variant mdi:garage-alert-variant |
| Kitchen          | mdi:fridge mdi:fridge-outline mdi:fridge-bottom mdi:fridge-top mdi:fridge-variant mdi:fridge-variant-outline mdi:fridge-industrial mdi:fridge-industrial-outline mdi:stove mdi:microwave mdi:toaster-oven mdi:washing-machine mdi:tumble-dryer mdi:dishwasher mdi:coffee-maker mdi:toaster mdi:kettle mdi:kettle-outline mdi:blender mdi:water-pump |
| Bedroom          | mdi:bed mdi:bed-outline mdi:bed-empty mdi:bed-king mdi:bed-king-outline mdi:bed-queen mdi:bed-queen-outline mdi:bed-double mdi:bed-double-outline mdi:bed-single mdi:bed-single-outline mdi:bunk-bed mdi:bunk-bed-outline |
| Bathroom         | mdi:shower mdi:toilet mdi:water-pump mdi:scale-bathroom mdi:toothbrush-electric |
| Garden           | mdi:sprinkler mdi:sprinkler-variant mdi:robot-mower mdi:robot-mower-outline mdi:patio-heater |
| Vacuum           | mdi:robot-vacuum mdi:robot-vacuum-variant |
| Vehicle          | mdi:car mdi:car-outline mdi:car-electric mdi:car-electric-outline mdi:car-key mdi:car-connected mdi:car-side mdi:car-hatchback mdi:car-estate mdi:car-convertible mdi:car-sports mdi:car-pickup mdi:car-lifted-pickup mdi:van-utility mdi:van-passenger mdi:truck mdi:tractor mdi:motorbike mdi:motorbike-electric mdi:moped mdi:moped-outline mdi:moped-electric mdi:mopen-electric-outline mdi:bike mdi:bicycle mdi:bicycle-basket mdi:bicycle-electric mdi:bicycle-penny-farthing mdi:scooter mdi:scooter-electric mdi:bugle mdi:car-door mdi:car-battery mdi:car-door-lock mdi:car-defrost-front mdi:car-defrost-rear mdi:car-seat mdi:car-seat-heater mdi:car-seat-cooler mdi:gas-station mdi:ev-station |
| Computer         | mdi:laptop mdi:laptop-windows mdi:laptop-mac mdi:laptop-chromebook mdi:monitor mdi:monitor-multiple mdi:monitor-lock mdi:monitor-speaker mdi:desktop-tower mdi:desktop-mac mdi:desktop-classic mdi:desktop-tower-monitor |
| Printer          | mdi:printer mdi:printer-alert mdi:printer-wireless mdi:printer-3d mdi:printer-3d-nozzle mdi:printer-3d-nozzle-outline mdi:printer-3d-nozzle-alert mdi:printer-3d-nozzle-alert-outline mdi:printer-pos |
| Remote           | mdi:remote-tv mdi:remote mdi:power mdi:play mdi:pause mdi:play-pause mdi:stop mdi:skip-previous mdi:skip-next mdi:skip-backward mdi:skip-forward mdi:record mdi:record-rec mdi:volume-high mdi:volume-off mdi:volume-plus mdi:volume-minus mdi:volume-medium mdi:volume-low mdi:arrow-up mdi:arrow-right mdi:arrow-down mdi:arrow-left mdi:checkbox-blank-circle-outline mdi:keyboard-return mdi:gamepad mdi:dolby mdi:surround-sound mdi:youtube mdi:netflix mdi:amazon mdi:kodi mdi:twitch mdi:emby mdi:plex mdi:hulu mdi:apple mdi:microsoft-xbox-controller-view mdi:microsoft-xbox-controller-menu |
| Smoke Alarm      | mdi:smoke-detector |
| Health           | mdi:scale-bathroom mdi:weight mdi:weight-kilogram mdi:weight-pound mdi:heart mdi:heart-pulse mdi:shoe-print mdi:walk mdi:stairs mdi:fire mdi:silverware-fork-knife mdi:map-marker mdi:map-marker-distance mdi:elevation-rise mdi:cup mdi:cup-water mdi:google-fit |
| Cast             | mdi:cast mdi:cast-off mdi:cast-connected mdi:cast-audio mdi:google-chrome mdi:apple-airplay |
| Furniture        | mdi:cupboard mdi:cupboard-outline mdi:dresser mdi:dresser-outline mdi:wardrobe mdi:wardrobe-outline mdi:table-furniture mdi:table-chair mdi:desk mdi:seat mdi:seat-outline mdi:chair-rolling mdi:sofa-single mdi:sofa-single-outline mdi:sofa mdi:sofa-outline |
| Video Games      | mdi:nintendo-switch mdi:sony-playstation mdi:microsoft-xbox mdi:steam mdi:google-controller mdi:microsoft-xbox-controller mdi:gamepad-square mdi:gamepad-square-outline mdi:gamepad-variant mdi:gamepad-variant-outline mdi:controller-classic mdi:controller-classic-outline mdi:nintendo-game-boy |
| Battery          | mdi:battery mdi:battery-charging mdi:battery-unknown mdi:battery-alert mdi:battery-outline mdi:battery-10 mdi:battery-20 mdi:battery-30 mdi:battery-40 mdi:battery-50 mdi:battery-60 mdi:battery-70 mdi:battery-80 mdi:battery-90 mdi:battery-charging-20 mdi:battery-charging-30 mdi:battery-charging-40 mdi:battery-charging-60 mdi:battery-charging-80 mdi:battery-charging-90 mdi:battery-charging-100 mdi:battery-charging-wireless-outline mdi:battery-charging-wireless-10 mdi:battery-charging-wireless-20 mdi:battery-charging-wireless-30 mdi:battery-charging-wireless-40 mdi:battery-charging-wireless-50 mdi:battery-charging-wireless-60 mdi:battery-charging-wireless-70 mdi:battery-charging-wireless-80 mdi:battery-charging-wireless-90 mdi:battery-charging-wireless mdi:battery-charging-wireless-alert mdi:battery-plus mdi:battery-minus mdi:battery-positive mdi:battery-negative | |
| Public Transport | mdi:bus mdi:bus-clock mdi:bus-alert mdi:bus-marker mdi:bus-side mdi:bus-double-decker mdi:bus-school mdi:bus-articulated-front mdi:train mdi:train-variant mdi:subway-variant mdi:subway mdi:train-car mdi:car-multiple mdi:taxi mdi:tram mdi:tram-side mdi:ferry mdi:airplane mdi:rickshaw mdi:gondola mdi:jeepney |
| Celebrations     | mdi:pine-tree mdi:candycane mdi:egg-easter mdi:firework mdi:pumpkin mdi:halloween mdi:glass-mug-variant mdi:campfire mdi:balloon |
