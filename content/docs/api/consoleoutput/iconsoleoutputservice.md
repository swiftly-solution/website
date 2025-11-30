---
title: IConsoleOutputService
---

# Interface IConsoleOutputService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L3)

**Namespace**: [SwiftlyS2.Shared.ConsoleOutput](/docs/api/consoleoutput)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IConsoleOutputService
```

## Methods

### GetCounterText()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L51)

Gets the counter text showing how many messages were filtered.

```csharp
string GetCounterText()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The counter text.

### IsFilterEnabled()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L28)

Gets whether console filtering is enabled.

```csharp
bool IsFilterEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if filtering is enabled, false otherwise.

### NeedsFiltering(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L45)

Checks if a message needs filtering.

```csharp
bool NeedsFiltering(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the message should be filtered, false otherwise.

### ReloadFilterConfiguration()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L38)

Reloads the filter configuration from file.

```csharp
void ReloadFilterConfiguration()
```

### ToggleFilter()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L33)

Toggles the console filter on/off.

```csharp
void ToggleFilter()
```

### WriteToServerConsole(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L57)

Writes a message to the server console using the tier0 logging system.

```csharp
void WriteToServerConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message

