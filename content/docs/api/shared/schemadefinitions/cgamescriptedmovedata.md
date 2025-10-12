---
title: CGameScriptedMoveData
---

```csharp
public interface CGameScriptedMoveData : ISchemaClass<CGameScriptedMoveData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccumulatedRootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L16)

```csharp
ref Vector AccumulatedRootMotion { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### AccumulatedRootMotionRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L18)

```csharp
ref QAngle AccumulatedRootMotionRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Active

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L34)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L28)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Current

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L24)

```csharp
ref QAngle Current { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Dest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L46)

```csharp
ref Vector Dest { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### DestEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L50)

```csharp
ref CHandle<CBaseEntity> DestEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Dst

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L48)

```csharp
ref QAngle Dst { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L30)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForcedCrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L42)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/shared/schemadefinitions/forcedcrouchstate_t)

### IgnoreCollisions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L44)

```csharp
ref bool IgnoreCollisions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L38)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockedSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L26)

```csharp
ref float LockedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Src

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L20)

```csharp
ref Vector Src { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Src1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L22)

```csharp
ref QAngle Src1 { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L32)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Success

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L40)

```csharp
ref bool Success { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeleportOnEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L36)

```csharp
ref bool TeleportOnEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

