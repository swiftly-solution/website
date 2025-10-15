---
title: CFish
---

```csharp
public interface CFish : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CFish>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Angle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L27)

```csharp
ref float Angle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngleChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L29)

```csharp
ref float AngleChange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AvoidRange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L47)

```csharp
ref float AvoidRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CalmSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L43)

```csharp
ref float CalmSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DesiredSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L41)

```csharp
ref float DesiredSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DisperseTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L59)

```csharp
CountdownTimer DisperseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Forward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L31)

```csharp
ref Vector Forward { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### GoTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L53)

```csharp
CountdownTimer GoTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Id

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L19)

```csharp
ref uint Id { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MoveTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L55)

```csharp
CountdownTimer MoveTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### PanicSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L45)

```csharp
ref float PanicSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PanicTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L57)

```csharp
CountdownTimer PanicTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Perp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L33)

```csharp
ref Vector Perp { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Pool

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L17)

```csharp
ref CHandle<CFishPool> Pool { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CFishPool](/docs/api/shared/schemadefinitions/cfishpool)>

### PoolOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L35)

```csharp
ref Vector PoolOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ProximityTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L61)

```csharp
CountdownTimer ProximityTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Speed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L39)

```csharp
ref float Speed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnClockwise

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L51)

```csharp
ref bool TurnClockwise { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TurnTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L49)

```csharp
CountdownTimer TurnTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L63)

```csharp
ref CUtlVector<PointerTo<CFish>> Visible { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CFish](/docs/api/shared/schemadefinitions/cfish)>>

### WaterLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L37)

```csharp
ref float WaterLevel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### X

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L21)

```csharp
ref float X { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Y

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L23)

```csharp
ref float Y { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Z

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L25)

```csharp
ref float Z { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AngleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L68)

```csharp
void AngleUpdated()
```

### PoolOriginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L69)

```csharp
void PoolOriginUpdated()
```

### WaterLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L70)

```csharp
void WaterLevelUpdated()
```

### XUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L65)

```csharp
void XUpdated()
```

### YUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L66)

```csharp
void YUpdated()
```

### ZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L67)

```csharp
void ZUpdated()
```

