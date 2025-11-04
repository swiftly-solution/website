---
title: IMenuDesign
---

```csharp
public interface IMenuDesign
```

## Methods

### MaxVisibleItems(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L42)

```csharp
IMenuDesign MaxVisibleItems(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The maximum number of visible items.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

#### Remarks

### OverrideExitButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L29)

```csharp
IMenuDesign OverrideExitButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for exiting.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

### OverrideMoveButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L21)

```csharp
IMenuDesign OverrideMoveButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for movement.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

### OverrideSelectButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L13)

```csharp
IMenuDesign OverrideSelectButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for selection.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

### SetColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L50)

```csharp
IMenuDesign SetColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The color to use for menu rendering.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

### SetGlobalHorizontalStyle(MenuHorizontalStyle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L65)

```csharp
IMenuDesign SetGlobalHorizontalStyle(MenuHorizontalStyle style)
```

#### Parameters

- **style**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle) - The global horizontal style to apply.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

### SetVerticalScrollStyle(MenuVerticalScrollStyle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesign.cs#L57)

```csharp
IMenuDesign SetVerticalScrollStyle(MenuVerticalScrollStyle style)
```

#### Parameters

- **style**: [MenuVerticalScrollStyle](/docs/api/shared/menus/menuverticalscrollstyle) - The vertical scroll style to use.

#### Returns

- [IMenuDesign](/docs/api/shared/menus/imenudesign) - The current menu design instance for method chaining.

