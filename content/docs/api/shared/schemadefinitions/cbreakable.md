---
title: CBreakable
---

```csharp
public interface CBreakable : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBreakable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Breaker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L20)

```csharp
ref CHandle<CBaseEntity> Breaker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### CPropDataComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L16)

```csharp
CPropDataComponent CPropDataComponent { get; }
```

#### Property Value

- [CPropDataComponent](/docs/api/shared/schemadefinitions/cpropdatacomponent)

### Explosion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L22)

```csharp
ref Explosions Explosion { get; }
```

#### Property Value

- [Explosions](/docs/api/shared/schemadefinitions/explosions)

### ImpactEnergyScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L32)

```csharp
ref float ImpactEnergyScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPhysicsInfluenceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L45)

```csharp
GameTime_t LastPhysicsInfluenceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Material

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L18)

```csharp
ref Materials Material { get; }
```

#### Property Value

- [Materials](/docs/api/shared/schemadefinitions/materials)

### MinHealthDmg

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L28)

```csharp
ref int MinHealthDmg { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnBreak

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L36)

```csharp
CEntityIOOutput OnBreak { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnHealthChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L39)

```csharp
SchemaUntypedField OnHealthChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OverrideBlockLOS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L34)

```csharp
ref EOverrideBlockLOS_t OverrideBlockLOS { get; }
```

#### Property Value

- [EOverrideBlockLOS_t](/docs/api/shared/schemadefinitions/eoverrideblocklos_t)

### PerformanceMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L41)

```csharp
ref PerformanceMode_t PerformanceMode { get; }
```

#### Property Value

- [PerformanceMode_t](/docs/api/shared/schemadefinitions/performancemode_t)

### PhysicsAttacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L43)

```csharp
ref CHandle<CBasePlayerPawn> PhysicsAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

### PressureDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L26)

```csharp
ref float PressureDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PropData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L30)

```csharp
string PropData { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpawnObject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L24)

```csharp
string SpawnObject { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### CPropDataComponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakable.cs#L47)

```csharp
void CPropDataComponentUpdated()
```

