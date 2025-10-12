---
title: CPlayer_MovementServices_Humanoid
---

```csharp
public interface CPlayer_MovementServices_Humanoid : CPlayer_MovementServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaClass<CPlayer_MovementServices_Humanoid>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L22)

```csharp
ref uint CrouchState { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### CrouchTransitionStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L24)

```csharp
GameTime_t CrouchTransitionStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Ducked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L26)

```csharp
ref bool Ducked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Ducking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L28)

```csharp
ref bool Ducking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FallVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L18)

```csharp
ref float FallVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroundNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L32)

```csharp
ref Vector GroundNormal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### InCrouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L20)

```csharp
ref bool InCrouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InDuckJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L30)

```csharp
ref bool InDuckJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SmoothedVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L40)

```csharp
ref Vector SmoothedVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### StepSoundTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L16)

```csharp
ref float StepSoundTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Stepside

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L38)

```csharp
ref int Stepside { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SurfaceFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L34)

```csharp
ref float SurfaceFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SurfaceProps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L36)

```csharp
ref CUtlStringToken SurfaceProps { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

## Methods

### CrouchStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L44)

```csharp
void CrouchStateUpdated()
```

### CrouchTransitionStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L45)

```csharp
void CrouchTransitionStartTimeUpdated()
```

### DuckedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L46)

```csharp
void DuckedUpdated()
```

### DuckingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L47)

```csharp
void DuckingUpdated()
```

### FallVelocityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L42)

```csharp
void FallVelocityUpdated()
```

### InCrouchUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L43)

```csharp
void InCrouchUpdated()
```

### InDuckJumpUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_MovementServices_Humanoid.cs#L48)

```csharp
void InDuckJumpUpdated()
```

