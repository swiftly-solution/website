---
title: CGameScriptedMoveData
---

```csharp
public interface CGameScriptedMoveData : ISchemaClass<CGameScriptedMoveData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccumulatedRootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L17)

```csharp
ref Vector AccumulatedRootMotion { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### AccumulatedRootMotionRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L19)

```csharp
ref QAngle AccumulatedRootMotionRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Active

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L35)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L29)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Current

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L25)

```csharp
ref QAngle Current { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Dest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L47)

```csharp
ref Vector Dest { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### DestEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L51)

```csharp
ref CHandle<CBaseEntity> DestEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Dst

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L49)

```csharp
ref QAngle Dst { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L31)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForcedCrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L43)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/shared/schemadefinitions/forcedcrouchstate_t)

### IgnoreCollisions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L45)

```csharp
ref bool IgnoreCollisions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L39)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockedSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L27)

```csharp
ref float LockedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Src

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L21)

```csharp
ref Vector Src { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Src1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L23)

```csharp
ref QAngle Src1 { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L33)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Success

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L41)

```csharp
ref bool Success { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeleportOnEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L37)

```csharp
ref bool TeleportOnEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

