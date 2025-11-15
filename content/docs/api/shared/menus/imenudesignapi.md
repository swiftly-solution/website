---
title: IMenuDesignAPI
---

```csharp
public interface IMenuDesignAPI
```

## Methods

### DisableAutoAdjustVisibleItems()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L51)

```csharp
IMenuBuilderAPI DisableAutoAdjustVisibleItems()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### EnableAutoAdjustVisibleItems()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L45)

```csharp
IMenuBuilderAPI EnableAutoAdjustVisibleItems()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

### SetDisabledColor(string?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L131)

```csharp
IMenuBuilderAPI SetDisabledColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#808080" for gray). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetDisabledColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L138)

```csharp
IMenuBuilderAPI SetDisabledColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The SwiftlyS2 native color to apply to disabled options.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetDisabledColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L145)

```csharp
IMenuBuilderAPI SetDisabledColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to disabled options.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetGlobalScrollStyle(MenuOptionScrollStyle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L61)

```csharp
IMenuBuilderAPI SetGlobalScrollStyle(MenuOptionScrollStyle style)
```

#### Parameters

- **style**: [MenuOptionScrollStyle](/docs/api/shared/menus/menuoptionscrollstyle) - The scroll style to apply globally.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

### SetMaxVisibleItems(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L35)

```csharp
IMenuBuilderAPI SetMaxVisibleItems(int count = 5)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The maximum visible item count. Valid range is 1-5. Default is 5.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

### SetMenuFooterColor(string?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L89)

```csharp
IMenuBuilderAPI SetMenuFooterColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FF0000" for red). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L96)

```csharp
IMenuBuilderAPI SetMenuFooterColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The SwiftlyS2 native color to apply to the footer.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L103)

```csharp
IMenuBuilderAPI SetMenuFooterColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the footer.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterVisible(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L24)

```csharp
IMenuBuilderAPI SetMenuFooterVisible(bool visible = true)
```

#### Parameters

- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to show the footer, false to hide it. Default is true.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuTitle(string?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L10)

```csharp
IMenuBuilderAPI SetMenuTitle(string? title = null)
```

#### Parameters

- **title**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The title text. Pass null to clear the title.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuTitleVisible(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L17)

```csharp
IMenuBuilderAPI SetMenuTitleVisible(bool visible = true)
```

#### Parameters

- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to show the title, false to hide it. Default is true.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(string?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L68)

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FFFFFF" for white). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L75)

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The SwiftlyS2 native color to apply to the navigation markers.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L82)

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the navigation markers.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(string?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L110)

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FFFFFF" for white). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L117)

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The SwiftlyS2 native color to apply to the guide lines.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L124)

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the guide lines.

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - The menu builder for method chaining.

