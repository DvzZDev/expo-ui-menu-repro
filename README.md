# Expo UI Menu scroll header repro

Minimal reproduction for a native iOS 27 rendering glitch in a nested SwiftUI `Menu`.

## Run

```sh
npm install
npx expo run:ios
```

Use Xcode 27 with an iOS 27 simulator or device.

## Steps

1. Tap `Open menu`.
2. Open the `Items` submenu.
3. Scroll down inside the submenu.
4. Toggle any item.

## Expected

The submenu header and the menu platter stay opaque. Scrolled rows are clipped below the submenu title.

## Actual

After scrolling, toggling an item makes the submenu header/platter transparent for a moment. The scrolled row draws above the `Items` title and the content behind the menu shows through.

The issue does not happen when the submenu has not been scrolled.

## Environment

- Expo `~58.0.16`
- `@expo/ui` `~58.0.21`
- `react-native` `0.88.0`
- Xcode 27.0, iOS 27
- New Architecture

## Notes

- `menuActionDismissBehavior("disabled")` keeps the submenu open after toggling; without it the menu closes and the glitch is not visible.
- The repro is only a centered `Menu` button and a nested `Items` submenu.
