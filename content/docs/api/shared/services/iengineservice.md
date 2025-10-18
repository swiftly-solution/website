---
title: IEngineService
---

```csharp
public interface IEngineService
```

## Properties

### CurrentTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L43)

```csharp
float CurrentTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Map

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L13)

```csharp
string Map { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxPlayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L25)

```csharp
int MaxPlayers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ServerIP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L8)

```csharp
string ServerIP { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L48)

```csharp
int TickCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ExecuteCommand(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L31)

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.

### ExecuteCommandWithBuffer(string, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L38)

```csharp
void ExecuteCommandWithBuffer(string command, Action<string> bufferCallback)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.
- **bufferCallback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The callback to receive the output of the command.

### FindGameSystemByName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L55)

```csharp
nint? FindGameSystemByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the game system.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The game system handle. Null if not found.

### IsMapValid(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L20)

```csharp
bool IsMapValid(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The map string to validate. It also supports Workshop ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the map is valid; otherwise, false.

