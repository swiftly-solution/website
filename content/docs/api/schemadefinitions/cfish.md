---
title: CFish
---

# Interface CFish

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFish : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CFish>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFish>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Angle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L28)

```csharp
ref float Angle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngleChange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L30)

```csharp
ref float AngleChange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AvoidRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L48)

```csharp
ref float AvoidRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CalmSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L44)

```csharp
ref float CalmSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DesiredSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L42)

```csharp
ref float DesiredSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DisperseTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L60)

```csharp
CountdownTimer DisperseTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Forward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L32)

```csharp
ref Vector Forward { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### GoTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L54)

```csharp
CountdownTimer GoTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Id

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L20)

```csharp
ref uint Id { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MoveTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L56)

```csharp
CountdownTimer MoveTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### PanicSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L46)

```csharp
ref float PanicSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PanicTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L58)

```csharp
CountdownTimer PanicTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Perp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L34)

```csharp
ref Vector Perp { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Pool

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L18)

```csharp
ref CHandle<CFishPool> Pool { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CFishPool](/docs/api/schemadefinitions/cfishpool)>

### PoolOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L36)

```csharp
ref Vector PoolOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ProximityTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L62)

```csharp
CountdownTimer ProximityTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Speed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L40)

```csharp
ref float Speed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnClockwise

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L52)

```csharp
ref bool TurnClockwise { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TurnTimer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L50)

```csharp
CountdownTimer TurnTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/schemadefinitions/countdowntimer)

### Visible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L64)

```csharp
ref CUtlVector<PointerTo<CFish>> Visible { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CFish](/docs/api/schemadefinitions/cfish)>>

### WaterLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L38)

```csharp
ref float WaterLevel { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### X

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L22)

```csharp
ref float X { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Y

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L24)

```csharp
ref float Y { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Z

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L26)

```csharp
ref float Z { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AngleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L69)

```csharp
void AngleUpdated()
```

### PoolOriginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L70)

```csharp
void PoolOriginUpdated()
```

### WaterLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L71)

```csharp
void WaterLevelUpdated()
```

### XUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L66)

```csharp
void XUpdated()
```

### YUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L67)

```csharp
void YUpdated()
```

### ZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFish.cs#L68)

```csharp
void ZUpdated()
```

