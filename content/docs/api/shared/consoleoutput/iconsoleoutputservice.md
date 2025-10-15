---
title: IConsoleOutputService
---

```csharp
public interface IConsoleOutputService
```

## Methods

### GetCounterText()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L51)

```csharp
string GetCounterText()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The counter text.

### IsFilterEnabled()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L28)

```csharp
bool IsFilterEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if filtering is enabled, false otherwise.

### NeedsFiltering(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L45)

```csharp
bool NeedsFiltering(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the message should be filtered, false otherwise.

### ReloadFilterConfiguration()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L38)

```csharp
void ReloadFilterConfiguration()
```

### ToggleFilter()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L33)

```csharp
void ToggleFilter()
```

### WriteToServerConsole(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L57)

```csharp
void WriteToServerConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message

