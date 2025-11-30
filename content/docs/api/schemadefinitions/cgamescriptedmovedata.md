---
title: CGameScriptedMoveData
---

# Interface CGameScriptedMoveData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameScriptedMoveData : ISchemaClass<CGameScriptedMoveData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CGameScriptedMoveData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccumulatedRootMotion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L18)

```csharp
ref Vector AccumulatedRootMotion { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### AccumulatedRootMotionRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L20)

```csharp
ref QAngle AccumulatedRootMotionRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L36)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L30)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Current

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L26)

```csharp
ref QAngle Current { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Dest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L48)

```csharp
ref Vector Dest { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DestEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L52)

```csharp
ref CHandle<CBaseEntity> DestEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### Dst

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L50)

```csharp
ref QAngle Dst { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L32)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForcedCrouchState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L44)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/schemadefinitions/forcedcrouchstate_t)

### IgnoreCollisions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L46)

```csharp
ref bool IgnoreCollisions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L40)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockedSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L28)

```csharp
ref float LockedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Src

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L22)

```csharp
ref Vector Src { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Src1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L24)

```csharp
ref QAngle Src1 { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### StartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L34)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Success

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L42)

```csharp
ref bool Success { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TeleportOnEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveData.cs#L38)

```csharp
ref bool TeleportOnEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

