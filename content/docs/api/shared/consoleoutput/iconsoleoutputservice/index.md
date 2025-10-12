---
title: Interface IConsoleOutputService
---

```csharp
public interface IConsoleOutputService
```

## Methods

### GetCounterText()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L51)

```csharp
string GetCounterText()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The counter text.

### IsFilterEnabled()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L28)

```csharp
bool IsFilterEnabled()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if filtering is enabled, false otherwise.

### NeedsFiltering(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L45)

```csharp
bool NeedsFiltering(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the message should be filtered, false otherwise.

### RegisterConsoleOutputListener(ConsoleOutputHandler)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L16)

```csharp
Guid RegisterConsoleOutputListener(IConsoleOutputService.ConsoleOutputHandler handler)
```

#### Parameters

- **handler**: [IConsoleOutputService](/docs/api/shared/consoleoutput/iconsoleoutputservice).[ConsoleOutputHandler](/docs/api/shared/consoleoutput/iconsoleoutputservice/consoleoutputhandler) - The handler to call when console output occurs.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A GUID that can be used to unregister the listener.

### ReloadFilterConfiguration()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L38)

```csharp
void ReloadFilterConfiguration()
```

### ToggleFilter()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L33)

```csharp
void ToggleFilter()
```

### UnregisterConsoleOutputListener(Guid)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L22)

```csharp
void UnregisterConsoleOutputListener(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The GUID returned from RegisterConsoleOutputListener.

### WriteToServerConsole(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/ConsoleOutput/IConsoleOutputService.cs#L57)

```csharp
void WriteToServerConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message

