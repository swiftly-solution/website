---
title: IEngineService
---

```csharp
public interface IEngineService
```

## Properties

### CurrentTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L52)

```csharp
[Obsolete("Use GlobalVars.CurrentTime instead.")]
float CurrentTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GlobalVars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L21)

```csharp
ref CGlobalVars GlobalVars { get; }
```

#### Property Value

- [CGlobalVars](/docs/api/shared/natives/cglobalvars)

### Map

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L15)

```csharp
[Obsolete("Use GlobalVars.MapName instead.")]
string Map { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxPlayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L33)

```csharp
[Obsolete("Use GlobalVars.MaxClients instead.")]
int MaxPlayers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ServerIP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L10)

```csharp
string ServerIP { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L58)

```csharp
[Obsolete("Use GlobalVars.TickCount instead.")]
int TickCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ExecuteCommand(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L40)

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.

### ExecuteCommandWithBuffer(string, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L47)

```csharp
void ExecuteCommandWithBuffer(string command, Action<string> bufferCallback)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.
- **bufferCallback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The callback to receive the output of the command.

### FindGameSystemByName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L66)

```csharp
nint? FindGameSystemByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the game system.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The game system handle. Null if not found.

### IsMapValid(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L28)

```csharp
bool IsMapValid(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The map string to validate. It also supports Workshop ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the map is valid; otherwise, false.

