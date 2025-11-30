---
title: CPlayer_MovementServices_Humanoid
---

# Interface CPlayer_MovementServices_Humanoid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayer_MovementServices_Humanoid : CPlayer_MovementServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaClass<CPlayer_MovementServices_Humanoid>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayer_MovementServices](/docs/api/schemadefinitions/cplayer_movementservices)
- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_MovementServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_MovementServices_Humanoid>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CrouchState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L24)

```csharp
ref uint CrouchState { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### CrouchTransitionStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L26)

```csharp
GameTime_t CrouchTransitionStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Ducked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L28)

```csharp
ref bool Ducked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Ducking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L30)

```csharp
ref bool Ducking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FallVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L20)

```csharp
ref float FallVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroundNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L34)

```csharp
ref Vector GroundNormal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### InCrouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L22)

```csharp
ref bool InCrouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InDuckJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L32)

```csharp
ref bool InDuckJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SmoothedVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L42)

```csharp
ref Vector SmoothedVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StepSoundTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L18)

```csharp
ref float StepSoundTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Stepside

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L40)

```csharp
ref int Stepside { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SurfaceFriction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L36)

```csharp
ref float SurfaceFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SurfaceProps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L38)

```csharp
ref CUtlStringToken SurfaceProps { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

## Methods

### CrouchStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L46)

```csharp
void CrouchStateUpdated()
```

### CrouchTransitionStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L47)

```csharp
void CrouchTransitionStartTimeUpdated()
```

### DuckedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L48)

```csharp
void DuckedUpdated()
```

### DuckingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L49)

```csharp
void DuckingUpdated()
```

### FallVelocityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L44)

```csharp
void FallVelocityUpdated()
```

### InCrouchUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L45)

```csharp
void InCrouchUpdated()
```

### InDuckJumpUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L50)

```csharp
void InDuckJumpUpdated()
```

