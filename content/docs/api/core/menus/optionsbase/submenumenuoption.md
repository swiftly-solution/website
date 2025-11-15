---
title: SubmenuMenuOption
---

```csharp
public sealed class SubmenuMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### SubmenuMenuOption(IMenuAPI, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L28)

```csharp
public SubmenuMenuOption(IMenuAPI submenu, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **submenu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The submenu to open when this option is clicked.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### SubmenuMenuOption(string, IMenuAPI, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L45)

```csharp
public SubmenuMenuOption(string text, IMenuAPI submenu, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **submenu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The submenu to open when this option is clicked.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

### SubmenuMenuOption(Func, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L63)

```csharp
public SubmenuMenuOption(Func<IMenuAPI> submenuBuilder, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenuAPI](/docs/api/shared/menus/imenuapi)> - Function that builds and returns the submenu.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### SubmenuMenuOption(string, Func, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L80)

```csharp
public SubmenuMenuOption(string text, Func<IMenuAPI> submenuBuilder, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenuAPI](/docs/api/shared/menus/imenuapi)> - Function that builds and returns the submenu.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

### SubmenuMenuOption(Func>, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L98)

```csharp
public SubmenuMenuOption(Func<Task<IMenuAPI>> submenuBuilderAsync, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **submenuBuilderAsync**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IMenuAPI](/docs/api/shared/menus/imenuapi)>> - Async function that builds and returns the submenu.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### SubmenuMenuOption(string, Func>, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SubmenuMenuOption.cs#L115)

```csharp
public SubmenuMenuOption(string text, Func<Task<IMenuAPI>> submenuBuilderAsync, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **submenuBuilderAsync**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IMenuAPI](/docs/api/shared/menus/imenuapi)>> - Async function that builds and returns the submenu.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

