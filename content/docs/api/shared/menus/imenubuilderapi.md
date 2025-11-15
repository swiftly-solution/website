---
title: IMenuBuilderAPI
---

```csharp
public interface IMenuBuilderAPI
```

## Properties

### Design

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L12)

```csharp
IMenuDesignAPI Design { get; }
```

#### Property Value

- [IMenuDesignAPI](/docs/api/shared/menus/imenudesignapi)

## Methods

### AddOption(IMenuOption)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L26)

```csharp
IMenuBuilderAPI AddOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/shared/menus/imenuoption) - The menu option to add.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### BindToParent(IMenuAPI)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L19)

```csharp
IMenuBuilderAPI BindToParent(IMenuAPI parent)
```

#### Parameters

- **parent**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The parent menu.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### Build()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L106)

```csharp
IMenuAPI Build()
```

#### Returns

- [IMenuAPI](/docs/api/shared/menus/imenuapi) - The built menu instance.

### DisableSound()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L38)

```csharp
IMenuBuilderAPI DisableSound()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### EnableSound()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L32)

```csharp
IMenuBuilderAPI EnableSound()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### SetAutoCloseDelay(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L52)

```csharp
IMenuBuilderAPI SetAutoCloseDelay(float seconds = 0)
```

#### Parameters

- **seconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Time in seconds before the menu automatically closes. Set to 0 to disable auto-close. Default is 0.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### SetExitButton(KeyBind)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L100)

```csharp
IMenuBuilderAPI SetExitButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/shared/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

### SetMoveBackwardButton(KeyBind)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L88)

```csharp
IMenuBuilderAPI SetMoveBackwardButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/shared/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

### SetMoveForwardButton(KeyBind)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L76)

```csharp
IMenuBuilderAPI SetMoveForwardButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/shared/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

### SetPlayerFrozen(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L45)

```csharp
IMenuBuilderAPI SetPlayerFrozen(bool frozen = false)
```

#### Parameters

- **frozen**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to freeze player movement, false to allow movement. Default is false.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

### SetSelectButton(KeyBind)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilderAPI.cs#L64)

```csharp
IMenuBuilderAPI SetSelectButton(KeyBind keyBind)
```

#### Parameters

- **keyBind**: [KeyBind](/docs/api/shared/menus/keybind) - The key binding to use.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - This builder for method chaining.

#### Remarks

