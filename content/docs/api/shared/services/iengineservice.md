---
title: IEngineService
---

```csharp
public interface IEngineService
```

## Properties

### CurrentTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L58)

```csharp
[Obsolete("Use GlobalVars.CurrentTime instead.")]
float CurrentTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GlobalVars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L27)

```csharp
ref CGlobalVars GlobalVars { get; }
```

#### Property Value

- [CGlobalVars](/docs/api/shared/natives/cglobalvars)

### Map

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L16)

```csharp
[Obsolete("Use GlobalVars.MapName instead.")]
string Map { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxPlayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L39)

```csharp
[Obsolete("Use GlobalVars.MaxClients instead.")]
int MaxPlayers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ServerIP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L11)

```csharp
string? ServerIP { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### TickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L64)

```csharp
[Obsolete("Use GlobalVars.TickCount instead.")]
int TickCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorkshopId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L22)

```csharp
string WorkshopId { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DispatchParticleEffect(string, ParticleAttachment_t, byte, CUtlSymbolLarge, CRecipientFilter, bool, int, CBaseEntity?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L85)

```csharp
void DispatchParticleEffect(string particleName, ParticleAttachment_t attachmentType, byte attachmentPoint, CUtlSymbolLarge attachmentName, CRecipientFilter filter, bool resetAllParticlesOnEntity = false, int splitScreenSlot = 0, CBaseEntity? entity = null)
```

#### Parameters

- **particleName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the particle effect.
- **attachmentType**: [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t) - The type of attachment for the particle effect.
- **attachmentPoint**: [byte](https://learn.microsoft.com/dotnet/api/system.byte) - The attachment point for the particle effect.
- **attachmentName**: [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge) - The name of the attachment for the particle effect.
- **filter**: [CRecipientFilter](/docs/api/shared/natives/crecipientfilter) - The recipient filter for the particle effect.
- **resetAllParticlesOnEntity**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to reset all particles on the entity.
- **splitScreenSlot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The split screen slot for the particle effect.
- **entity**: [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)? - The entity to attach the particle effect to.

### ExecuteCommand(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L46)

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.

### ExecuteCommandWithBuffer(string, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L53)

```csharp
void ExecuteCommandWithBuffer(string command, Action<string> bufferCallback)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The command to execute. Cannot be null or empty.
- **bufferCallback**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The callback to receive the output of the command.

### FindGameSystemByName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L72)

```csharp
nint? FindGameSystemByName(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the game system.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)? - The game system handle. Null if not found.

### IsMapValid(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Engine/IEngineService.cs#L34)

```csharp
bool IsMapValid(string map)
```

#### Parameters

- **map**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The map string to validate. It also supports Workshop ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the map is valid; otherwise, false.

