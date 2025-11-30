---
title: CBaseCombatCharacter
---

# Interface CBaseCombatCharacter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseCombatCharacter : CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseFlex](/docs/api/schemadefinitions/cbaseflex)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseFlex>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseCombatCharacter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ApplyStressDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L24)

```csharp
ref bool ApplyStressDamage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeathEventsDispatched

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L26)

```csharp
ref bool DeathEventsDispatched { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceServerRagdoll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L18)

```csharp
ref bool ForceServerRagdoll { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Hull

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L32)

```csharp
ref Hull_t Hull { get; }
```

#### Property Value

- [Hull_t](/docs/api/schemadefinitions/hull_t)

### ImpactEnergyScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L22)

```csharp
ref float ImpactEnergyScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MovementStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L36)

```csharp
CMovementStatsProperty MovementStats { get; }
```

#### Property Value

- [CMovementStatsProperty](/docs/api/schemadefinitions/cmovementstatsproperty)

### MyWearables

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L20)

```csharp
ref CUtlVector<CHandle<CEconWearable>> MyWearables { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CEconWearable](/docs/api/schemadefinitions/ceconwearable)>>

### NavHullIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L34)

```csharp
ref uint NavHullIdx { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StrRelationships

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L30)

```csharp
string StrRelationships { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VecRelationships

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L28)

```csharp
ref CUtlVector<RelationshipOverride_t> VecRelationships { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RelationshipOverride_t](/docs/api/schemadefinitions/relationshipoverride_t)>

## Methods

### MyWearablesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L38)

```csharp
void MyWearablesUpdated()
```

