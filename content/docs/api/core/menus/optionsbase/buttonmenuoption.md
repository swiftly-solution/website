---
title: ButtonMenuOption
---

```csharp
public sealed class ButtonMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ButtonMenuOption(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ButtonMenuOption.cs#L16)

```csharp
public ButtonMenuOption(int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### ButtonMenuOption(string, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ButtonMenuOption.cs#L29)

```csharp
public ButtonMenuOption(string text, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

