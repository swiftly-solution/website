---
title: CInferno
---

```csharp
public interface CInferno : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CInferno>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActiveTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L52)

```csharp
IntervalTimer ActiveTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

### BookkeepingTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L60)

```csharp
CountdownTimer BookkeepingTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### BurnNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L24)

```csharp
ISchemaFixedArray<Vector> BurnNormal { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

### DamageRampTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L42)

```csharp
CountdownTimer DamageRampTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### DamageTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L40)

```csharp
CountdownTimer DamageTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Extent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L38)

```csharp
Extent Extent { get; }
```

#### Property Value

- [Extent](/docs/api/shared/schemadefinitions/extent)

### FireCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L26)

```csharp
ref int FireCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FireEffectTickBegin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L30)

```csharp
ref int FireEffectTickBegin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FireIsBurning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L22)

```csharp
ISchemaFixedArray<bool> FireIsBurning { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### FireLifetime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L32)

```csharp
ref float FireLifetime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FireParentPositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L20)

```csharp
ISchemaFixedArray<Vector> FireParentPositions { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

### FirePositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L18)

```csharp
ISchemaFixedArray<Vector> FirePositions { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

### FireSpawnOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L54)

```csharp
ref int FireSpawnOffset { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InPostEffectTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L34)

```csharp
ref bool InPostEffectTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InfernoType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L28)

```csharp
ref int InfernoType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitialSplashVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L46)

```csharp
ref Vector InitialSplashVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MaxFlames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L56)

```csharp
ref int MaxFlames { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NextSpreadTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L62)

```csharp
CountdownTimer NextSpreadTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### OriginalSpawnLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L50)

```csharp
ref Vector OriginalSpawnLocation { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SourceItemDefIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L64)

```csharp
ref ushort SourceItemDefIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SplashVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L44)

```csharp
ref Vector SplashVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SpreadCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L58)

```csharp
ref int SpreadCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L48)

```csharp
ref Vector StartPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### WasCreatedInSmoke

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L36)

```csharp
ref bool WasCreatedInSmoke { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### BurnNormalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L69)

```csharp
void BurnNormalUpdated()
```

### FireCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L70)

```csharp
void FireCountUpdated()
```

### FireEffectTickBeginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L72)

```csharp
void FireEffectTickBeginUpdated()
```

### FireIsBurningUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L68)

```csharp
void FireIsBurningUpdated()
```

### FireLifetimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L73)

```csharp
void FireLifetimeUpdated()
```

### FireParentPositionsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L67)

```csharp
void FireParentPositionsUpdated()
```

### FirePositionsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L66)

```csharp
void FirePositionsUpdated()
```

### InPostEffectTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L74)

```csharp
void InPostEffectTimeUpdated()
```

### InfernoTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInferno.cs#L71)

```csharp
void InfernoTypeUpdated()
```

