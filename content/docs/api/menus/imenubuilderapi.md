---
title: IMenuBuilderAPI
---

# Interface IMenuBuilderAPI

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L7)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Provides a fluent builder interface for creating and configuring menus.
All methods support chaining for convenient menu construction.

```csharp
public interface IMenuBuilderAPI
```

## Properties

### Design

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L12)

Gets the design interface for this menu.

```csharp
IMenuDesignAPI Design { get; }
```

#### Property Value

- [IMenuDesignAPI](/docs/api/menus/imenudesignapi)

## Methods

### AddOption(IMenuOption)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L26)

Adds a menu option to the menu.

```csharp
IMenuBuilderAPI AddOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/menus/imenuoption) - The menu option to add.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### BindToParent(IMenuAPI)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L19)

Binds this menu to a parent menu, creating a hierarchical navigation structure.

```csharp
IMenuBuilderAPI BindToParent(IMenuAPI parent)
```

#### Parameters

- **parent**: [IMenuAPI](/docs/api/menus/imenuapi) - The parent menu.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### Build()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L118)

Builds the menu and returns the final menu instance.

```csharp
IMenuAPI Build()
```

#### Returns

- [IMenuAPI](/docs/api/menus/imenuapi) - The built menu instance.

### DisableExit()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L50)

Disables the exit button for this menu.

```csharp
IMenuBuilderAPI DisableExit()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### DisableSound()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L38)

Disables sound effects for menu interactions.

```csharp
IMenuBuilderAPI DisableSound()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### EnableExit()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L44)

Enables the exit button for this menu.

```csharp
IMenuBuilderAPI EnableExit()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### EnableSound()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L32)

Enables sound effects for menu interactions.

```csharp
IMenuBuilderAPI EnableSound()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### SetAutoCloseDelay(float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L64)

Sets the automatic close delay for the menu.

```csharp
IMenuBuilderAPI SetAutoCloseDelay(float seconds = 0)
```

#### Parameters

- **seconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Time in seconds before the menu automatically closes. Set to 0 to disable auto-close. Default is 0.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### SetExitButton(KeyBind)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L112)

Overrides the default key binding for closing the menu.

```csharp
IMenuBuilderAPI SetExitButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

This overrides the default exit button behavior.
Supports multiple key bindings using the bitwise OR operator.
Example: <code>KeyBind.Esc | KeyBind.A</code> allows either Esc or A to close the menu.

### SetMoveBackwardButton(KeyBind)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L100)

Overrides the default key binding for moving backward through menu options.

```csharp
IMenuBuilderAPI SetMoveBackwardButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

This overrides the default move backward button behavior.
Supports multiple key bindings using the bitwise OR operator.
Example: <code>KeyBind.S | KeyBind.Mouse2</code> allows either S or Mouse2 to move backward.

### SetMoveForwardButton(KeyBind)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L88)

Overrides the default key binding for moving forward through menu options.

```csharp
IMenuBuilderAPI SetMoveForwardButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

This overrides the default move forward button behavior.
Supports multiple key bindings using the bitwise OR operator.
Example: <code>KeyBind.W | KeyBind.Mouse1</code> allows either W or Mouse1 to move forward.

### SetPlayerFrozen(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L57)

Controls whether player movement is frozen while the menu is open.

```csharp
IMenuBuilderAPI SetPlayerFrozen(bool frozen = false)
```

#### Parameters

- **frozen**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to freeze player movement, false to allow movement. Default is false.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

### SetSelectButton(KeyBind)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L76)

Overrides the default key binding for selecting menu options.

```csharp
IMenuBuilderAPI SetSelectButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

This overrides the default select button behavior.
Supports multiple key bindings using the bitwise OR operator.
Example: <code>KeyBind.Mouse1 | KeyBind.E</code> allows either Mouse1 or E to select options.

