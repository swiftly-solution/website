---
title: IEngineService
---

# Interface IEngineService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Services](/docs/api/services)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IEngineService
```

## Properties

### CurrentTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L58)

The time since the server started.

```csharp
[Obsolete("Use GlobalVars.CurrentTime instead.")]
float CurrentTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GlobalVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L27)

Gets a reference to the global variables structure.

```csharp
ref CGlobalVars GlobalVars { get; }
```

#### Property Value

- [CGlobalVars](/docs/api/natives/cglobalvars)

### Map

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L16)

Gets the map that the server is running

```csharp
[Obsolete("Use GlobalVars.MapName instead.")]
string Map { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L39)

Gets the maximum number of players allowed in the game.

```csharp
[Obsolete("Use GlobalVars.MaxClients instead.")]
int MaxPlayers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ServerIP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L11)

The IP address of the server.

```csharp
string? ServerIP { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### TickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L64)

The number of simulation ticks that have occurred since the server started.

```csharp
[Obsolete("Use GlobalVars.TickCount instead.")]
int TickCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorkshopId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L22)

Gets the Workshop ID of the current map.

```csharp
string WorkshopId { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DispatchParticleEffect(string, ParticleAttachment_t, byte, CUtlSymbolLarge, CRecipientFilter, bool, int, CBaseEntity?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L85)

Dispatches a particle effect to the specified recipients.

```csharp
void DispatchParticleEffect(string particleName, ParticleAttachment_t attachmentType, byte attachmentPoint, CUtlSymbolLarge attachmentName, CRecipientFilter filter, bool resetAllParticlesOnEntity = false, int splitScreenSlot = 0, CBaseEntity? entity = null)
```

#### Parameters

- **particleName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the particle effect.
- **attachmentType**: [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t) - The type of attachment for the particle effect.
- **attachmentPoint**: [byte](https://learn.microsoft.com/dotnet/api/system.byte) - The attachment point for the particle effect.
- **attachmentName**: [CUtlSymbolLarge](/docs/api/natives/cutlsymbollarge) - The name of the attachment for the particle effect.
- **filter**: [CRecipientFilter](/docs/api/natives/crecipientfilter) - The recipient filter for the particle effect.
- **resetAllParticlesOnEntity**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to reset all particles on the entity.
- **splitScreenSlot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The split screen slot for the particle effect.
- **entity**: [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)? - The entity to attach the particle effect to.

### ExecuteCommand(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L46)

Executes the specified command string in the current context.

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.

### ExecuteCommandWithBuffer(string, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L53)

Executes the specified command string in the current context.

```csharp
void ExecuteCommandWithBuffer(string command, Action<string> bufferCallback)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.
- **bufferCallback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The callback to receive the output of the command.

### FindGameSystemByName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L72)

Find a game system by name.

```csharp
nint? FindGameSystemByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the game system.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The game system handle. Null if not found.

### IsMapValid(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L34)

Determines whether the specified map string represents a valid map in server files.

```csharp
bool IsMapValid(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The map string to validate. It also supports Workshop ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the map is valid; otherwise, false.

