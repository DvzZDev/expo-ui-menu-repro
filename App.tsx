import { Host } from "@expo/ui"
import { Menu, Toggle } from "@expo/ui/swift-ui"
import { menuActionDismissBehavior } from "@expo/ui/swift-ui/modifiers"
import { useState } from "react"
import { View } from "react-native"

const ITEMS = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`)

export default function App() {
  const [enabled, setEnabled] = useState(() => ITEMS.map(() => true))

  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <Host matchContents>
        <Menu label="Open menu">
          <Menu label="Items" systemImage="square.grid.2x2">
            {ITEMS.map((item, index) => (
              <Toggle
                isOn={enabled[index]}
                key={item}
                label={item}
                modifiers={[menuActionDismissBehavior("disabled")]}
                onIsOnChange={(on) =>
                  setEnabled((current) => current.map((value, itemIndex) => (itemIndex === index ? on : value)))
                }
              />
            ))}
          </Menu>
        </Menu>
      </Host>
    </View>
  )
}
