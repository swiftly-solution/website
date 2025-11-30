---
title: IMenuDesignAPI
---

# Interface IMenuDesignAPI

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IMenuDesignAPI
```

## Methods

### DisableAutoAdjustVisibleItems()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L51)

Disables automatic adjustment of visible items when title or footer is hidden.

```csharp
IMenuBuilderAPI DisableAutoAdjustVisibleItems()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### EnableAutoAdjustVisibleItems()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L45)

Enables automatic adjustment of visible items when title or footer is hidden.

```csharp
IMenuBuilderAPI EnableAutoAdjustVisibleItems()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

When enabled, hiding the title or footer will increase the effective visible item count
during rendering without modifying the configured <xref href="SwiftlyS2.Shared.Menus.IMenuDesignAPI.SetMaxVisibleItems(System.Int32)" data-throw-if-not-resolved="false"></xref> value.

### SetDisabledColor(string?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L131)

Sets the color of disabled menu options using hex color format.

```csharp
IMenuBuilderAPI SetDisabledColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#808080" for gray). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetDisabledColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L138)

Sets the color of disabled menu options using SwiftlyS2 native color.

```csharp
IMenuBuilderAPI SetDisabledColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/natives/color) - The SwiftlyS2 native color to apply to disabled options.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetDisabledColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L145)

Sets the color of disabled menu options using System.Drawing color.

```csharp
IMenuBuilderAPI SetDisabledColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to disabled options.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetGlobalScrollStyle(MenuOptionScrollStyle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L61)

Sets the default scroll animation style for all menu options.

```csharp
IMenuBuilderAPI SetGlobalScrollStyle(MenuOptionScrollStyle style)
```

#### Parameters

- **style**: [MenuOptionScrollStyle](/docs/api/menus/menuoptionscrollstyle) - The scroll style to apply globally.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

Individual options can override this global setting.

### SetMaxVisibleItems(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L35)

Sets the maximum number of menu options visible on screen at once.

```csharp
IMenuBuilderAPI SetMaxVisibleItems(int count = 5)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The maximum visible item count. Valid range is 1-5. Default is 5.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

#### Remarks

Values outside the range of 1-5 will be automatically clamped to the nearest valid value.
Menus with more options than this limit will be paginated.

### SetMenuFooterColor(string?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L89)

Sets the color of the menu footer using hex color format.

```csharp
IMenuBuilderAPI SetMenuFooterColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FF0000" for red). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L96)

Sets the color of the menu footer using SwiftlyS2 native color.

```csharp
IMenuBuilderAPI SetMenuFooterColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/natives/color) - The SwiftlyS2 native color to apply to the footer.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L103)

Sets the color of the menu footer using System.Drawing color.

```csharp
IMenuBuilderAPI SetMenuFooterColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the footer.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuFooterVisible(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L24)

Controls the visibility of the menu footer.

```csharp
IMenuBuilderAPI SetMenuFooterVisible(bool visible = true)
```

#### Parameters

- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to show the footer, false to hide it. Default is true.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuTitle(string?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L10)

Sets the title text displayed at the top of the menu.

```csharp
IMenuBuilderAPI SetMenuTitle(string? title = null)
```

#### Parameters

- **title**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The title text. Pass null to clear the title.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetMenuTitleVisible(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L17)

Controls the visibility of the menu title.

```csharp
IMenuBuilderAPI SetMenuTitleVisible(bool visible = true)
```

#### Parameters

- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to show the title, false to hide it. Default is true.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(string?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L68)

Sets the color of the navigation markers using hex color format.

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FFFFFF" for white). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L75)

Sets the color of the navigation markers using SwiftlyS2 native color.

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/natives/color) - The SwiftlyS2 native color to apply to the navigation markers.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetNavigationMarkerColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L82)

Sets the color of the navigation markers using System.Drawing color.

```csharp
IMenuBuilderAPI SetNavigationMarkerColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the navigation markers.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(string?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L110)

Sets the color of the visual guide lines using hex color format.

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(string? hexColor = null)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The color in hex format (e.g., "#FFFFFF" for white). Pass null to reset to default.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L117)

Sets the color of the visual guide lines using SwiftlyS2 native color.

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/natives/color) - The SwiftlyS2 native color to apply to the guide lines.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

### SetVisualGuideLineColor(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuDesignAPI.cs#L124)

Sets the color of the visual guide lines using System.Drawing color.

```csharp
IMenuBuilderAPI SetVisualGuideLineColor(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The System.Drawing color to apply to the guide lines.

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - The menu builder for method chaining.

